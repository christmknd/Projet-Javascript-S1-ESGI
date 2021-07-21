import generateStructure from '../outils/generateStructure.js';
export default class reRender{
    structure={};
    element;
    constructor(element,props) {
        this.structure = props;
        this.element=element;
    }
    render(){
        this.element.replaceChild(generateStructure(this.structure));
    }
}