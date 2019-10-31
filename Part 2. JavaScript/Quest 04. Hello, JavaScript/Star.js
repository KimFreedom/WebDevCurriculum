function printChar(count, ch) {
    let str = "";
    for(let i = 0; i < count; i++) {
        str += ch;
    }
    return str;
}

let line = prompt();
for(let row = 1; row <= line; row++) {
    let str = "";
    str += printChar(line - row, ' ');
    str += printChar(row - 1, '*');
    str += '*';
    str += printChar(row - 1, '*');
    str += printChar(line - row, ' ');
    console.log(str);
}
