import './prop_access'

String.prototype.interpolate = function (obj) {
    let chaine = this;
    chaine = chaine.replace('{{ }}',prop_accces(obj));
    return chaine ;
}