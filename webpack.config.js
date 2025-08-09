import path from "path";
const __dirname = import.meta.dirname;
import HtmlWebpackPlugin from "html-webpack-plugin";

export default (env,argv) =>  {
  const isDev = argv.mode === 'development';
  return {
    entry: './src/index.js',
    plugins: [
      new HtmlWebpackPlugin({
        template: './frontend/index.html',
        minify: !isDev
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
          use: ['style-loader', 'css-loader'],
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
      ]
    }
  }
};
