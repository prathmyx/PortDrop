import handleSubmit from "./submitHandler.js";
import handleEvent from "./eventHandler.js";
import { checkEmpty } from "./utils.js";

document.getElementById('sub-btn').addEventListener('click', handleSubmit);


const eventSource = new EventSource('/events');
eventSource.onmessage = handleEvent;

checkEmpty();