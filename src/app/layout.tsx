import React from 'react';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const font = Plus_Jakarta_Sans({ subsets: ['latin'] });

export interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <title>CRM</title>
      <link rel="icon" type="image/svg+xml" href="/icons/squares.svg" />
      <body className={font.className}>{children}</body>
    </html>
  );
}
