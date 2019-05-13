module.exports = {
    entry:"./ui.ts",
    output: {
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".ts", ".js"]
      },
      module: {
        rules: [
          // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
          { test: /\.tsx?$/, loader: "ts-loader" }
        ]
      }
}