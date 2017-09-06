# FsbTech Simple Ecosystem Test

[FsbTech](http://www.fsbtech.com/)
Simple and small front-end ecosystem consisting of 2 components and a Injectable (shared) service.

## High level overview

Injectable (shared) service which will act as a message broker allowing the components to
communicate with each other.
Component 1: Print a simple division with a counter inside. It will be observing the injected service
for messages from the component 2, which will increase or decrease the counter;
Component 2: Load and print a list of items from a JSON static file (simulating a RESTFUL Open
API). Each element will have a name and a price, each price will be a button and when the user
clicks on the button it uses the service to communicate to component 1 that there is one item
selected.  * [sample JSON](#sample-json).

> Important note: Based on, the high level overview description, I tried to make it possible to choose between API calls and render to the HTML, as long the "players" key has the same structure as the sample JSON provided.

## Project spec:
  - Tools: Nodejs + Webpack + Babel
  - Language:(ES5/6)


## Installation

### Requirements:

  - NodeJS 6.x

  
#### <u>NodeJS version</u>:

You will need [node.js](https://nodejs.org) v6.x. In case you want to manage several node versions on your machine, you can choose between, [nvm](https://github.com/creationix/nvm) for Mac/*nix, [n](https://github.com/tj/n) for *nix and [nodist](https://github.com/marcelklehr/nodist) for Windows.

I personally use [n](https://github.com/tj/n)
z find the version of NodeJS installed on your machine type `node -v`.

### Install NPM packages and run build

Once you have node.js installed, open up your OS's Terminal/Bash application, change into the root folder of the test (where the file `package.json` is located) and run `npm install`.
By doing this, you will install this project dependencies.

### NPM scripts:
    - npm run dev: To start develepment server.
    - npm run prod: For production.
    - npm start: To simulate a server with production files.
    
If you ran into an error while running ```npm start``` or ```npm run prod``` , deep breath.
Since you probably using a Windows OS to run this project.
Edit you package.json file, in the root folder of this project.

Change ```npm run clean && NODE_ENV=production webpack -p``` to ```npm run clean && SET NODE_ENV=production webpack -p```.


The build files are located in the `./dist` folder.

### UI Assets
The `src/assets` directory holds all static assets, svg's.

### Sample JSON

```JSON
{
	"db": "mongo1",
	"total": 4,
	"players": [{
			"player": "Royal",
			"price": 5
		},
		{
			"player": "Blankiedoodie",
			"price": 10
		},
		{
			"player": "Traditional",
			"price": 15
		},
		{
			"player": "Katabatika",
			"price": 20
		}
	]
}
```
 
 
 ### Further Readings:
  - http://es6-features.org/#
  - [ECMAScript features 6](https://github.com/lukehoban/es6features/blob/master/README.md)
  - [ES7 async/await](http://rossboucher.com/await/#/)
