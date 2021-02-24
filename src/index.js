module.exports = function check(str, bracketsConfig) {
  const currentConfig = bracketsConfig;
    const toOpen = currentConfig.slice().map((item) => item[0]);
    const toClose = currentConfig.slice().map((item) => item[1]);
    let strToCheck = str;
    let arrayFromStr = strToCheck.split("");
    let opened = [];

    for (let i = 0; i < arrayFromStr.length; i++) {
        if (toOpen.includes(arrayFromStr[i])) {
            const index = toOpen.indexOf(arrayFromStr[i]);
            if (currentConfig[index][0] === currentConfig[index][1]) {
                if (opened[opened.length - 1] === arrayFromStr[i]) {
                    opened.pop();
                } else {
                    opened.push(arrayFromStr[i]);
                }
            } else {
                opened.push(arrayFromStr[i]);
            }
        } else if (toClose.includes(arrayFromStr[i])) {
            const closeIndex = toClose.indexOf(arrayFromStr[i]);
            const openIndex = toOpen.indexOf(opened[opened.length - 1]);
            if (closeIndex !== openIndex) {
                return false;
            }
            opened.pop();
        } else {
            return "Error";
        }
    }

    if (opened.length) {
        return false;
    }
    return true;
};
