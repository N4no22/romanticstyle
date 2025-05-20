function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');
  
    // Posición horizontal aleatoria según ancho ventana
    petal.style.left = Math.random() * 100 + 'vw';
  
    // Duración animación entre 5 y 10 segundos
    petal.style.animationDuration = 5 + Math.random() * 5 + 's';
  
    // Opacidad aleatoria (0.2 a 1 para que no queden invisibles)
    petal.style.opacity = 0.2 + Math.random() * 0.8;
  
    // Tamaño variable según pantalla
    if (window.innerWidth < 480) {
      petal.style.width = '7px';
      petal.style.height = '5px';
    } else if (window.innerWidth < 768) {
      petal.style.width = '12px';
      petal.style.height = '9px';
    } else {
      petal.style.width = '20px';
      petal.style.height = '15px';
    }
  
    document.body.appendChild(petal);
  
    // Eliminar después de 10 segundos para no saturar DOM
    setTimeout(() => {
      petal.remove();
    }, 10000);
  }
  
  function createFloatingLove() {
    const love = document.createElement('div');
    love.classList.add('floating-love');
    love.innerText = 'Te amo ❤️';
  
    // Posición horizontal aleatoria (entre 0 y 90vw para evitar bordes)
    love.style.left = Math.random() * 90 + 'vw';
  
    // Posición vertical adaptada a móvil o escritorio
    if (window.innerWidth < 480) {
      love.style.top = Math.random() * 15 + 'vh';
    } else {
      love.style.top = Math.random() * 80 + 'vh';
    }
  
    // Tamaño de fuente responsive
    if (window.innerWidth < 480) {
      love.style.fontSize = (1 + Math.random() * 1.2) + 'rem';
    } else if (window.innerWidth < 768) {
      love.style.fontSize = (1.5 + Math.random() * 1) + 'rem';
    } else {
      love.style.fontSize = (2 + Math.random() * 1.5) + 'rem';
    }
  
    // Duración animación entre 2 y 5 segundos
    love.style.animationDuration = (2 + Math.random() * 3) + 's';
  
    document.body.appendChild(love);
  
    // Eliminar para no saturar DOM
    setTimeout(() => {
      love.remove();
    }, 4000);
  }
  
  // Intervalos adaptados a pantallas
  const intervaloPetalos = window.innerWidth < 480 ? 600 : 300;
  const intervaloLove = window.innerWidth < 480 ? 1200 : 1000;
  
  setInterval(createPetal, intervaloPetalos);
  setInterval(createFloatingLove, intervaloLove);
  
  // Para que el tamaño y posición se adapten si se redimensiona ventana
  window.addEventListener('resize', () => {
    // Opcional: puedes reiniciar intervalos o ajustar variables aquí si quieres
  });
  