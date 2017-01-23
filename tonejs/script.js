var synth;
var shouldGenerateNotes = false;

function init() {
    synth = new Tone.Synth().toMaster();

    shouldGenerateNotes = true;
    generateRandomNotes({low: 0, high: 7}, {low: 0, high: 3}, 150);
}

function generateRandomNotes(letterRange, octaveRange, interval) {
    generateRandomNote(letterRange, octaveRange);
    setTimeout(function() {
        generateRandomNotes(letterRange, octaveRange, interval);
    }, interval);
}

function generateRandomNote(letterRange, octaveRange) {
    var letters = ["A", "B", "C", "D", "E", "F", "G"];
    var octaves = ["1", "2", "3", "4", "5", "6", "7"];

    var letterIndex = getRandomInt(letterRange.low, letterRange.high);
    var octaveIndex = getRandomInt(octaveRange.low, octaveRange.high);

    synth.triggerAttackRelease(letters[letterIndex] + octaves[octaveIndex], "8n");
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
