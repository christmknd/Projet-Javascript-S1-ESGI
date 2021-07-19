export default class Component {

    state = {};
    prevState = {};

    constructor(props) {
        this.props = props;
    }

    initializeComponent = function (data) {
        if(this.type_check()){
            this.prevState = this.state;
            this.state = data;

        }else{
            console.log("check your data validity");
        }
    };

    shouldUpdate = function () {
        return (
            this.prevState.state !== this.state
        );
    };

    propAcess(){
        let path=type;
        let obj=this;
        const fullPath = path.split('.');
        const partOfPath = [];
        for (let part of fullPath) {
            partOfPath.push(part);
            if (obj[part] === undefined) {
                console.log(partOfPath.join('.')+ " not exist.");
                return;
            }
            obj = obj[part];
    };

    typeCheck()
        {
            for (const conf in this.state) {
                switch (conf) {
                    case 'name': return true;
                    default: return false;
                }
            }
        }
    }




}