"# gulp-workshop-2017-q4-session-1"

# 1. Ellenőrizzük van-e node telepítve
```node -v```

Ha nincs telepítsük az operációs rendszerünknek a megfelelőt:

```https://nodejs.org/en/download/```

# 2. Ellenőrizzük van-e gulp telepítve
```gulp -v```

Ha nincs, telepítsük a gulpot a gépünkre globálisan, álljunk a session_1/end/src mappára, hogy ide hozza létre a package-lock.json fájlt (npm-nek kell)

```npm install gulp -g```

# 3. Hozzuk létre a package.json fájlunkat, innen fogja felolvasni a függőségeket a gulpfile.js fájlunk

```npm init``` 

# 4. Telepítsük a gulp module-t
```npm install gulp --save-dev```

# 5. Hozzunk létre a györkérben .gtiignore fájlt 
vegyül fel bele a node_modules-t, a node_moduleokat nem commitoljuk be a repoba, az minden csak localon van, a package.json-ből települnek a függőségel

```/end/src/node_modules/*```

# 6. Hozzuk létre a gulpfile.js fájlt, 
Az elnevezés fontos, a gulp ezt a fájlt fogja keresni a taskok futtatásához

# 7. Futtasuk ismét ```gulp -v``` parancsot:

* ```CLI version 3.9.1``` → globálisan elérhetőek a gulp parancsok, így tudunk parancsokat futtatni terminálból
* ```Local version 3.9.1``` → szerepel a package.json-ben a gulp, így npm installal bármikor újra telepíthetjük

# 8. Hozzuk létre a taskokat a gulpfile.jsben
taskokat futtathatunk név szerint vagy csak a default taskot a gulp parancsot elindítva
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