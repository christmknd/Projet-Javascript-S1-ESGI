import HomePage from "./src/pages/HomePage.js"
import FIleReader from "./src/pages/FIleReader.js";
const root = document.getElementById("root");
import reactDom from './src/DOM/DOM.js';
import App from './App.js';
var file=FIleReader();
var Home=HomePage();

view(Home);

function view(props){
    const app=new App(props);
    const DOM=new reactDom(root,app.render());
    DOM.render();
}


//root.appendChild(generateStructure(app.render()));


