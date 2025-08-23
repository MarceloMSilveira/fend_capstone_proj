import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import autoprefixer from "autoprefixer";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";
import ImageMinimizerPlugin from "image-minimizer-webpack-plugin";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default (env, argv) => {
  const isDev = argv.mode === 'development';

  return {
    mode: isDev ? 'development' : 'production',
    entry: './src/index.js',
    output: {
      filename: isDev ? 'bundle.js' : 'bundle.[contenthash].js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
      publicPath: '', // importante para produção
    },
    devtool: isDev ? 'source-map' : false,
    devServer: isDev ? {
      static: './dist',
      open: true,
      hot: true,
      watchFiles: ['frontend/*.html'],
      port: 5001,
      devMiddleware: {
        writeToDisk: true
      },
    } : undefined,
    plugins: [
      new HtmlWebpackPlugin({
        template: './frontend/index.html',
        minify: !isDev
      }),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
      }),
      ...(!isDev ? [new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css'
      })] : [])
    ],
    optimization: {
      minimize: !isDev,
      minimizer: [
        new TerserPlugin(),
        new CssMinimizerPlugin(),
        new ImageMinimizerPlugin({
          minimizer: {
            implementation: ImageMinimizerPlugin.imageminGenerate,
            options: {
              plugins: [
                ['gifsicle', { interlaced: true }],
                ['jpegtran', { progressive: true }],
                ['optipng', { optimizationLevel: 5 }],
                ['svgo', {
                  plugins: [
                    { name: 'removeViewBox', active: false },
                    { name: 'addAttributesToSVGElement', params: { attributes: [{ xmlns: 'http://www.w3.org/2000/svg' }] } }
                  ]
                }]
              ],
            },
          },
        }),
      ],
      splitChunks: {
        chunks: 'all',
      }
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: { plugins: [autoprefixer] }
              }
            }
          ]
        },
        {
          test: /\.(scss)$/,
          use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: { plugins: [autoprefixer] }
              }
            },
            'sass-loader'
          ]
        },
        {
          test: /\.(?:js|mjs|cjs)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [['@babel/preset-env']]
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
        {
          test: /\.(png|jpe?g|gif|svg|webp)$/i,
          type: 'asset',
          parser: {
            dataUrlCondition: {
              maxSize: 8 * 1024
            }
          },
          generator: {
            filename: 'images/[name].[contenthash][ext]'
          }
        }
      ]
    }
  };
};
