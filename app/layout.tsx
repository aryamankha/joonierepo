'use client';

import { Analytics } from '@vercel/analytics/react';
import { Figtree } from 'next/font/google';
import { Footer } from '~/components/footer';
import { Navigation } from '~/components/navigation';
import './globals.css';

const figtree = Figtree({
	subsets: ['latin'],
	display: 'swap',
	preload: true
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' className={figtree.className}>
			<body className='p-7 min-h-screen flex flex-col antialiased'>
				<Navigation />
				{children}
				<Footer />
				<Analytics />
			</body>
		</html>
	);
}

export const metadata = {
      generator: 'v0.app'
    };
