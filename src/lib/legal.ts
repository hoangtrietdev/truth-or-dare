export const LEGAL_CONFIG = {
  appName: process.env.NEXT_PUBLIC_APP_NAME || 'Truth or Dare - hoangtrietdev Edition',
  websiteUrl: process.env.NEXT_PUBLIC_WEBSITE_URL || 'https://truth-or-dare-five-blue.vercel.app',
  operatorName: process.env.NEXT_PUBLIC_OPERATOR_NAME || 'hoangtrietdev',
  operatorAddress:
    process.env.NEXT_PUBLIC_OPERATOR_ADDRESS ||
    'Business address not configured. Set NEXT_PUBLIC_OPERATOR_ADDRESS.',
  contactEmail:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'hoangtrietdev@gmail.com',
  supportEmail:
    process.env.NEXT_PUBLIC_SUPPORT_EMAIL || 'hoangtrietdev@gmail.com',
  dpoEmail: process.env.NEXT_PUBLIC_DPO_EMAIL || 'hoangtrietdev@gmail.com',
  governingLaw:
    process.env.NEXT_PUBLIC_GOVERNING_LAW ||
    'The laws of your principal place of business',
  disputeVenue:
    process.env.NEXT_PUBLIC_DISPUTE_VENUE ||
    'Courts with jurisdiction at your principal place of business',
  effectiveDate:
    process.env.NEXT_PUBLIC_LEGAL_EFFECTIVE_DATE || '2026-05-29',
  minimumAge: 13,
} as const;

export const COOKIE_CONSENT_STORAGE_KEY = 'tod_cookie_consent_v1';

export type CookieConsentChoice = 'accepted' | 'rejected';

export const ESSENTIAL_COOKIES = [
  {
    name: 'tod_cookie_consent_v1',
    provider: 'Truth or Dare App',
    purpose: 'Stores your cookie consent choice.',
    duration: '12 months',
    type: 'Strictly necessary',
  },
] as const;

export const OPTIONAL_COOKIES = [
  {
    name: 'No optional cookies currently in use',
    provider: 'N/A',
    purpose:
      'Optional cookies (analytics, ad, personalization) are disabled by default and require prior consent in the EEA/UK/CH.',
    duration: 'N/A',
    type: 'Optional',
  },
] as const;
