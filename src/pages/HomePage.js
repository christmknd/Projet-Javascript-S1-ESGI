import createElement from "../outils/createElement";
export default class HomeScreen{

    struct = {};
    constructor() {
       this.struct= createElement("ul", {}, [
           createElement("li", {}, ["2Test"]),
           createElement("li", {}, ["2Test1"]),
           createElement("li", {}, ["2Test2"]),
       ]);
    }

    render() {
       return this.struct;
    }
}
