import React, { useEffect } from "react";
import "./App.css";

const App = () => {
  let show = () => {
    let intro = {
      sentence1: sent1[Math.floor(Math.random() * sent1.length)],
      sentence2: sent2[Math.floor(Math.random() * sent2.length)],
      sentence3: sent3[Math.floor(Math.random() * sent3.length)],
    };
    document.getElementById("sent1").innerHTML = intro.sentence1;
    document.getElementById("sent2").innerHTML = intro.sentence2;
    document.getElementById("sent3").innerHTML = intro.sentence3;

    document.getElementById("intro_text").style.opacity = 1;
    setTimeout(() => {
      document.getElementById("intro_text").style.opacity = 0;
    }, 2000);
  };
  let sent1 = ["Hello!", "Hey!", "Hi there!", "Bonjour!"];
  let sent2 = [
    " How are you?",
    " How've you been?",
    " How's it been?",
    " How's everything going?",
  ];
  let sent3 = [
    " Welcome back!",
    " Feel at home!",
    " Enjoy browsing!",
    "Take care!",
  ];
  useEffect(() => {
    show();
    let count = 1;
    setInterval(() => {
      let colors = [
        "blueviolet",
        "rgb(253, 109, 217)",
        "rgb(243, 89, 89)",
        "rgb(175, 166, 32)",
        "rgb(104, 104, 104)",
        "rgb(35, 128, 66)",
        "rgb(29, 105, 247)",
      ];

      show();
      document.body.style.backgroundColor = colors[count];
      count = count + 1;
      if (count > 6) {
        count = 0;
      }
    }, 3500);
  });

  return (
    <h1 id="intro_text">
      <span id="sent1"></span>
      <span id="sent2"></span>
      <span id="sent3"></span>
    </h1>
  );
};

export default App;
