## React Router BitCoin PriceFinder

Purpose of this lesson is to Build A Crypto Price Discovery App and learn

- How to setup react router
- How to create Router, Route, Link and Switch components
- How to pass router props
- How to use URL Params

## The Problem

We are often used to making websites with several "pages" which would be split across several html delivered statically or rendered by templates on a server. When making a React app, the application is a single page with one html file. We can have components conditionally render to make the illusion of pages but it doesn't quite feel as intuitive as using a tags to link to different html files.

What the React-Router library does is allow us to define components that render based on the url in the address bar. We link to them with Link components which feel similar to the a tags we are used to. It allows to create a single page application in a way that feels like a multi-page application.

## Setup

In your unit_3 folder

- run command `lets-code`, and name the folder `cryptoprices`
- cd into the cryptoprices folder
- run `npm run dev` to begin development server

## Setting Up Router

The first component we'll explore is BrowserRouter which is underneath the hood a context provider allowing all the features of router to be available to its children. We want all of our application to have the router features so we'll wrap the App component in index.js and to make it more semantic we'll rename the component Router.

index.js

```js
import {StrictMode} from "react"
import { createRoot } from "react-dom/client"
import App from './App'
import {BrowserRouter as Router} from "react-router-dom"
const root = createRoot(document.getElementById("app"))
root.render(<StrictMode><Router><App/></Router></StrictMode>)
```

## Components vs Pages

A common convention is to create two folders, components and pages. Any component that is used as a piece of UI goes in the components folder, any component meant to act as a "page" of the website goes in pages.

- create a components and pages folder
- create a currencies.js, main.js, price.js file in the pages folder
- create the component boilerplate in each component

## Gulp File Update

- since we will now be needing to compile the pages folder as well as the components folder we need to let the gulpfile know that whenever we update the pages folder to run webpack.

### Before

```js
gulp.task('default', (cb) => {
	// Compile REACT
	exec('npm run dev:webpack', function(err, stdout, stderr) {
		console.log(stdout);
		console.log(stderr);
		cb(err);
	});
	// SERVE BACKEND
	nodemon({
	 script: 'server.js',
	 env: { 'NODE_ENV': 'development'}
 });
 // SERVE  FRONT END WITH PROXY TO BACKEND
	browserSync.init({
	 proxy: {
		 target: 'http://localhost:8000',
		 ws: true
	 },
	 serveStatic: ['./public']
	});
	// SET UP WATCJERS TO LISTEN TO CHANGES IN FILES
	gulp.watch(['./src/*','./src/**/*.js','./src/components/**/**/*'], gulp.task('js-watch')).on('change', reload);;
	// LISTEN FOR WHEN TO RELOAD PAGES
	gulp
		.watch([
			'./public/js/**/.#*js',
			'./public/index.html'
		])
		.on('change', reload);
		cb()
});
```

### After

```js
gulp.task('default', (cb) => {
	// Compile REACT
	exec('npm run dev:webpack', function(err, stdout, stderr) {
		console.log(stdout);
		console.log(stderr);
		cb(err);
	});
	// SERVE BACKEND
	nodemon({
	 script: 'server.js',
	 env: { 'NODE_ENV': 'development'}
 });
 // SERVE  FRONT END WITH PROXY TO BACKEND
	browserSync.init({
	 proxy: {
		 target: 'http://localhost:8000',
		 ws: true
	 },
	 serveStatic: ['./public']
	});
	// SET UP WATCJERS TO LISTEN TO CHANGES IN FILES
	gulp.watch(['./src/*','./src/**/*.js','./src/components/**/**/*', './src/pages/**/**/*'], gulp.task('js-watch')).on('change', reload);;
	// LISTEN FOR WHEN TO RELOAD PAGES
	gulp
		.watch([
			'./public/js/**/.#*js',
			'./public/index.html'
		])
		.on('change', reload);
		cb()
});
```

# src/pages/Main/Main.js

```js
export default function Main(props) {
  return <h1>This is the Main Component</h1>;
};


```

# src/pages/Currencies/Currencies.js

```js
export default function Currencies (props){
  return <h1>This is the Currencies Component</h1>;
};
```

# src/pages/Price/Price.js

```js
export default function Price(props){
  return <h1>This is the Price Component</h1>;
};
```

## Creating Our Routes

Now we will will import the Route  & Routes component into App, this will allow us define which of our components should render depending on the URL, we'll also import our pages for our routes.

App.js

```js
//Import route and our components
import { Route, Routes } from "react-router-dom";
import Currencies from "./pages/Currencies/Currencies";
import Main from "./pages/Main/Main";
import Price from "./pages/Price/Price";

export default function App() {
  // We will use the Route component to specify each route
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/currencies" element={<Currencies/>}/>
      <Route path="/price" element={<Price/>}/>
    </Routes>
    </div>
  );
}

```

Right now only the Main component is rendering cause we are on the main page, "/". To change the URL bar, we need some links so lets create a navigation.

## Navigation

In your components folder create a nav.js

