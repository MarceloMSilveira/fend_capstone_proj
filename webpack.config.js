import path from "path";
const __dirname = import.meta.dirname;
import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import autoprefixer from "autoprefixer"; 

export default (env,argv) =>  {
  const isDev = argv.mode === 'development';
  return {
    entry: './src/index.js',
    plugins: [
      new HtmlWebpackPlugin({
        template: './frontend/index.html',
        minify: !isDev
      }),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
      }),
    ],
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
    devtool: isDev ? 'source-map' : false, // adicionar source-map
    devServer: isDev 
      ? {
          static: './dist',
          open: true,
          hot: true,
          watchFiles: ['frontend/*.html'], // 👈 assiste arquivos HTML
          port: 5001,
          devMiddleware: {
            writeToDisk: true
          },
        }
      : undefined,
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [
                    autoprefixer
                  ]
                }
              }
            }
          ],
        },
        {
          test: /\.(?:js|mjs|cjs)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              targets: "defaults",
              presets: [
                ['@babel/preset-env']
              ]
            }
          }
        },
        { 
          test: /\.html$/i, 
          loader: 'html-loader',
          options: {
            sources: {
              list: [
                { tag: 'img', attribute: 'src', type: 'src' },
                { tag: 'img', attribute: 'srcset', type: 'srcset' },
              ]
            }
          }
        },
        // copia/embeda imagens referenciadas
        {
          test: /\.(png|jpe?g|gif|svg|webp)$/i,
          type: 'asset', // vira dataURI se pequena; copia arquivo se grande
          parser: { dataUrlCondition: { maxSize: 8 * 1024 } }, // 8KB
          generator: { filename: 'images/[name][contenthash][ext]' }
        },
        {
          test: /\.(scss)$/,
          use: [
            {
              // Adds CSS to the DOM by injecting a `<style>` tag
              loader: 'style-loader'
            },
            {
              // Interprets `@import` and `url()` like `import/require()` and will resolve them
              loader: 'css-loader'
            },
            {
              // Loader for webpack to process CSS with PostCSS
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [
                    autoprefixer
                  ]
                }
              }
            },
            {
              // Loads a SASS/SCSS file and compiles it to CSS
              loader: 'sass-loader',
              options: {
                sassOptions: {
                  // Optional: Silence Sass deprecation warnings. See note below.
                  silenceDeprecations: [
                    'mixed-decls',
                    'color-functions',
                    'global-builtin',
                    'import'
                  ]
                }
              }
            }
          ]
        }
      ]
    }
  }
};
