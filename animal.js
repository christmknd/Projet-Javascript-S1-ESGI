export default class Animal{
     type={};
     previousType={};
    constructor(props) {
        if(this.type_check()){
            this.previousType = type;
            this.type = data;
        }else{
            console.log("check your data validity");
        }
    }
    prop_access=  function () {
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
        }
        return obj;
    }
    type_check=function(){
        for (const conf in type) {
            switch (conf) {
                case 'name': return true;
                default: return false;
            }
        }
    }

}
