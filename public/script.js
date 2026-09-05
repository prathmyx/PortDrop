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