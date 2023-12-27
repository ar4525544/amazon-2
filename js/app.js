let closeBtn  =  document.getElementById('test');
let  menu = document.getElementById('menu');
closeBtn.addEventListener('mouseover', function () {
  
  menu.style.display = 'block'
})
closeBtn.addEventListener('mouseleave', function () {
  
    menu.style.display = 'none'
  })
