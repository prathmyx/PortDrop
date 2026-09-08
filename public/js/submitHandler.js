export default async function handleSubmit(e) {
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
}