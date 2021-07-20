function createElement(type, props, children) {
    if (typeof type === "string") {
        return {
            type: type,
            attributes: props,
            children: children,
        };
    } else {
        if (type.confProps && !type_check(props, type.confProps))
            throw new Error("invalide props");

        return {
            //...
        };
    }
}
export default createElement;