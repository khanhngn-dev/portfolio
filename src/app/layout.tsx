import { Background, Footer, Navbar } from '@/components';
import type { Metadata } from 'next';
import './globals.css';
import { nunito } from '@/constants';
import clsx from 'clsx';
import { SectionProvider } from '@/contexts';

export const metadata: Metadata = {
  title: `Jerry's portfolio`,
  description: 'Jerry Nguyen portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={clsx(nunito.className)}>
        <Background />
        <SectionProvider>
          <Navbar />
          {children}
          <Footer />
        </SectionProvider>
      </body>
    </html>
  );
}
