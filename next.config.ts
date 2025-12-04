import createMDX from '@next/mdx';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
	reactCompiler: true,
	typedRoutes: true,
	experimental: {
		viewTransition: true
	}
};

const withMDX = createMDX({
	extension: /\.(md|mdx)$/,
	options: {
		remarkPlugins: ['remark-gfm'],
		rehypePlugins: []
	}
});

export default withMDX(nextConfig);
