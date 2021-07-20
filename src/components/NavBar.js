import createElement from "../outils/createElement";

const NavBar = () => {
    return  createElement("div", {}, [
        createElement("button", {}, ["Page1"]),
        createElement("button", {}, ["Page2"]),
        createElement("button", {}, ["Page3"]),
    ]);
}
export default NavBar;