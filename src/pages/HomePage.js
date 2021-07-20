import NavBar from "../components/NavBar";
import Header from "../components/Header";
export default class HomePage{
    struct = {};
    constructor() {
        const header=Header("Home page");
        const navbar=NavBar();
        let home= {...navbar,...header}
        console.log(home);
        this.struct=home;
    }
    render() {
        return this.struct;
    }
}
