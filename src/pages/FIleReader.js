import createElement from "../outils/createElement";
export default class FIleReader{
    struct = {};
    constructor() {
        this.struct= createElement("ul", {}, [
            createElement("li", {}, ["Page1"]),
            createElement("li", {}, ["Page2"]),
            createElement("li", {}, ["Page3"]),
        ]);
    }
    render() {
        return this.struct;
    }
}
