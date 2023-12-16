import { Background, Navbar } from '@/components';
import type { Metadata } from 'next';
import './globals.css';
import { nunito, GeistMono } from '@/constants';
import clsx from 'clsx';
import { SectionProvider } from '@/contexts';

export const metadata: Metadata = {
  title: `Jerry's portfolio`,
  description: 'Jerry Nguyen portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={clsx(nunito.className, GeistMono.variable)}>
        <Background />
        <SectionProvider>
          <Navbar />
          {children}
        </SectionProvider>
      </body>
    </html>
  );
}
