import createElement from "../outils/createElement";
import app from '../../App.js';
import FIleReader from "../pages/FIleReader";
import HomePage from "../pages/HomePage";
import Page3 from "../pages/page3.js"

const NavBar = () => {

    return  createElement("div", {}, [
        createElement("button", {
            onclick: (event) =>app.display(HomePage()),
        }, ["Home"]),
        createElement("button", {
            onclick: (event) =>app.display(FIleReader()),
        }, ["File Reader"]),
        createElement("button", {
            onclick: (event) =>app.display(Page3()),
        }, ["Page3"]),
    ]);
}
export default NavBar;