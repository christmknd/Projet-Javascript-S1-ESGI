import createElement from "../outils/createElement";

export default class Component {

    state={};
    prevState = {};
    reRender;

    constructor(props) {
        this.state = props;
    }


    shouldUpdate() {
        return JSON.stringify(this.prevState) !== JSON.stringify(this.state);
    };

    setState(data) {
        this.prevState = this.state;
        this.state = data ;
        this.reRender = new CustomEvent();
    }

    render(){
        //throw new Error("Component must be implemented !");
        return this.state;
    }

}
