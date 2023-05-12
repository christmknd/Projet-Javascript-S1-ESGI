const type_check = (config,conf) => {
    for (const config in conf) {
        switch (config) {
            case typeof config:
            case "value":
                if (variable==config.value) return true
                break;
            case "enum":
                let valueFound = false;
                for (const configValue of config.enum) {
                    valueFound = type_check_v2(variable, { value: configValue });
                    if (valueFound) break;
                }
                if (!valueFound) return false;
                break;
        }
    }

    return true;
}
function type_check_v2(variable, conf) {

}