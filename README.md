Web boilerplate
=====
This is a basic web boilerplate included gulp and webpack.

the project structure:

```
|- package.json
|- .gitignore
|- gulpfile.js
|- webpack.config.js
|- README.md
|- src
  |- index.html
  |- ... (other .html files)
  |- images
  |- js
    |- app.js
    |- ... (other .js files)
    |- lib (modules (.js) imported by other .js files)
|- dist (directory for development; created after webpack bundle, js minify and imagesmin)
|- cdn (directory for depoly; add rev to all file names )
```
