//? Objective: Make a search bar, if the word starts whit the input the suer gives, show the corresponding value (node)

const input = document.getElementById('searchInput');
const namesList = document.querySelectorAll('.name');

input.addEventListener('keyup', (e) => {
  // let value = input.value //? weird how not working like this, prob my error lol
  let searchInput = e.target.value.toLowerCase();

  searchNode(searchInput);
});


function searchNode(findMe) {
  for (let i = 0; i < namesList.length; i++) {
    const currentNode = namesList[i];
    const currentNodeText = currentNode.textContent.toLowerCase();

    if (currentNodeText.includes(findMe)) {
      console.log(currentNodeText, 'FOUND IT');
      currentNode.style.display = 'block';
    }
    else {
      currentNode.style.display = 'none';
      console.log(currentNodeText, 'NAN');
    }
  }
  console.log('\n\n');//better in the console :D
}
