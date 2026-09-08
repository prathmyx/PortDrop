import { checkEmpty } from "./utils.js";

export default function handleEvent(event) {
    const messageList = document.getElementById('message-list');
    const data = JSON.parse(event.data);

    const li = document.createElement('li');

    li.dataset.timestamp = data.timestamp;

    li.innerHTML = `
        <span class="message-text">${data.text}</span>

        <div class="message-actions">
            <button class="copy-btn" type="button">Copy   </button>
            <button class="delete-btn" type="button">Delete</button>
        </div>
    `;

    li.querySelector('.copy-btn').addEventListener('click', async () => {
        const text = li.querySelector('.message-text').textContent;

        await navigator.clipboard.writeText(text);

        const button = li.querySelector('.copy-btn');
        button.textContent = 'Copied!';

        setTimeout(() => {
            button.textContent = 'Copy';
        }, 1000);
    });

    li.querySelector('.delete-btn').addEventListener('click', () => {
        li.remove();
        checkEmpty();
    });

    messageList.prepend(li);
    checkEmpty();
}