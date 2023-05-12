import createElement from "../outils/createElement";

const Header = (props) => {
    return createElement("H3", {
        style : "font-size:50px;text-align: center;background: #1abc9c;"

    }, [props]);

}
export default Header;