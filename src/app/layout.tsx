import { BackToTop, Background, Footer, Navbar } from '@/components';
import type { Metadata } from 'next';
import './globals.css';
import { nunito } from '@/constants';
import { SectionProvider } from '@/contexts';
import { SpeedInsights } from '@vercel/speed-insights/next';
import clsx from 'clsx';

export const metadata: Metadata = {
  title: `Jerry's portfolio`,
  description: 'Jerry Nguyen portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={clsx(nunito.variable)}>
        <SpeedInsights />
        <Background />
        <SectionProvider>
          <Navbar />
          {children}
          <Footer />
          <BackToTop />
        </SectionProvider>
      </body>
    </html>
  );
}
