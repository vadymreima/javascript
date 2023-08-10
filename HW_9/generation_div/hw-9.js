window.onload = function(){
    
    const generateButton = document.getElementById('generateButton');
    const outputDiv = document.getElementById('output');
    
    generateButton.addEventListener('click', () => {
      const countInput = document.getElementById('countInput');
      const count = parseInt(countInput.value, 10);
    
      if (!isNaN(count) && count > 0) {
        outputDiv.innerHTML = '';
        for (let i = 0; i < count; i++) {
          const randomColor = generateRandomColor();
          const div = document.createElement('div');
          div.className = 'box';
          div.style.backgroundColor = randomColor;
          outputDiv.appendChild(div);
        }
      }
    });
    
    function generateRandomColor() {
      const hue = Math.random() * 360;
      const saturation = Math.random() * 100;
      const lightness = Math.random() * 50 + 25; 
      return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    }

};