'use client';

import Link from 'next/link';
import { Logo } from './logo';

export function Navigation() {
	return (
		<nav className='flex items-center gap-7'>
			<Link href='/'>
				<Logo />
			</Link>
			<Link href='/notes' className='opacity-75'>
				badshah hsadflsjdfkajsdflkajhsdglkjashglkajsdnvkj
			</Link>
			<Link href='/projects' className='opacity-75'>
				raftaar
			</Link>
		</nav>
	);
}
