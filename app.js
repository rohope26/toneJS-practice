const playBtn = document.getElementById("play-btn");
const synth = new Tone.Synth();

// const feedbackDelay = new Tone.FeedbackDelay("8n.", 0.7);
const feedbackDelay = new Tone.FeedbackDelay({
    delayTime: 0.7,
    feedback: 0.3,
    maxDelay: 2,
    wet: 0.3,
});

synth.connect(feedbackDelay);
feedbackDelay.toDestination();

console.log(Tone.context.state);

playBtn.addEventListener("click", () => {
    if (Tone.context.state !== "running") {
        Tone.start();
    }
    synth.triggerAttackRelease("C4", "8n");
});