function getInputElementById(id) {
    const inputValue = document.getElementById(id).value;
    const numValue = parseFloat(inputValue)
    return numValue;
}

function getTextElementById(id) {
    const texValue = document.getElementById(id).innerText
    const numText = parseFloat(texValue);
    return numText;
}