import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import flexbugs from 'postcss-flexbugs-fixes';

export default {
  sass: {
    options: (extraPaths: string[] = []) => ({
      includePaths: ['./node_modules', ...extraPaths],
      sourceMap: true,
      outputStyle: 'expanded',
    }),
    file: (filename: string) => ({
      files: {
        [`dist/${filename}.css`]: `sass/${filename}.scss`,
      },
    }),
  },
  postcss: {
    prefix: (filename: string) => ({
      options: {
        map: {
          inline: false,
          annotation: 'dist/',
        },
        processors: [
          flexbugs,
          autoprefixer({
            browsers: ['last 2 versions', 'ie >= 11', 'iOS >= 6'],
          }),
        ],
      },
      src: `dist/${filename}.css`,
    }),
    cssmin: (filename: string) => ({
      options: {
        map: {
          inline: false,
          annotation: 'dist/',
        },
        processors: [cssnano()],
      },
      src: `dist/${filename}.css`,
      dest: `dist/${filename}.min.css`,
    }),
  },
};
