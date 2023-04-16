addEventListener('load', () => {
  const target = document.querySelector('.target');
  const borderX = document.querySelector('.borderX');
  const borderY = document.querySelector('.borderY');
  const targetRect = target.getBoundingClientRect();
  const targetHalfWidth = targetRect.width / 2;
  const targetHalfHeight = targetRect.height / 2;

  window.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;
    target.innerHTML = `    
    <img src="./img/target.png" alt="" width="120" height="120 " /> <br>
    <p>${x}px / ${y}px</p>
  `;

    target.style.transform = `
    translate(
    ${x - targetHalfWidth}px, 
    ${y - targetHalfHeight}px)`;

    borderX.style.transform = `translateY(${y}px)`;
    borderY.style.transform = `translateX(${x}px)`;
  });
});
