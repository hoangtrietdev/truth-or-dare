import { useState } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { truthOrDareAPI } from '@/lib/axios';

type GameMode = 'truth' | 'dare' | 'both';
type Rating = 'pg' | 'pg13' | 'r';

interface Question {
  id: string;
  type: 'TRUTH' | 'DARE' | 'RANDOM';
  rating: string;
  question: string;
}

export default function Home() {
  const [mode, setMode] = useState<GameMode>('both');
  const [rating, setRating] = useState<Rating>('pg');
  const [isAdultMode, setIsAdultMode] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [questionKey, setQuestionKey] = useState(0);

  const handleModeChange = (newMode: GameMode) => {
    setMode(newMode);
  };

  const handleAdultModeToggle = () => {
    setIsAdultMode(!isAdultMode);
    setRating(!isAdultMode ? 'r' : 'pg');
  };

  const fetchQuestion = async () => {
    setIsLoading(true);
    try {
      let response;
      
      if (mode === 'truth') {
        response = await truthOrDareAPI.getTruth(rating);
      } else if (mode === 'dare') {
        response = await truthOrDareAPI.getDare(rating);
      } else {
        response = await truthOrDareAPI.getRandom(rating);
      }

      setCurrentQuestion(response);
      setQuestionKey((prev) => prev + 1);
    } catch (error) {
      console.error('Error fetching question:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Truth or Dare - Boyplaydn Edition</title>
        <meta name="description" content="A futuristic Truth or Dare game" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-cyber-darker via-cyber-dark to-purple-900 flex flex-col items-center justify-center p-4 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyber-cyan/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyber-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyber-pink/5 rounded-full blur-3xl" />
        </div>

        {/* Main Container */}
        <div className="max-w-2xl w-full z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan via-cyber-purple to-cyber-pink mb-2 font-['Orbitron']">
              TRUTH OR DARE
            </h1>
            <p className="text-cyber-cyan/70 text-sm md:text-base font-medium tracking-wider">
              Boyplaydn Edition - V1.0
            </p>
          </motion.div>

          {/* Mode Selection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex gap-3 mb-6"
          >
            {(['truth', 'dare', 'both'] as GameMode[]).map((m) => (
              <button
                key={m}
                onClick={() => handleModeChange(m)}
                className={`flex-1 py-4 px-6 rounded-xl font-bold text-sm md:text-base uppercase tracking-wide transition-all duration-300 relative overflow-hidden group ${
                  mode === m
                    ? 'bg-gradient-to-r from-cyber-cyan to-cyber-purple text-white shadow-lg shadow-cyber-cyan/50'
                    : 'bg-white/5 backdrop-blur-sm text-white/60 hover:bg-white/10 border border-white/10'
                }`}
              >
                <span className="relative z-10">{m}</span>
                {mode === m && (
                  <motion.div
                    layoutId="activeMode"
                    className="absolute inset-0 bg-gradient-to-r from-cyber-cyan/20 to-cyber-purple/20"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </motion.div>

          {/* 18+ Toggle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-between mb-8 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">🔞</span>
              <div>
                <p className="text-white font-semibold">18+ Mode</p>
                <p className="text-white/50 text-xs">Mature content</p>
              </div>
            </div>
            <button
              onClick={handleAdultModeToggle}
              className={`relative w-16 h-8 rounded-full transition-all duration-300 ${
                isAdultMode ? 'bg-gradient-to-r from-cyber-pink to-cyber-purple' : 'bg-white/20'
              }`}
            >
              <motion.div
                animate={{ x: isAdultMode ? 32 : 4 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-lg"
              />
            </button>
          </motion.div>

          {/* Question Card */}
          <AnimatePresence mode="wait">
            {currentQuestion ? (
              <motion.div
                key={questionKey}
                initial={{ opacity: 0, scale: 0.9, rotateX: -10 }}
                animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotateX: 10 }}
                transition={{ duration: 0.4 }}
                className="mb-6 p-8 md:p-10 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-2xl relative overflow-hidden animate-glow"
              >
                {/* Card Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/10 to-cyber-purple/10 opacity-50" />
                
                {/* Type Badge */}
                <div className="relative mb-4">
                  <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${
                    currentQuestion.type === 'TRUTH'
                      ? 'bg-cyber-cyan/20 text-cyber-cyan border border-cyber-cyan/50'
                      : currentQuestion.type === 'DARE'
                      ? 'bg-cyber-purple/20 text-cyber-purple border border-cyber-purple/50'
                      : 'bg-cyber-pink/20 text-cyber-pink border border-cyber-pink/50'
                  }`}>
                    {currentQuestion.type}
                  </span>
                </div>

                {/* Question Text */}
                <p className="text-white text-xl md:text-2xl font-semibold leading-relaxed relative">
                  {currentQuestion.question}
                </p>

                {/* Rating Badge */}
                <div className="mt-6 flex items-center gap-2">
                  <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
                    <span className="text-white/60 text-xs uppercase font-medium">
                      Rating: {currentQuestion.rating}
                    </span>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mb-6 p-12 md:p-16 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-2xl flex flex-col items-center justify-center"
              >
                <div className="text-6xl mb-4 animate-float">🎲</div>
                <p className="text-white/60 text-center text-lg">
                  Click the button below to start the game!
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Action Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            onClick={fetchQuestion}
            disabled={isLoading}
            className="w-full py-6 rounded-xl bg-gradient-to-r from-cyber-cyan via-cyber-purple to-cyber-pink text-white font-bold text-lg md:text-xl uppercase tracking-wider shadow-2xl shadow-cyber-purple/50 hover:shadow-cyber-cyan/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              {isLoading ? (
                <>
                  <svg className="animate-spin h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Loading...
                </>
              ) : (
                <>
                  {currentQuestion ? 'Next Challenge' : 'Start Game'}
                  <span className="text-2xl">→</span>
                </>
              )}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyber-purple to-cyber-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>

          {/* Footer Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 text-center text-white/40 text-sm"
          >
            <p>Powered by Truth or Dare Bot API</p>
            <p className="mt-1">Made with 💜 by Boyplaydn</p>
          </motion.div>
        </div>
      </div>
    </>
  );
}
