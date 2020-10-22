const mix = require('laravel-mix')
require('laravel-mix-svg-sprite')

// PublicPath
mix.setPublicPath('.').version()

// Javascript
mix.js('src/js/app.js', 'public/assets/js/bundle.js')

// Scss
mix
  .sass('src/scss/app.scss', 'public/assets/css/style.css', {
    sassOptions: {
      outputStyle: 'compressed'
    }
  })
  .options({
    postCss: [
      require('postcss-flexbugs-fixes')(),
      require('autoprefixer')({
        grid: true
      }),
      require('css-mqpacker')({
        sort: true
      })
    ],
    processCssUrls: false
  })
  .webpackConfig({
    module: {
      rules: [
        {
          test: /\.scss/,
          enforce: 'pre',
          loader: 'import-glob-loader'
        }
      ]
    }
  })

// Svg
mix.svgSprite('src/svg', '', {})

// Source Map
if (!mix.inProduction()) {
  mix
    .webpackConfig({
      devtool: 'inline-source-map'
    })
    .sourceMaps()
}

// Console.log
if (mix.inProduction()) {
  mix.options({
    terser: {
      terserOptions: {
        compress: {
          drop_console: true
        }
      }
    }
  })
}

// BrowserSync
// https://laravel-mix.com/docs/master/browsersync
if (process.env.NODE_ENV === 'development') {
  mix.browserSync({
    files: ['template/**/*', 'public/**/*'],
    // server: 'public/',
    // proxy: false
    proxy: '0.0.0.0:8000'
    // startPath: 'dir',
    // open: 'external'
  })
} else if (process.env.NODE_ENV === 'program') {
  mix.browserSync({
    files: 'public/**/*',
    proxy: 'localhost'
  })
}

// LiveReload
// https://laravel-mix.com/docs/master/livereload
// var LiveReloadPlugin = require('webpack-livereload-plugin');
// mix.webpackConfig({
//   plugins: [new LiveReloadPlugin()]
// });
