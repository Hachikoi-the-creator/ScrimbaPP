const allItems = document.querySelectorAll('.carousel--item');
const prevBtn = document.querySelector('.carousel--actions--prev');
const nextBtn = document.querySelector('.carousel--actions--next');
let index = 0;

prevBtn.addEventListener('click', prev);

nextBtn.addEventListener('click', next);

//? helper func for index
const roundIndex = () => {
  if (index >= allItems.length) {
    index -= allItems.length;
  }
  else if (index < 0) {
    index = allItems.length;
  }
  console.log('rounded', index);
};

//? helper func to remove & add .visible class
const toggleVisible = (indexFunc) => {
  // remove .visible from current slide (index)
  allItems[index].classList.remove('visible');
  // add visible to next slide (index++ -> roundIndex)
  indexFunc();//?index-- or index++ depending on btn
  roundIndex();//?avoid going out of limits
  allItems[index].classList.add('visible');
};

const next = () => {
  console.log('next slide');
  toggleVisible(() => { index++; });
};

const prev = () => {
  console.log('prev slide');
  toggleVisible(() => { index--; });
};

