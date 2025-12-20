/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: '.',
    resolveAlias: {
      canvas: './empty-module.js',
    },
  },
  webpack: (config, { isServer }) => {
    // Exclude large native modules that shouldn't be bundled
    const externals = [
      'onnxruntime-node',
      '@huggingface/transformers',
      'sharp',
      ...(config.externals || []),
    ];
    config.externals = externals;
    
    // Handle .node binary files
    config.module.rules.push({
      test: /\.node$/,
      use: 'node-loader',
    });
    
    return config;
  },
}

export default nextConfig