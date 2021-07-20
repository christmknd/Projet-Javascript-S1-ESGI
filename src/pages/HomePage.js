import createElement from "../outils/createElement";
export default class HomeScreen{
    struct = {};
    constructor() {
        this.struct= createElement("ul", {}, [
            createElement("li", {}, ["Page1"]),
            createElement("ul", {}, [
                createElement("li", {}, ["sous-page1"]),
                createElement("li", {}, ["sous-Page2"]),
                createElement("li", {}, ["sous-page3"]),
            ]),
            createElement("li", {}, ["Page2"]),
            createElement("li", {}, ["Page3"]),
        ]);
    }
    render() {
        return this.struct;
    }
}
