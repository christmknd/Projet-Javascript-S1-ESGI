function Animal() {
    let type={},
        previousType={};

    this.initializeAnimal = function (data) {
        if(this.type_check()){
            previousType = type;
            type = data;
        }else{
            console.log("check your data validity");
        }

    };

    this.shouldUpdate = function () {
        return (
            previousType.name !== type.name
        );
    };
    this.prop_access=  function () {
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
    this.type_check=function(){
        for (const conf in type) {
            switch (conf) {
                case 'name': return true;
                default: return false;
            }
        }
    }
}


export default animal;
