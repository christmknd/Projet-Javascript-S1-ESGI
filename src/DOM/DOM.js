import generateStructure from '../outils/generateStructure.js';
export default class reactDom{
    structure={};
    element;
    constructor(element,props) {
        this.structure = props;
        this.element=element;
    }
    render(){
        this.element.appendChild(generateStructure(this.structure));
    }
}