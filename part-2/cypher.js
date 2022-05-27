const encrypt = (str) => {
    let newString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
        if (newString.contains('a')) {

        }
    }
    return newString;
};

console.log(encrypt('message'));