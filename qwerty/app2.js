const synth = new Tone.Synth({
    oscillator: {
        type: "sine",
    },
}).toDestination();

const keyboard = new AudioKeys({
    rows: 2, 
});

keyboard.down((key) => {
    console.log(key);
    synth.triggerAttackRelease(key.frequency, "8n");
});