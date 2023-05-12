import NavBar from "../components/NavBar";
import Header from "../components/Header";
import createElement from "../outils/createElement";
const HomePage = (app) => {
        const header=Header("Home page");
        const navbar=NavBar(app);
        return createElement("div", {}, [
           header,
            navbar
        ]);
        //let home=Object.assign(header, navbar);
        //let home= {...navbar,...header}
        //let home=createElement("div",{},)
        //console.log(home);
        //this.struct=header;
    }
export default HomePage;
