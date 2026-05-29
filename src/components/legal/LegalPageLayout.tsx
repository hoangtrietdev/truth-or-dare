import Head from 'next/head';
import Link from 'next/link';
import { ReactNode } from 'react';
import { LEGAL_CONFIG } from '@/lib/legal';

interface LegalPageLayoutProps {
  title: string;
  description: string;
  children: ReactNode;
}

export default function LegalPageLayout({
  title,
  description,
  children,
}: LegalPageLayoutProps) {
  const fullTitle = `${title} | ${LEGAL_CONFIG.appName}`;

  return (
    <>
      <Head>
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-cyber-darker via-cyber-dark to-purple-900 text-white p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          <header className="mb-6 md:mb-8">
            <Link
              href="/"
              className="inline-flex items-center text-cyber-cyan hover:text-cyber-pink transition-colors"
            >
              ← Back to app
            </Link>
          </header>

          <section className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/15 p-6 md:p-10 shadow-2xl">
            {children}
          </section>
        </div>
      </main>
    </>
  );
}
