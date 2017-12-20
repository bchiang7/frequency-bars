// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/2O3nm0Nvbi4

var song;
var fft;
var button;
var w;

function toggleSong() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}

function preload() {
  // song = loadSound('this-dot-kp.mp3');
  // song = loadSound('rainbow.mp3');
  song = loadSound('audio/attention.mp3');
}

function setup() {
  createCanvas(250, 250);
  // colorMode(HSB);
  angleMode(DEGREES);
  button = createButton('toggle');
  button.mousePressed(toggleSong);
  song.play();

  // https://p5js.org/reference/#/p5.FFT
  fft = new p5.FFT(0.7, 64);
  w = width / 5; // number of bars
}

function draw() {
  background(0);
  var spectrum = fft.analyze();
  // console.log(spectrum);
  // stroke(255);
  noStroke();
  for (var i = 0; i < spectrum.length; i++) {
    var amp = spectrum[i];
    var y = map(amp, 0, 256, height, 0);
    rect(i * w, y, w - 2, height - y);
    // fill(i, 255, 255);
    fill(255, 255, 255);
  }
}
