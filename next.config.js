export default {
  output: 'export',
  images: {
    unoptimized: true
  },

  webpack: (config) => {
    config.externals = [...config.externals, { canvas: "canvas" }];  // required to make Konva & react-konva work

    // load worker files as a urls with `file-loader`
    config.module.rules.unshift({
      test: /pdf\.worker\.(min\.)?js/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[contenthash].[ext]",
            publicPath: ".next/static/worker",
            outputPath: "static/worker"
          }
        }
      ]
    });

    return config;
  }
};