window.onload = () => {
    /* Put the changeVolume function as callback for adjusting the volume slider */
    document.querySelector('#volume-slider').addEventListener('input', changeVolume);

    /* Gets all the buttons, then iterates through them.
    * Adds the ability to play any <audio> elements inside of the <button> element
    * */
    let buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', (evt) => {
            let children = evt.target.children;
            for (let i = 0; i < children.length; i++) if (children.item(i).tagName === 'AUDIO') children.item(i).play();
        })
    });

    /* Get the value of the volume slider
    * Apply the value to each <audio> element
    * */
    function changeVolume() {
        let volume = document.querySelector('#volume-slider').value;
        let audios = document.querySelectorAll('audio');
        for (let i = 0; i < audios.length; i++) {
            audios[i].volume = parseFloat(volume);
        }
    }

    /* Run once to apply the cached slider-setting */
    changeVolume();
	
	
	$(document).ready(function(e) {
    var width = $(document).width();

    function goRight() {
        $("#animate").animate({
        left: width
      }, 5000, function() {
         setTimeout(goLeft, 50);
      });
    }
    function goLeft() {
        $("#animate").animate({
        left: 0
      }, 5000, function() {
         setTimeout(goRight, 50);
      });
    }

    setTimeout(goRight, 50);
});
	
};

