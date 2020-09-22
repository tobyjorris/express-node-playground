import { validateInput } from "../index";
import { updateUI } from "../index";
import { postDataAsObject } from "../index";

function handleObjectSubmit(event) {
    event.preventDefault()
    let formText = document.getElementById('post-object').value;

    if (validateInput(formText)) {
        const serverData = {
            text: formText
        }
        postDataAsObject('http://localhost:8081/object', serverData)
            .then(data => {
                console.log('Object data sent back from server:', data)
            });
    } else {
        alert('invalid input!')
    }
}

export { handleObjectSubmit }
