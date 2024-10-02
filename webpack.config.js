const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const mf = require('@angular-architects/module-federation/webpack');
const path = require('path');
const share = mf.share;

module.exports = {
  output: {
    uniqueName: "livrosCrud",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },
  resolve: {
    alias: {
      ...{
        "@angular/core": path.resolve(__dirname, 'node_modules/@angular/core')
      }
    }
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "livrosCrud",
      filename: "remoteEntry.js",
      exposes: {
        './BooksModule': './src/app/books/books.module.ts'
      },
      shared: share({
        "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' }
      })
    })
  ],
};
