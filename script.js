
document.getElementById('nextBtn1').addEventListener('click', function() {
  document.getElementById('slide1').classList.add('hidden');
  document.getElementById('slide2').classList.remove('hidden');
});

document.getElementById('nextBtn2').addEventListener('click', function() {
  document.getElementById('slide2').classList.add('hidden');
  document.getElementById('slide3').classList.remove('hidden');
});
