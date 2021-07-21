Object.prototype.prop_access = function prop_acess (path) {
    let obj = this
    if(path === "" || path === null) return obj;
    if(obj === null) obj = {};
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