# components/Nav/Nav.js

```js
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.scss"

const Nav = (props) => {
  return (
    <div className={styles.nav}>
      <Link to="/">
        <div>CRYPTO PRICES</div>
      </Link>
      <Link to="/currencies">
        <div>CURRENCIES</div>
      </Link>
    </div>
  );
};

export default Nav;
```

Next add the following styles to Nav.module.scss

```css
.nav {
  display: flex;
  justify-content: space-between;
  background-color: black;
  color: white;
  padding: 15px;
  font-size: 2em;
  a {
    color: white;
    text-decoration: none;
  }
}
```

import the nav component into App.js

```js
import { Route, Routes } from "react-router-dom";
import Currencies from "./pages/Currencies/Currencies";
import Main from "./pages/Main/Main";
import Price from "./pages/Price/Price";
import Nav from "./components/Nav/Nav";

function App() {
  // We will use the Route component to specify each route
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/currencies" element={<Currencies/>}/>
      <Route path="/price" element={<Price/>}/>
    </Routes>
    </div>
  );
}

export default App;
```

A Few things to notice:

- The function of the link tags is to change the URL bar to match the "to" prop, look at the change in the URL bar when you click on them. The reason we don't use an a tag is cause clicking an a tag triggers the browser to make a request and refresh the page which will break router (cause there is no server to respond to the browsers request, the url is merely a simulation of multiple pages).

```js
import { Route, Routes } from "react-router-dom";
import Currencies from "./pages/Currencies/Currencies";
import Main from "./pages/Main/Main";
import Price from "./pages/Price/Price";
import Nav from "./components/Nav/Nav";

function App() {
  // We will use the Route component to specify each route
  return (
    <div className="App">
      <Nav />
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/currencies" element={<Currencies/>}/>
      <Route path="/price" element={<Price/>}/>
    </Routes>
    </div>
  );
}

export default App;
```

## Params

We are going to soon build out our currencies component which will allow us to select which currencies price we'd like to see. We will do this by injecting a variable in our Price routes path, so edit the Price route like so...

```js
<Route path="/price/:symbol" element={<Price/>}/>
```

The :symbol part is a URL Param, a variable in the url. Whatever is in that spot in the path will be accessible by using the useParams hook.

## The Currencies Component

In this component we will be doing the following

- Creating an array of the currencies our app can find prices for
- Looping over that array to generate a link for each one to the price route
- The currency symbol should be placed in the :symbol part of the URL

currencies.js

```js
import { Link } from "react-router-dom";

export default function Currencies (props) {
  const currencies = [
    { name: "Bitcoin", symbol: "BTC" },
    { name: "Litecoin", symbol: "LTC" },
    { name: "Ethereum", symbol: "ETH" },
    { name: "Ethereum Classic", symbol: "ETC" },
    { name: "Stellar Lumens", symbol: "XLM" },
    { name: "Dash", symbol: "DASH" },
    { name: "Ripple", symbol: "XRP" },
    { name: "Zcash", symbol: "ZEC" },
  ];

  return (
    <div className="currencies">
      {currencies.map((coin) => {
        const { name, symbol } = coin;

        return (
          <Link to={`/price/${symbol}`}>
            <h2>{name}</h2>
          </Link>
        );
      })}
    </div>
  );
};


```

Notice when we click any of the links it takes us to the price component, use the React devTools to look for the router props and you should be able to find the value of the symbol param in there.

## The Price Component

Before we create this component take a moment to get your FREE Api key from coinapi.io. Keep in mind you can only make 100 requests per day with your free apiKey.

Once you have your api key here is what we will do:

- store the apikey and currency symbol in different variables
- use the useEffect hook to make an api call
- interpolate the apikey and symbol in the fetch URL
- save the resulting data in state and render it
- loaded and loading function for rendering the data if exists

price.js

```js
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom"

export default function Price (props) {
  // Our api key from coinapi.io
  const apiKey = "YOUR API KEY";
  // Grabbing the Currency symbol from the URL Params
  const params = useParams()
  const symbol = params.symbol
  // Using the other two variables to create our URL
  const url = `http://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;

  //state to hold the coin data
  const [coin, setCoin] = useState(null);

  //function to fetch coin data
  const getCoin = async () => {
    try{
        const response = await fetch(url);
        const data = await response.json();
        setCoin(data);
    }catch(error){
        console.error(error)
    }   
  };

  // useEffect to run getCoin when component mounts
  useEffect(() => {
    getCoin();
  }, []);

  // loaded function for when data is fetched
  const loaded = () => {
    return (
      <div>
        <h1>
          {coin.asset_id_base}/{coin.asset_id_quote}
        </h1>
        <h2>{coin.rate}</h2>
      </div>
    );
  };

  // Function for when data doesn't exist
  const loading = () => {
    return <h1>Loading...</h1>;
  };

  // if coin has data, run the loaded function, otherwise, run loading
  return coin ? loaded() : loading();
};
```

Your App Should now be working! Voila!