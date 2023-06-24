class LogWebpackPlugin {
  constructor({ emitCallback, compilationCallback, doneCallback }) {
    this.emitCallback = emitCallback;
    this.compilationCallback = compilationCallback;
    this.doneCallback = doneCallback;
  }

  apply(compiler) {
    compiler.hooks.emit.tap('LogWebpackPlugin', () => {
      this.emitCallback();
    });

    compiler.hooks.compilation.tap('LogWebpackPlugin', (_err) => {
      this.compilationCallback();
    });

    compiler.hooks.done.tap('LogWebpackPlugin', (_err) => {
      this.doneCallback();
    });
  }
}

module.exports = LogWebpackPlugin;
