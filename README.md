
# Getting started with gulp

Work to the <b>start</b> folder, the solutions are in the <b>end</b> folder

## 1. Check your node version
type to terminal:

```node -v```

You can dowload from here

```https://nodejs.org/en/download/```

## 2. Check your gulp version
type to terminal:

```gulp -v```

If you don't use gulp globally , go to ```/start/src``` folder, and install gulp globally

type to terminal:

```npm install gulp -g```

## 3. Create package.json 
Create package.json with ```npm init```, the gulpfile.js uses from here the gulp packages

type to terminal:

```npm init``` 

## 4. Install gulp
type to terminal:

```npm install gulp --save-dev```

## 5. Create .gitignore 
Create .gitignore in our root directory. You dont host node_modules in repo, you host from local

```node_modules/*```

## 6. Create gulpfile.js 
Its name is important, gulp looking up for this file to execute the tasks

## 7. Check gulp version again 
type to terminal:

```gulp -v```

* ```CLI version 3.9.1``` → gulp command are useable globally, we can run command from terminal
* ```Local version 3.9.1``` → the gulp is in our package.json, so we can reinstalt it with terminal command ```npm install```

## 8. Create some practicing task 

You can run task by typing its names exp.:```gulp styles``` or with the ```gulp``` command you can run the default gulp task

type to gulpfile.js
```
var gulp = require('gulp');
// Styles
gulp.task('styles', function(){
console.log('starting styles task');
});
// Scripts
gulp.task('scripts', function(){
console.log('starting default task');
});
// Images
gulp.task('images', function(){
console.log('starting default task');
});
// Default
gulp.task('default', function(){
console.log('starting default task');
});
```

## 9. Run some task

type to terminal:

```
gulp
gulp styles
```