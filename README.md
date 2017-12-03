"# gulp-workshop-2017-q4-session-1"

# We work to the start folder, the solutions are in the end folder

## 1. Check our node version
```node -v```

You can dowload from here

```https://nodejs.org/en/download/```

## 2. Check our gulp version
```gulp -v```

If we dont use gulp globally , go to ```/end/src``` folder, and install gulp globally

```npm install gulp -g```

## 3. Create package.json with ```npm init```, the gulpfile.js uses from here the gulp packages

```npm init``` 

## 4. Install gulp for gulfile.js 
```npm install gulp --save-dev```

## 5. Create .gitignore in our root directory 

```/end/src/node_modules/*```

## 6. Create gulpfile.js 
Its name is important, gulp looking up for this file to execute the task

## 7. Check out gulp version again ```gulp -v```

* ```CLI version 3.9.1``` → gulp command are useable globally, we can run command from terminal
* ```Local version 3.9.1``` → the gulp is in our package.json, so we can reinstal it with terminal command ```npm install```

## 8. Create some practicing task in gulpfile.js
we can run task by typing its names ```gulp styles``` or with the ```gulp``` command we can run the default gulp task
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