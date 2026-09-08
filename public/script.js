document.getElementById('sub-btn').addEventListener('click', async (e) => {
    e.preventDefault();
    
    let textInputEl = document.getElementById('textarea');
    const statusEl = document.getElementById('statusEl');

    if (!textInputEl.value.trim()) {
        statusEl.textContent = 'Please Enter Some Text!';
        return;
    }

    try {
        const response = await fetch('/api/v1/send-text', {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain',
            },
            body: textInputEl.value,
        })

        if (response.ok) {
            statusEl.textContent = "Text sent Successfully ✅";
            textInputEl.value = "";
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
        checkEmpty();
    });

    messList.prepend(li);
    checkEmpty();
};


function checkEmpty() {
    const container = document.getElementById('message-list');
    const status = document.getElementById('empty-message');

    if (container.children.length == 0) {
        status.style.display = 'block';
    } else {
        status.style.display = 'none';
    }
}

checkEmpty();
