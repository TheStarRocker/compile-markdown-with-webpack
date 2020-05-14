import * as path from 'path';

export = {
  mode: 'development',
  entry: {
    main: './src/dist/index.js',
  },
  output: {
    path: path.resolve(__dirname, '../../dist'),
    filename: 'js/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.md$/,
        use: [
          'file-loader?name=[name].html',
          'extract-loader',
          {
            loader: 'html-loader',
          },
          {
            loader: 'markdown-loader',
            options: {
              headerIds: false,
              smartLists: true,
            },
          },
        ],
      },
    ],
  },
};
