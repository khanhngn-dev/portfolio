import { Background, Navbar } from '@/components';
import type { Metadata } from 'next';
import './globals.css';
import { maven_pro, nunito } from '@/constants';

export const metadata: Metadata = {
  title: `Jerry's portfolio`,
  description: 'Jerry Nguyen portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Background />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
