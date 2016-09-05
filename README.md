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










Professional sports teams' front offices are increasingly taking on a very strong social media presence and utilizing different outlets to optimize their engagement with their fans. Some teams are building digital teams around Facebook Live and Twitter and ditching older alternatives as a way to better connect and engage with fans. MLB this year has also taken a leap in putting more efforts into online media advertising. Through the project I kicked off, MLB could easily utlize TINT as an up-to-date social media stream for all teams, and offer additional ways of advertising. As a huge fan of baseball, I know there is nothing like this tool online that allows me to get quick snippets of solely baseball related information that I can rely as unbiased and straight from the teams themselves. 

As the end of the season nears for Major League Baseball it tends to get more exciting and the number of people's attention towards baseball increases. Building a place to funnel a user base to attract advertising for baseball could be a significant monetization effort for TINT. 


I built the quick prototype on a basic angular boilerplate. I placed all 30 teams' Twitter accounts into the TINT platorm along with Google search results for "MLB" and "baseball". I used an additional API that grabbed all 30 teams scoring and standings and built a way to easily view that data. I used two different TINT API calls that specifically called for GOOGLE info and another specifically for TWITTER. The Google feed grabs latest news information and the Twitter api call creates a quick feed of all the data. Additionally, I built in a simple loading effect that gives a continuous scroll of baseball data for days. I created a row layout to give the easy straight-foward hacker news type of vibe but for baseball. I grabbed the same font that MLB uses for media and also the colors affiliated. If I could put more time into this, I would put more emphasis on baseball stats to make the page more unique and stand out. I'd also add Facebook pages and provide a way for individual sports teams to be filtered. I'd also love for this to be responsive and mobile friendly. 



