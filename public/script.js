document.getElementById('fetchBtn').addEventListener('click', () => {
    fetch('/api/message')
        .then(response => response.json())
        .then(data => {
            document.getElementById('message').textContent = data.message;
        })
        .catch(err => {
            document.getElementById('message').textContent = "Error fetching message.";
            console.error(err);
        });
});
