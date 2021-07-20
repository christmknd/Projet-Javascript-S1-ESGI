import createElement from './src/outils/createElement.js';
import Component from '../components/component.js';

class App extends Component{
    constructor(props) {
        super(props);
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