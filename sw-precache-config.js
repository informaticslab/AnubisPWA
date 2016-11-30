module.exports = {
  staticFileGlobs: [
    '/index.html',
    '/manifest.json',
    '/bower_components/webcomponentsjs/webcomponents-lite.min.js',
    '/src/*',
    '/images/*',
    '/styles/*'
  ],
  stripPrefix: '/build/bundled/',
  navigateFallback: '/index.html',
  maximumFileSizeToCacheInBytes: 4097152,
  verbose: true
};
