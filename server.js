import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from './webpack.config.dev';
import open from 'open';

const port = 3000;
let targetEntry = 'http://localhost:' + port + '/';
config.entry.unshift("webpack-dev-server/client?" + targetEntry);

new WebpackDevServer(webpack(config), {hot: true, stats: {colors: true}})
  .listen(port, 'localhost', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('Listening at localhost:' + port);
    console.log('Opening your system browser...');
    open(targetEntry);
 });