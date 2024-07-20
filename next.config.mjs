/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;
/*
/** @type {import('next').NextConfig} *
const nextConfig = {
    webpack(config, options) {
      config.module.rules.push({
        test: /\.scss$/,
        use: [
          options.defaultLoaders.babel,
          {
            loader: 'sass-loader',
            options: {
              additionalData: `@import "./globals.scss";`, // Importa seu arquivo global.scss
            },
          },
        ],
      });
      return config;
    },
  };
  
  export default nextConfig;*/