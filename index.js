import Animal from "./animal.js";
import Component from "./component";

const root = document.getElementById("root");


class Lign1 extends Component {
    render() {
        myelements, document.getElementById('root')
    }
}
var myelements;
var animal = new Animal();
animal.initializeAnimal({type: {name: "chien"}});
if (animal.shouldUpdate()){
    display("chien");
}else{
    display("chat");
}

String.interpolate = function (animal) {
    return "Type d'animal : ".animal.prop_access;
};

function display(type){
    const machaine = "Type d'animal: {{ type.name }}";
    machaine.interpolate(animal);
    myelements=(
        <p>${machaine}</p>
    );
}
