import dogsData from "./modules/data.js";
import { Dog } from "./modules/DogClass.js";

// todo: update name and intro for new dogs
let globalCounter = 1;
const likedArr = [];
const swippedArr = [];
const allDogs = dogsData.map((dog) => new Dog(dog));

document.querySelector(".yes-btn").addEventListener("click", yesHandler);
document.querySelector(".nope-btn").addEventListener("click", nopeHandler);

// START APP / First render
nextCanineCandidate(allDogs[0]);

function nextCanineCandidate(currDog = Dog) {
  if (globalCounter >= allDogs.length) {
    console.log("no more dogs to see");
  } else {
    console.log("Showing next dog");
    globalCounter++;
    document.querySelector(".img-container").style.backgroundImage = `
    linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.9) -11.44%,
      rgba(0, 0, 0, 0) 39.97%
    ),
    url(${currDog.avatar})
    `;

    // update name and intro
    document.querySelector(".img-name").textContent = currDog.name;
    document.querySelector(".img-intro").textContent = currDog.bio;
  }
}

function yesHandler() {
  const currDog = allDogs[globalCounter - 1];

  addDecisionImg("yes-img");
  currDog.hasBeenLiked = true;
  likedArr.push();
  setTimeout(() => {
    removeDecisionImg("yes-img");
    nextCanineCandidate(currDog);
  }, 2000);
}

function nopeHandler() {
  const currDog = allDogs[globalCounter - 1];

  addDecisionImg("nope-img");
  currDog.hasBeenSwiped = true;
  swippedArr.push(currDog);
  setTimeout(() => {
    removeDecisionImg("nope-img");
    nextCanineCandidate(currDog);
  }, 2000);
}

function removeDecisionImg(className = "") {
  if (className === "yes-img" || className === "nope-img") {
    document.querySelector(`.${className}`).style.display = "none";
  } else {
    console.log("invalid Class name - dev error, on removeDecisionImg()");
  }
}

function addDecisionImg(className = "") {
  if (className === "yes-img" || className === "nope-img") {
    document.querySelector(`.${className}`).style.display = "inline";
  } else {
    console.log("invalid Class name - dev error, on addDecisionImg()");
  }
}
