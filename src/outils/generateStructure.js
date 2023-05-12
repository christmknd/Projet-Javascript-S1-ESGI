const generateStructure = (struct) => {
    let elem;
    console.log(struct);
    if (typeof struct.type === "string") {
        elem = document.createElement(struct.type);
        if (struct.children) {
            for (let child of struct.children) {
                const nodeElement =
                    typeof child === "string"
                        ? document.createTextNode(child)
                        : generateStructure(child);
                elem.appendChild(nodeElement);
            }
        }

        if (struct.attributes) {
            for (let attr in struct.attributes) {
                if (attr.startsWith("on")) {
                    elem.addEventListener(
                        attr.replace(/^on/, ""),
                        struct.attributes[attr]
                    );
                } else {
                    elem.setAttribute(attr, struct.attributes[attr]);
                }
            }
        }
    } else {
        for (let element of struct) {
            const nodeElement =
                typeof element.type === "string"
                    ? document.createTextNode(element)
                    : generateStructure(element);
            elem.appendChild(nodeElement);
        }
    }
    return elem;
};
export default generateStructure;