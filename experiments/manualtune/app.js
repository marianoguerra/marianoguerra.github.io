function byId(v) {
  const node = document.getElementById(v);
  return node;
}

function onClick(node, fn) {
  node.addEventListener("click", fn);
}

/*
1 (E) 	329.63 Hz 	E4
2 (B) 	246.94 Hz 	B3
3 (G) 	196.00 Hz 	G3
4 (D) 	146.83 Hz 	D3
5 (A) 	110.00 Hz 	A2
6 (E) 	82.41 Hz 	E2
*/

const STRING_NOTES = ["E4", "B3", "G3", "D3", "A2", "E2"],
  STRING_FREQS = [329.63, 246.94, 196.0, 146.83, 110.0, 82.41];

class Game {
  constructor() {
    this.maxVariance = 25;
    this.upDownDelta = 1;
    this.playIntervalMs = 1000;
    this.playIntervalSecs = this.playIntervalMs / 1000;

    this.curFreq = 0;
    this.noteName = "?";
    this.freqTarget = 0;
    this.synth = new Tone.Synth().toDestination();
    this.nextIndex(5);
  }
  getGuessDistance() {
    return Math.floor(this.curFreq - this.freqTarget);
  }
  up() {
    this.addToFrequency(this.upDownDelta);
    this.play();
  }
  down() {
    this.addToFrequency(-this.upDownDelta);
    this.play();
  }
  addToFrequency(delta) {
    this.curFreq += delta;
  }
  play() {
    this.playFreq(this.curFreq);
  }
  playFreq(freq) {
    this.synth.triggerAttackRelease(freq, this.playIntervalSecs);
  }
  playHelp() {
    this.playFreq(this.freqTarget);
  }
  done() {}
  next() {
    const index = this.randIntInRange(0, STRING_NOTES.length - 1);
    this.nextIndex(index);
  }
  nextIndex(index) {
    this.freqTarget = STRING_FREQS[index];
    this.noteName = STRING_NOTES[index];
    this.curFreq = this.freqTarget + this.getVariance();
  }
  getVariance() {
    return this.randFloatInRange(0, this.maxVariance) * this.choice([1, -1]);
  }
  randFloatInRange(from, to) {
    return from + this.randFloat() * (to - from);
  }
  randFloat() {
    return Math.random();
  }
  randIntInRange(from, to) {
    return Math.floor(this.randFloatInRange(from, to + 0.99));
  }
  choice(items) {
    return items[this.randIntInRange(0, items.length - 1)];
  }
}

function main(_) {
  const note = byId("note"),
    curFreq = byId("curFreq"),
    freqTarget = byId("freqTarget"),
    up = byId("up"),
    down = byId("down"),
    play = byId("play"),
    done = byId("done"),
    next = byId("next"),
    help = byId("help"),
    diff = byId("diff"),
    game = new Game();

  function setText(node, value) {
    node.innerText = value;
  }

  function onUp(_) {
    game.up();
    setText(diff, "");
    setText(curFreq, game.curFreq);
  }

  function onDown(_) {
    game.down();
    setText(diff, "");
    setText(curFreq, game.curFreq);
  }

  function onPlay(_) {
    game.play();
  }

  function onHelp(_) {
    game.playHelp();
  }

  function onDone(_) {
    game.done();
    setText(diff, game.getGuessDistance());
  }

  function onNext() {
    game.next();
    render();
    game.play();
  }
  function render() {
    setText(note, game.noteName);
    setText(curFreq, game.curFreq);
    setText(freqTarget, game.freqTarget);
    setText(diff, "");
  }

  onClick(up, onUp);
  onClick(down, onDown);
  onClick(play, onPlay);
  onClick(done, onDone);
  onClick(next, onNext);
  onClick(help, onHelp);

  document.body.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "p":
        onPlay();
        break;
      case "u":
        onUp();
        break;
      case "d":
        onDown();
        break;
      case "n":
        onNext();
        break;
      case "h":
        onHelp();
        break;
      case "g":
        onDone();
        break;
      default:
        console.log(e.key);
    }
  });
  render();
}

window.addEventListener("load", main);
