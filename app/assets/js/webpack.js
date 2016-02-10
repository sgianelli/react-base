import WebpackDevServer from "webpack-dev-server";
import webpack from "webpack";
import config from "../../../webpack.config";

var server = new WebpackDevServer(webpack(config), {
  // webpack-dev-server options
  publicPath: config.output.publicPath,
  hot: true,
  inline: true,
  stats: { colors: true },
});

server.listen(8080, '0.0.0.0', function() {});
