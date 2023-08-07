window.onload = function(){
    let openBtn = document.querySelector('.open');
    let closeOpen = document.querySelector('.closeOpen');

    openBtn.onclick = function(){
        if(closeOpen.classList.contains('hide')){
            closeOpen.classList.remove('hide');
            openBtn.innerHTML = 'Close menu';
        }
        else{
            closeOpen.classList.add('hide');
            openBtn.innerHTML = 'Open menu';
        }
    }



    
    let moreSise = document.querySelector('.size');

    moreSise.onclick = function(){
        let moreSiseStyle = getComputedStyle(moreSise);
        let fontSize = parseFloat(moreSiseStyle.fontSize);
        let bigSize = fontSize + 10;
        moreSise.style.fontSize = `${bigSize}px`;
    }
};