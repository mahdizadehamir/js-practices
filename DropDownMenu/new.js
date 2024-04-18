const base = document.querySelectorAll('.nav-items');
base.forEach((element) => {
  element.addEventListener('click', function (e) {
    e.stopPropagation();
    handleClick(e);
  });
});
function handleClick(event) {
  classes = event.target.children[0].classList;
  if (classes.length === 0) {
    classes.add('show');
  } else {
    classes.remove('show');
  }
}
