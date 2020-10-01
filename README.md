# ReactWithBabelWebpack
project for pluralsight course Advanced react.js
## Step by Step creation of project
1. check for node and npm :</br>

  node -v </br>
  npm -v </br>
  
2. create new project :</br>

    mkdir react-boilerplate </br>
    mkdir lib (this will be shared between server and client) </br>
    cd react-boilerplate </br>
    mkdir public</br>
    create server.js inside lib </br>
    yarn init (question entry point (index.js): lib/server.js)</br>
    
### create server ###
    
3. add eslint to catch error at compile time</br

    yarn add --dev eslint-plugin-react babel-eslint</br>
    create file .eslintrc.js at root level</br>
    
4. add express as that would be used as server</br>

    yarn add express ejs</br>
    create constant port in config.js and refer from there(dont hard code port number)</br>
    mention index as entry point for server </br>
    ejs looks for entry point in views/index.ejs</br>
    app.set('view engine','ejs');(make aware express for using ejs)</br>
    
5. add starting point for server </br>

    "start": "node server/index.js",</br>
    
6.  add nodemon to hot reloading of changes in project</br>

    yarn add -g nodemon or yarn global add nodemon</br>
    
7.  jsx syntax is to be used so the functionality like 'import' can be used.install babel to use jsx</br>

    yarn add @babel/cli @babel/core @babel/preset-env @babel/preset-es2015 @babel/preset-react babel-loader -D</br>
    
8.  add babel presets in file .babelrc (to understand jsx,react and environment)</br>

     "presets": ["@babel/preset-env", "@babel/preset-react"]</br>
     
9.  add babel-node (to interpret babel for node)</br>

    yarn add @babel/node -D</br>
    add "dev": "nodemon --exec babel-node lib/server.js --watch", (to start server in auto update mode)</br>
    
### create client ###

10. create client in lib/components</br>

    lib/components/Index.js is starting point for client react</br>
    
11. to package /ib/components/Index.js into views/index.js</br>

    in index.ejs we have root div which will be overtaken by react and render react application in there</br>
    views/index.js will have <script src="/bundle.js" charset="UTF-8"></script> to serve /bundle.js (created by webpack)</br>
    
12. add webpack to create bundle for react </br>

    yarn add webpack webpack-cli --dev</br>
    yarn add react react-dom</br>

13. need to tell webpack where to start and where to keep bundle</br>

    create webpack.confg.js at root</br>
    entry is lib/components/Index.js</br>
    output to public directory</br>
    babel-loader will be used by webpack as loader to load every js or jsx file </br>
    
14. add webpack starting point in script section of package.json</br>

    "webpack": "webpack -wd",(this will create bundle.js in watch mode)</br>
    
15. never add stage2 preset </br>

    yarn remove @babel/preset-stage-2 --dev (can be used if already added)</br>
    
16. To make class-properties work (like state in react class component)</br>

    add class-properties plugin in .babelrc.js</br>
    "plugins": [
        [
          "@babel/plugin-proposal-class-properties",
          {
            "loose": true
          }
        ]
    ]</br>
    
 17. now we can monitor both server and client logs</br>

      yarn webpack (server side)</br>
      yarn dev (client side)</br>
      
18.  lets now have function after testing class property state</br>

      load answer value using async function inside componentDidMount</br>
      to resolve promise of async function mark componentDidMount as async</br>
      and access async function by marking as await to resolve promise</br>
      
 19. adding function will cerate regenaratorRuntime, this can be resolved by configuring babel-polyfill in webpack.config.js</br>
 
     add new entry as entry: ["babel-polyfill","./lib/components/Index1.js"],</br>
     yarn add babel-polyfill</br>
     
 ### Create Test Cases ###
 
 20. use jest for testing of react</br>
 
      yarn add --dev jest babel-jest @babel/preset-env @babel/preset-react react-test-renderer </br> 
      add "test": "jest --watch" as script in package.json</br>
      
 21. jest uses __test__ directory</br>
 
      create same class with name as the class whos ufnctionality we have to test (ex : lib/__test__/DataApi.js for lib/components/DataApi.js)</br>
 
    
  
