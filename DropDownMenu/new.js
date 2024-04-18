const dropDownMenus = document.querySelectorAll('.dropDown');
dropDownMenus.forEach((element) =>
  element.addEventListener('click', function (e) {
    e.stopPropagation();
    toggleDropDown(e);
  })
);
function toggleDropDown(e){
e.target.childNodes[1].classList.toggle('show')
}

