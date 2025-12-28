// Hello Speaker
(function () {
  var helloSpeaker = {};
  helloSpeaker.speakWord = "Hello";

  helloSpeaker.speak = function (name) {
    console.log(helloSpeaker.speakWord + " " + name);
  };

  window.helloSpeaker = helloSpeaker;
})();

// Goodbye Speaker
(function () {
  var byeSpeaker = {};
  byeSpeaker.speakWord = "Goodbye";

  byeSpeaker.speak = function (name) {
    console.log(byeSpeaker.speakWord + " " + name);
  };

  window.byeSpeaker = byeSpeaker;
})();

// Main Logic
(function () {
  var names = [
    "Yaakov", "John", "Jen", "Jason", "Paul",
    "Frank", "Larry", "Paula", "Laura", "Jim"
  ];

  for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();

    if (firstLetter === 'j') {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }
})();
