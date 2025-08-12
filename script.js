const jokes = [
    "Why did the cake go to the doctor? Because it was feeling crumby! 😂",
    "What do you call a fake noodle? An Impasta! 🍝",
    "Why don’t skeletons fight each other? They don’t have the guts! 💀"
];

function showJoke() {
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    fetch("https://icanhazdadjoke.com/", {
        headers: {
            accept: "application/json",
        },
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('message-box').textContent = data.joke;
    })
    .catch(error => {
        document.getElementById('message-box').textContent = "Couldn't fetch a joke right now!";
    });
}

function showMessage() {
    document.getElementById('message-box').textContent =
        "A thousand memories, one beautiful soul… Happiest Birthday,  ✨ ❤️🎂";
}

function toggleVideo() {
    const videoContainer = document.getElementById('video-container');
    const video = document.getElementById('birthday-video');

    if (videoContainer.style.display === "none") {
        videoContainer.style.display = "block";
        video.pause();
    } else {
        videoContainer.style.display = "none";
        video.pause();
    }
}
