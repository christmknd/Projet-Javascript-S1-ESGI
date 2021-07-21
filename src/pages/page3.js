import NavBar from "../components/NavBar";
import Header from "../components/Header";
import createElement from "../outils/createElement";
const Page3 = (app) => {
    const header=Header("page3");
    const navbar=NavBar(app);
    return createElement("div", {}, [
        header,
        navbar
    ]);
}
export default Page3;
