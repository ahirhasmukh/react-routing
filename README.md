# ReactJs Application Demo

Install yarn
 - npm install -g yarn

Install live server for run react application

 - using npm 
    npm install -g live-server

 - using yarn
    yarn global add live-server

# Create package.json file

   npm init or yarn init

# Babel

  Babel is a compiler but not compile anything in default
    
    Brief description here - http://babeljs.io/docs/usage/cli/

    Install babel CLI 
      - npm install -g babel-cli or npm install -g babel-cli@6.24.1 (Specific version)

    Install babel environment and react (dependencies)
      - npm install babel-preset-react babel-preset-env
      - npm install babel-preset-react@6.24.1 babel-preset-env@1.5.2 (Specific version)

    Babel run:
      - babel src/app.js --out-file=public/scripts/app.js --presets=env,react
      - babel src/app.js --out-file=public/scripts/app.js --watch (Detect change every time)

    React Modal
      - https://github.com/reactjs/react-modal
      
    About Sass

    - https://www.npmjs.com/package/style-loader

    - https://www.npmjs.com/package/css-loader

    - https://www.npmjs.com/package/node-sass-loader

    - https://necolas.github.io/normalize.css/

    - http://sass-lang.com/documentation/Sass/Script/Functions.html

    Run Project
     - npm run dev-server