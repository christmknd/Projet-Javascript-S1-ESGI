import createElement from "./src/outils/createElement";
const root = document.getElementById("root");
import reactDom from './src/DOM/DOM.js';
import App from './App.js';
const struct= createElement("ul", {}, [
    createElement("li", {}, ["2Test"]),
    createElement("li", {}, ["2Test1"]),
    createElement("li", {}, ["2Test2"]),
]);
const app=new App();

const DOM=new reactDom(root,struct);
DOM.render();

//root.appendChild(generateStructure(app.render()));


