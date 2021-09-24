const Path = require('path');

const src_dir = Path.join(__dirname, 'client', 'src');
const dist_dir = Path.join(__dirname, 'client', 'dist');

module.exports = {
  watch:true,
  entry: Path.join(src_dir, 'index.jsx'),
  output: {
    filename: 'bundle.js',
    path: Path.resolve(__dirname, 'client', 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  mode: 'development'
};

