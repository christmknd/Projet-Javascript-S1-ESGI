import HomePage from "./src/pages/HomePage.js"
const root = document.getElementById("root");
import reactDom from './src/DOM/DOM.js';
import App from './App.js';

const Home=new HomePage();
const app=new App(Home.render());
const DOM=new reactDom(root,app.render());
DOM.render();

//root.appendChild(generateStructure(app.render()));


