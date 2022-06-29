	let btn_prev = document.querySelector('.prev');
	let btn_next = document.querySelector('.next');
	let images = document.querySelectorAll('.answer2 .ask');
	let i = 0;
 btn_prev.onclick = function(){
    images[i].style.display = 'none';
    i = i - 1;
    if(i < 0){
        i = images.length - 1;
    }
    images[i].style.display = 'inline-block';
}
btn_next.onclick = function(){
    images[i].style.display = 'none';
    i = i + 1;
    if(i >= images.length){
        i = 0;;
    }
    images[i].style.display = 'inline-block';
}

function DisplayMenu(){
	let left_menu = document.querySelector('.left_menu');
	left_menu.style.display='block';
}
function HideMenu(){
	let left_menu = document.querySelector('.left_menu');
	left_menu.style.display='none';
}

//сортировка
function real_btn(){
  let reals = document.querySelectorAll('.realty');
  let conds = document.querySelectorAll('.condominium');
  let inters = document.querySelectorAll('.interior');
  for (var i = 0; i < reals.length; i++) {
    reals[i].style.display='inline-block';
  }
  for (var i = 0; i < conds.length; i++) {
    conds[i].style.display='none';
  }
  for (var i = 0; i < inters.length; i++) {
    inters[i].style.display='none';
  }

}
function cond_btn(){
  let reals = document.querySelectorAll('.realty');
  let conds = document.querySelectorAll('.condominium');
  let inters = document.querySelectorAll('.interior');
  for (var i = 0; i < reals.length; i++) {
    reals[i].style.display='none';
  }
  for (var i = 0; i < conds.length; i++) {
    conds[i].style.display='inline-block';
  }
  for (var i = 0; i < inters.length; i++) {
    inters[i].style.display='none';
  }

}
function inter_btn(){
  let reals = document.querySelectorAll('.realty');
  let conds = document.querySelectorAll('.condominium');
  let inters = document.querySelectorAll('.interior');
  for (var i = 0; i < reals.length; i++) {
    reals[i].style.display='none';
  }
  for (var i = 0; i < conds.length; i++) {
    conds[i].style.display='none';
  }
  for (var i = 0; i < inters.length; i++) {
    inters[i].style.display='inline-block';
  }

}
function all_btn(){
  let reals = document.querySelectorAll('.realty');
  let conds = document.querySelectorAll('.condominium');
  let inters = document.querySelectorAll('.interior');
  for (var i = 0; i < reals.length; i++) {
    reals[i].style.display='inline-block';
  }
  for (var i = 0; i < conds.length; i++) {
    conds[i].style.display='inline-block';
  }
  for (var i = 0; i < inters.length; i++) {
    inters[i].style.display='inline-block';
  }

}

function open_window(){
  let window = document.getElementById('window');
  window.style.display = 'block';
}

function close_window(){
  let window = document.getElementById('window');
  window.style.display = 'none';
}
