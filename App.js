import createElement from './src/outils/createElement.js';
import HomePage from './src/pages/HomePage';

class App {
    constructor(props) {

    }
    render(props){
        return  createElement("ul", {}, [
       createElement("li", {}, ["2Test"]),
       createElement("li", {}, ["2Test1"]),
       createElement("li", {}, ["2Test2"]),
            ]);
    }
}
export default App;