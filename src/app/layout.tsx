import clsx from 'clsx';
import type { Metadata } from 'next';

import { BackToTop, Background, Footer, Navbar } from '@/components';
import { nunito } from '@/constants';
import { SectionProvider } from '@/contexts';

import './globals.css';

export const metadata: Metadata = {
  title: `Jerry's portfolio`,
  description: 'Jerry Nguyen portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={clsx(nunito.variable)}>
        <Background />
        <SectionProvider>
          <Navbar />
          <main id="main" className="overflow-x-clip">
            {children}
          </main>
          <Footer />
          <BackToTop />
        </SectionProvider>
      </body>
    </html>
  );
}
