import NavBar from "../components/NavBar";
import Header from "../components/Header";
import createElement from "../outils/createElement";
export default class HomePage{
    struct = {};
    constructor() {
        const header=Header("Home page");
        const navbar=NavBar();
        this.struct=createElement("div", {}, [
           header,
            navbar
        ]);
        //let home=Object.assign(header, navbar);
        //let home= {...navbar,...header}
        //let home=createElement("div",{},)
        //console.log(home);
        //this.struct=header;
    }
    render() {
        return this.struct;
    }
}
