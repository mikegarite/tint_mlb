# Tint Mlb
A platform where its easy to get up to date info directly from all baseball teams in the MLB

# Features
* Up to date info on all 30 MLB teams
* Latest news articles from google in regards to baseball or mlb
* Up to date baseball standings utilizing an additional API 

#Live Demo
http://159.203.249.89/#/


## Download
```bash
git clone https://github.com/mikegarite/tint_mlb.git
```

## 1. Setup
```bash
npm install
```
- install all npm and bower dependencies

**Note:** If `npm install` fails during dependency installation it will be likely caused by `gulp-imagemin`. In that case remove `gulp-imagemin` dependency from `package.json`, run `npm install` again and then install `gulp-imagemin` separately with following command: `npm install gulp-imagemin --save-dev`

## 2. Watch files
```bash
gulp
```
- all SCSS/HTML will be watched for changes and injected into browser thanks to BrowserSync

## 3. Build production version
```bash
gulp build
```
- this will process following tasks:
* clean _build folder
* compile SASS files, minify and uncss compiled css
* copy and optimize images
* minify and copy all HTML files into $templateCache
* build index.html
* minify and copy all JS files
* copy fonts
* show build folder size

## 4. Start webserver without watch task
```bash
gulp server
```

## 5. Start webserver from build folder
```bash
gulp server-build
```





