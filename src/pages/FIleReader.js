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
}
export default FIleReader;
