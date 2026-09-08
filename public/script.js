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
    console.log(data);
    li.innerHTML = `Text: ${data.text} Time: ${data.timestamp}`;
    messList.append(li);
};