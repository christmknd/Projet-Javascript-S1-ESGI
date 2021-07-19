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