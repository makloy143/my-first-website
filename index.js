var headerPointer = document.getElementById('myfirstheader');
var buttonPointer = document.getElementById('button');

var header = headerPointer.addEventListener('click', headerClicked);
var button = buttonPointer.addEventListener('click', toggleShow);

var color = 'red';
var fontSize = '240px';
var show = true;

function headerClicked() {
  if (color === 'red') {
    headerPointer.innerText = 'hAHAHAHA';
    color = 'blue';
  } else if (color === 'blue') {
    color = 'red';
    headerPointer.innerText = 'HUHUHUHU';
  }

  headerPointer.style.color = color;
  headerPointer.style.fontSize = fontSize;
}

function toggleShow() {
  if (show) {
    headerPointer.style.display = 'none';
    show = false;
    buttonPointer.innerText = 'HIDE';
  } else {
    show = true;
    headerPointer.style.display = 'block';
    buttonPointer.innerText = 'SHOW';
    headerPointer.innerText = 'MCSJ TECH';
  }
}
