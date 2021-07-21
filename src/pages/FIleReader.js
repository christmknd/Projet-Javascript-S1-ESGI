import NavBar from "../components/NavBar";
import Header from "../components/Header";
import createElement from "../outils/createElement";
const FIleReader = () => {
    const header=Header("FileReader Page");
    const navbar=NavBar();
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
export default FIleReader;
