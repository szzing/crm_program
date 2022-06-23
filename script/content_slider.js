document.getElementById("content-slider-btn2").classList.add('none_btn');

document.getElementById("content-slider-btn1").addEventListener("click", function(){
  document.querySelector(".content-slider").style.transform = 'translate(0px)';
  document.getElementById("content-slider-btn2").classList.add('none_btn');
  document.getElementById("content-slider-btn1").classList.remove('none_btn');
});

document.getElementById("content-slider-btn2").addEventListener("click", function(){
  document.querySelector(".content-slider").style.transform = 'translate(-400px)';
  document.getElementById("content-slider-btn1").classList.add('none_btn');
  document.getElementById("content-slider-btn2").classList.remove('none_btn');
});