import { validateInput } from './js/inputValidator';
import { handleObjectSubmit } from './js/handleObjectSubmit';
import { handleStringSubmit } from "./js/handleStringSubmit";
import { updateUI } from "./js/uiUpdate";
import { postDataAsObject } from "./js/postDataAsObject";
import { postDataAsString } from "./js/postDataAsString";

import './styles/base.scss'
import './styles/form.scss'

export {
    postDataAsObject,
    updateUI,
    validateInput,
    handleObjectSubmit,
    postDataAsString,
    handleStringSubmit
}
