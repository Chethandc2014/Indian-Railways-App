
# MySimpleAngularApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
## For Runnig Different Port
ng serve --port 4400

## For Creating Angular Resources using commands
ng generate <feature> <option> or ng g <fetaure> <option>
ng g cl className
ng g i interfaceName
ng g e EnumerationName
ng g s serviceName
ng g d directiveName

  
## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
=======
# Indian-Railways-App
Indian Railways App is Personal Project coded to understand latest technologies 


#Reference ##COMMANDS
git init  -- initialising local git repo
git push  <REMOTENAME> <BRANCHNAME> --> [REMOTENAME-->origin,BRANCHNAME-Name of local branch]---To push the code to remote branch
git clone repourl
git pull
git status
git push
git add -a  -- add all files for indexing
git commit  -- commit all files into local repo
git remote set-url origin https://github.com/Chethandc2014/TypeScr ----Changing url from one repo to other 
git remote show origin   -- To Check where is rempo is cloned from
git remote add origin https://github.com/Chethandc2014/Indian-Railways-App.git  Adding Local repo to remote 
git remote -v  Verifies the new remote URL
git push origin master
git branch -d hotfix  -- Delete branch hotfix
[git checkout master
git merge hotfix] --Merging Master branch to Hotfix branch Code

echo > fileName  --- creating new file
rm fileName      --- to remove/delete the file 
mkdir            --- to create the folder 
rmdir directoryname   --- removes the Directory (Empty directory) 
rm -r directoryName   --- removoes the directory and it's content's
rm -rf /path/to/directory/*    --- remoes all files and it's contents except folder
mv f1 f2 -- rename/move file f1 to f2

> fileName     --- shot form to create new Fil
When you are done, press ESC to return to reading mode.
:wq or :x or ZZ  --- to close the editor file with saving
:q! or ZQ        --- to close the file without saving



press i or a   ---to get go intp insert mode of file in bash
cat tolstoy.txt tolstoy2.txt   -- concatinating f1 to f2 and return 
cat tolstoy.txt tolstoy2.txt > tolstoy-twice.txt       --concatinating the f1+f2>f3
cp tolstoy.txt tolstoy-backup.txt /cp [source] [destination]    -- copy the f1>f2

node fileName  --- to run the javaScript file
npm install packageName  --- To install package locally
npm install package -g   ---
npm install npm@latest -g
npm config ls -l	 --- To check config file of npm
npm config set prefix "~/.global-modules"   to change the gloabal installation package path
npm config set key value    ---syntax for changing config values
npm config delete key	    --- delete the config values from config file
npm config edit 	    --- edit the config file 
npm init     		    --- will generate package.json file for project
npm install 		    --- will install depedencies mention in package.json of current folder
tsc --init		    --- Geberates typescript configuration file tsconfig.js

tsc fileName.ts             --- will generate trans compiled  js file in current directory
tsc fileName.ts --target es6     -- will compile in ecma 6 standared
tsc fileName.ts && node fileName.js  -- will compile and pass to node js to execution


Command 	What It Does
pwd 		Prints the ‘present working directory,’ letting you know where you are.
ls 		Lists the files in the current directory
man */help *(Windows) Lists the manual for the command, substituted for the *
cd * 		Changes the current directory to *
mkdir * 	Makes a directory named *
open or explorer On OS X, open followed by a file opens it; in Windows, the command explorer followed by a file name does the same thing.
cat * 		cat is a versatile command. It will read a file to you if you substitute a file for *, but can also be used to combine files.
head * 		Displays the first ten lines of *
tail * 		Displays the last ten lines of *
mv 		Moves a file
cp 		Copies a file
rm 		Deletes a file
vim 		Opens up the vim document editor.
npm install config	    --- To generate the config file in current folder with node_modules




