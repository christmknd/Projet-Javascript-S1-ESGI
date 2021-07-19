export default class Component {

    state = {};
    prevState = {};

    constructor(props) {
        this.props = props;
    }


    shouldUpdate() {
        return JSON.stringify(this.prevState) !== JSON.stringify(this.state);

    };


    render(){
        throw new Error("Component must be implemented !");
    }

}
