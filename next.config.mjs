/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    // Halaman lokal yang isinya kembar digabung ke satu halaman utama.
    return [
      { source: "/jasa-web-design-semarang", destination: "/jasa-pembuatan-website-semarang", permanent: true },
      { source: "/web-developer-semarang", destination: "/jasa-pembuatan-website-semarang", permanent: true },
      // MeowLabs POS sudah dihentikan dari website; arahkan pengunjung lama ke daftar produk.
      { source: "/pos", destination: "/produk", permanent: true },
      // Resource hub (bansos AI, API AI gratis, open source) dihapus; arahkan ke catatan studio.
      { source: "/resources", destination: "/blog", permanent: true },
      { source: "/resources/:path*", destination: "/blog", permanent: true },
    ]
  },
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: process.cwd(),
    resolveAlias: {
      canvas: './empty-module.js',
    },
  },
  webpack: (config) => {
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
