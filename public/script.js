document.getElementById('sub-btn').addEventListener('click', async (e) => {
    e.preventDefault();
    
    const textInput = document.getElementById('textarea').value;
    const statusEl = document.getElementById('statusEl');

    if (!textInput.trim()) {
        statusEl.textContent = 'Please Enter Some Text!';
        return;
    }

    try {
        const response = await fetch('/api/v1/send-text', {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain',
            },
            body: textInput,
        })

        if (response.ok) {
            statusEl.textContent = "Text sent Successfully ✅";
            textInput.value = '';
        } else {
            statusEl.textContent = "Failed to send Text ❌";
        }
    } catch (err) {
        console.error('Error Sending POST Request', err);
        statusEl.textContent = 'Server network Error!';
    }
});

const messList = document.getElementById('message-list');

const eventSource = new EventSource('/events');

eventSource.onmessage = (event) => {
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
    });

    messList.prepend(li);
};