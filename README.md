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
      - babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch (Detect change every time)

      