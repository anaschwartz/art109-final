document.addEventListener('mousemove', function (e) {
    var handImage = document.getElementById('hand-follow');
    var offsetX = -150; 
    var offsetY = -60; 
    

    handImage.style.left = e.pageX + offsetX + 'px'; 
    handImage.style.top = e.pageY + offsetY + 'px';  
    handImage.style.display = 'block';              
  });

