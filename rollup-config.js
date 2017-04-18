import nodeResolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import uglify from "rollup-plugin-uglify";

export default {
  entry: 'dist/src/main.aot.js',
  dest: 'dist/app/sportsstore.min.js',
  sourceMap: false,
  format: 'iife',
  plugins: [
    nodeResolve({jsnext: true, module: true}),
    commonjs({
      include: "node_modules/rxjs/**"
    }),
    uglify()
  ],
  context: 'window'
}
