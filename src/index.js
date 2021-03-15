module.exports = function check(str, bracketsConfig) {
    let brackets = bracketsConfig.map((item) => item.join(''));
    if (str.length % 2 !== 0) return false;

    for (let i = 0; i < brackets.length; i++) {
        if (str.includes(brackets[i])) {
            str = str.replace(brackets[i], '');
            i = -1;
        }
    }
    return str.length === 0;
}
