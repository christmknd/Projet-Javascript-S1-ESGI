import Component from './src/components/component.js';
import HomePage from "./src/pages/HomePage.js"
import FIleReader from "./src/pages/FIleReader.js";
const root = document.getElementById("root");
import reactDom from './src/DOM/DOM.js';
var file=FIleReader();
var Home=HomePage();

class App extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        root.appendChild(reactDom(this.state));
    }
    display(newProps){
        this.setState(newProps);
        if(this.shouldUpdate()){
            root.replaceChild(reactDom(this.state), root.firstChild);
        }
    }

}

let app;
app=new App(Home);
app.render();
export default app;