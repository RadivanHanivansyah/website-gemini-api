const button = document.querySelector('button');
const textBox = document.querySelector('#request');
const text = document.querySelector('.question');
const answer = document.querySelector('#response');
button.addEventListener('click', () => {
    async function gemini() {
        const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyBQ2_qNxfHE-z7B9XevxLcgIsf7EKj-k0I";
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify({
                "contents": [{
                    "parts": [{ "text": "anime" }]
                }]
            }),
        });
        const body = response.json();
        console.log(body);
    }
    text.textContent = textBox.value
    text.classList.remove('hidden');
    gemini();
});


