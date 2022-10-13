// Push the emoji into the myEmoji's array, and clear the input field
// However, if the input value is empty, don't do anything
const myEmojis = ["👨‍💻", "⛷", "🍲"];
const emojiContainer = document.getElementById("emoji-container");
// add btns
const addLast = document.getElementById("push-btn");//last
const addFirst = document.getElementById("unshift-btn");//first
// remove btns
const removeLast = document.getElementById("pop-btn");//last
const removeFirst = document.getElementById("shift-btn");//first

// inital emoji render
for (let i = 0; i < myEmojis.length; i++) {
  const emoji = document.createElement('span');
  emoji.textContent = myEmojis[i];
  emojiContainer.append(emoji);
}

// add to end
addLast.addEventListener("click", () => addEmoji('end'));

// add to start
addFirst.addEventListener('click', () => addEmoji('start'));

// remove end
removeLast.addEventListener('click', () => removeEmoji('end'));

// remover first
removeFirst.addEventListener('click', () => removeEmoji('start'));


function createNodeWhitEmoji() {
  // get emoji
  const emojiInput = document.getElementById("emoji-input");

  // create node whit emoji
  const newEmoji = document.createElement('span');
  newEmoji.textContent = emojiInput.value;

  // clean input
  emojiInput.value = '';
  return newEmoji;
}


// remove emoji depending on which button is pressed
function addEmoji(place) {
  const emoji = createNodeWhitEmoji();

  if (place === 'end') {
    emojiContainer.appendChild(emoji);
  }
  else if (place === 'start') {
    emojiContainer.insertBefore(emoji, emojiContainer.firstElementChild);
  }
  else {
    console.log('an error has occured while deciding where to add an emoji T.T');
  }
}


// remove emoji depending on which button is pressed
function removeEmoji(place) {
  if (place === 'end') {
    emojiContainer.removeChild(emojiContainer.lastElementChild);
  }
  else if (place === 'start') {
    emojiContainer.removeChild(emojiContainer.firstElementChild);
  }
  else {
    console.log('an error has occured while deciding where to add an emoji T.T');
  }
}