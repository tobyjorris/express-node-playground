import { validateInput } from "../index";
import { updateUI } from "../index";
import { postDataAsObject } from "../index";

function handleStringSubmit(event) {
    event.preventDefault()
    let formText = document.getElementById('post-string').value;

    if (validateInput(formText)) {
        postDataAsObject('http://localhost:8081/string', formText)
            .then(data => {
                console.log('String data sent back from server:', data)
            });
    } else {
        alert('invalid input!')
    }
}

export { handleStringSubmit }
