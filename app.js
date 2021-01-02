const btn = document.querySelector('.talk');
const content = document.querySelector('.content');


const greetings = [
    'I am good, how about you',
    ' I am doing fine what about you',
    'I am good, now leave me alone'
];

const weather = [
    'weather is fine',
    'why? you dont go out',
    'why do you care?'
]


const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function() {
    console.log("You can speak now.");
};



recognition.onresult = function(event) {
    // console.log(event);
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    content.textContent = "Output: " + transcript;
    readOutLoud(transcript);

};

btn.addEventListener('click', () => {
    recognition.start();
});

function readOutLoud(message) {

    const speech = new SpeechSynthesisUtterance();
    speech.text = 'I dont know';

    if (message.includes('how are you')) {
        const finalText =
            greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
    } else if (message.includes('weather')) {
        const finalText =
            weather[Math.floor(Math.random() * weather.length)];
        speech.text = finalText;
    }

    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = .5;

    window.speechSynthesis.speak(speech);

}