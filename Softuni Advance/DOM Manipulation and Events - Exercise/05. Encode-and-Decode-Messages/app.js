function encodeAndDecodeMessages() {
    let input = document.querySelectorAll('#main textarea');
    let buttons = document.querySelectorAll('#main button');
    buttons[0].addEventListener('click', function encode() {
        let encodeInput = input[0].value;
        let decodeRecive = ''
        debugger;
        for (let index of encodeInput) {
            let fromAscii = index.charCodeAt();
            fromAscii += 1;
            decodeRecive += String.fromCharCode(fromAscii)
        }
        input[1].value = decodeRecive;
        input[0].value = ""
    });
    buttons[1].addEventListener('click', function decode() {
        let decodeRecive = input[1].value;
        let decode = ""
        for (let index of decodeRecive) {
            let fromAscii = index.charCodeAt();
            fromAscii -= 1;
            decode += String.fromCharCode(fromAscii)
        }
        input[1].value = decode;
    });
}