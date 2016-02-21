Web boilerplate
=====
This is a basic web boilerplate included gulp and webpack.

***This project's goal:***
- The project make you focus on coding
- ECMAScript 2015 support
- Minify (Uglify) scripts and images
- Provide easy way to deploy and dev

The boilerplate structure:
---
```
web-boilerplate
  |- package.json
  |- .gitignore
  |- gulpfile.js
  |- webpack.config.js
  |- README.md
  |- ProjA
    |- src
    |- dist
    |- cdn
  |- ProjB
  |- ... (your projects)
```
The project structure:
---
```
ProjA
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
How to use
-----
1. clone this boilerplate

   `#git clone ...`
2. install this boilerplate

   `#npm install`
3. develop your project in project directory's ***src/***
  * save ***html*** file in ***src/***
  * save ***script*** file in ***src/js/***
  * save ***modules*** (imported by js files) in js' sub directories ex. ***src/js/lib/***
  * save ***images*** in ***src/images/***
4. dev and check your project (After preprocess, files will be copied to ***dist/*** and execute ***BrowserSync***)

   ***!!!Make sure you execute gulp in your project directory root***

   `#gulp`
5. deploy the project (files' name will add version hash ex. ***index.html*** -> ***index-672b2198.html***, and copied from ***dist/*** to ***cdn/***)

    `#gulp cdn`

6. clean previous cdn files

    `#gulp clean-cdn`
