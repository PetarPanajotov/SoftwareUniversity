import { createElements } from "./ultis/ultis.js";
import { GET, POST, DELETE, PUT } from "./api.js";
import {createTopic, loadTopic, div} from "./home.js" 
import { loadContent } from "./comments.js";
const form = document.querySelector('.new-topic-border form') 
form.addEventListener('submit', createTopic)
div.addEventListener('click', loadContent)
window.addEventListener('load', loadTopic)