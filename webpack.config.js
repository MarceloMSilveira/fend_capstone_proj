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
        }
      ]
    }
  }
};
