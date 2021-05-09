let textToEncode = document.getElementById("textToEncode");
let textToDecode = document.getElementById("textToDecode");

let encode = () => {
    textToDecode.value = btoa(textToEncode.value);
}

let decode = () => {
    textToEncode.value = atob(textToDecode.value)
}


textToEncode.addEventListener("keypress", encode);
textToEncode.addEventListener("change", encode);


textToDecode.addEventListener("keypress", decode);
textToDecode.addEventListener("change", decode);
