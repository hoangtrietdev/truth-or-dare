import axios, { AxiosInstance, AxiosError, InternalAxiosRequestConfig } from 'axios';
import toast from 'react-hot-toast';

interface RateLimitInfo {
  remaining: number;
  reset: number;
  isLimited: boolean;
}

class TruthOrDareAPI {
  private api: AxiosInstance;
  private rateLimitInfo: RateLimitInfo = {
    remaining: 100,
    reset: 0,
    isLimited: false,
  };

  constructor() {
    this.api = axios.create({
      baseURL: 'https://api.truthordarebot.xyz/v1',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.setupInterceptors();
  }

  private setupInterceptors() {
    // Request interceptor
    this.api.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        // Check if we're rate limited
        if (this.rateLimitInfo.isLimited) {
          const now = Date.now();
          if (now < this.rateLimitInfo.reset) {
            const waitTime = Math.ceil((this.rateLimitInfo.reset - now) / 1000);
            throw new axios.Cancel(
              `Rate limit exceeded. Please wait ${waitTime} seconds.`
            );
          } else {
            // Reset limit has passed
            this.rateLimitInfo.isLimited = false;
          }
        }

        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // Response interceptor
    this.api.interceptors.response.use(
      (response) => {
        // Extract rate limit headers
        const remaining = response.headers['x-ratelimit-remaining'];
        const reset = response.headers['x-ratelimit-reset'];

        if (remaining !== undefined) {
          this.rateLimitInfo.remaining = parseInt(remaining, 10);
        }

        if (reset !== undefined) {
          this.rateLimitInfo.reset = parseInt(reset, 10) * 1000; // Convert to milliseconds
        }

        // Warn user when approaching limit
        if (this.rateLimitInfo.remaining <= 5 && this.rateLimitInfo.remaining > 0) {
          toast.error(
            `⚠️ Only ${this.rateLimitInfo.remaining} requests remaining!`,
            { duration: 3000 }
          );
        }

        return response;
      },
      (error: AxiosError) => {
        if (axios.isCancel(error)) {
          toast.error(error.message, {
            duration: 5000,
            icon: '⏳',
          });
          return Promise.reject(error);
        }

        if (error.response?.status === 429) {
          // Rate limit exceeded
          const reset = error.response.headers['x-ratelimit-reset'];
          if (reset) {
            this.rateLimitInfo.reset = parseInt(reset, 10) * 1000;
            this.rateLimitInfo.isLimited = true;

            const waitTime = Math.ceil(
              (this.rateLimitInfo.reset - Date.now()) / 1000
            );

            toast.error(
              `🚫 Rate limit exceeded! Please wait ${waitTime} seconds.`,
              {
                duration: 5000,
                style: {
                  background: '#8B5CF6',
                  color: '#fff',
                  border: '1px solid #06B6D4',
                },
              }
            );
          }
        } else if (error.response?.status === 500) {
          toast.error('Server error. Please try again later.', {
            duration: 4000,
          });
        } else if (error.code === 'ECONNABORTED') {
          toast.error('Request timeout. Please check your connection.', {
            duration: 4000,
          });
        } else {
          toast.error('Something went wrong. Please try again.', {
            duration: 4000,
          });
        }

        return Promise.reject(error);
      }
    );
  }

  async getTruth(rating: 'pg' | 'pg13' | 'r' = 'pg') {
    const response = await this.api.get('/truth', {
      params: { rating },
    });
    return response.data;
  }

  async getDare(rating: 'pg' | 'pg13' | 'r' = 'pg') {
    const response = await this.api.get('/dare', {
      params: { rating },
    });
    return response.data;
  }

  async getRandom(rating: 'pg' | 'pg13' | 'r' = 'pg') {
    const response = await this.api.get('/wyr', {
      params: { rating },
    });
    return response.data;
  }

  getRateLimitInfo(): RateLimitInfo {
    return { ...this.rateLimitInfo };
  }
}

export const truthOrDareAPI = new TruthOrDareAPI();
