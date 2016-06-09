module.exports = function webpackDevBlock(content) {
  content = content.replace(
    // eslint-disable-next-line max-len
    /((\/\*.*dev:start.*\*\/((?!\*.*dev:end.*\*\/)[\s\S])+\/\*.*dev:end.*\*\/)+|(^.*\/\/ dev:line$))/gm, '');
  this.callback(null, content);
};
