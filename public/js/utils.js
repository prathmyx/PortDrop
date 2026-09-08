export function checkEmpty() {
    const container = document.getElementById('message-list');
    const status = document.getElementById('empty-message');

    if (container.children.length == 0) {
        status.style.display = 'block';
    } else {
        status.style.display = 'none';
    }
}