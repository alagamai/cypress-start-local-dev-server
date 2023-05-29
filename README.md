# Cypress tests with a local development server using http-server

# Prerequisites

The first thing we need to do is to setup our environment. So here are some things that you should have to start this project:

VSCode: https://code.visualstudio.com/download </br>
NPM: https://www.npmjs.com/get-npm </br>
NodeJS: https://nodejs.org/en/download

# Screenshots
![cypress-cloud-runner-report1](https://github.com/alagamai/cypress-start-local-dev-server/blob/main/cypress/images/report1.png "cypress-cloud-runner-report1")
![cypress-cloud-runner-report2](https://github.com/alagamai/cypress-start-local-dev-server/blob/main/cypress/images/report2.png "cypress-cloud-runner-report2")

# To start running Cypress tests with a local development server using http-server, follow these steps:
1. Create a new dir - cypress-start-local-dev-server
2. npm init -y
3. Sudo npm install --save-dev cypress
4. Sudo npx cypress open 
5. npm install --save-dev http-server 
6. Move index.html, style.css, script.js to cypress/e2e/html folder 
7. Update script in package.json as below 
(http server and path of index.html should be given as below)
{
	"name": "cypress-start-local-dev-server",
	"version": "1.0.0",
	"description": "",
	"main": "index.js",
	"scripts": {
		"start": "http-server cypress/e2e/html"
	},
	"keywords": [],
	"author": "",
	"license": "ISC",
	"devDependencies": {
		"cypress": "^12.13.0",
		"http-server": "^14.1.1"
	}
}
8. Start the local server at root dir of project - npm start
9. In a separate terminal tab or window, while the local server is running, navigate to your project's root directory again.
10. Start Cypress by running the following command: npx cypress open



## Use

1. Checkout the project from git - git clone https://github.com/alagamai/cypress-start-local-dev-server.git
2. Navigate to the project root directory -cypress-start-local-dev-server
3. Install dependencies with `npm install` 
4. See scripts in `package.json` and run the tests. The main ones are
* `npm run cy:open` - runs Cypress in GUI mode
* `npm run cy:test` - runs cypress test in headless mode
    
# Application under test

http://127.0.0.1:8080
http://192.168.1.28:8080/
