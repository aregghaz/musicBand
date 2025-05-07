/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
  },

  webpack: (config) => {
    config.externals = [...config.externals, { canvas: 'canvas' }];

    config.module.rules.unshift({
      test: /pdf\.worker\.(min\.)?js/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[contenthash].[ext]',
            publicPath: '.next/static/worker',
            outputPath: 'static/worker',
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
