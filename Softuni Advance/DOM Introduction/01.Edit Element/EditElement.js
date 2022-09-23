// Create function edit() that takes three parameters.

// Input/Output

// The first parameter is a reference to an HTML element, the other two parameters are string–match and replacer.

// You have to replace all occurrences of the match inside the text content of the given element with a replacer.
function editElement(ref, match, replacer) {
    let text = ref.textContent;
    match = new RegExp(match, 'g')
    text = text.replace(match, replacer);
    ref.textContent = text; 
}