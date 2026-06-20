import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import AnalyticsExcludable from '@/components/AnalyticsExcludable';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GoogleAnalytics } from '@next/third-parties/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ahmed Hamdy Musallam - Senior Product Designer',
  description:
    'Product Designer crafting AI-powered tools, developer products, and B2B platforms across SaaS and fintech. Currently designing AI tools at VOIS (Vodafone Intelligent Solutions).',
  keywords: ['Product Designer', 'UX Designer', 'AI tools', 'SaaS', 'Fintech', 'Cairo'],
  authors: [{ name: 'Ahmed Hamdy Musallam' }],
  metadataBase: new URL('https://ahmmusallam.com'),
  openGraph: {
    title: 'Ahmed Hamdy Musallam - Senior Product Designer',
    description: 'AI tools, developer products, and B2B platforms across SaaS and fintech.',
    url: 'https://ahmmusallam.com',
    siteName: 'Ahmed Hamdy Musallam',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="relative">
        <Nav />
        <main className="relative z-10">{children}</main>
        <Footer />
        <AnalyticsExcludable />
        <SpeedInsights />
      </body>
      {process.env.NEXT_PUBLIC_GA_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      )}
    </html>
  );
}
