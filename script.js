const button = document.querySelector('button');
const textBox = document.querySelector('#request');
const text = document.querySelector('.question');
const answer = document.querySelector('#response');

textBox.value = ""
answer.classList.remove('normal');
button.addEventListener('click', () => {
    answer.classList.add('normal');
    text.classList.remove('hidden');
    answer.textContent = "";
    answer.classList.replace('response-text', 'normal');
    text.textContent = textBox.value;
    async function gemini() {
        const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyBQ2_qNxfHE-z7B9XevxLcgIsf7EKj-k0I";
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify({
                "contents": [{
                    "parts": [{ "text": textBox.value }]
                }]
            }),
        });
        const body = await response.json();
        const textResponse = body.candidates[0].content.parts[0].text;
        answer.classList.replace('normal', 'response-text');
        answer.textContent = textResponse;
    }
    gemini();
    textBox.value = ""
});


