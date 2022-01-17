(function() {
    //This sets the variables
    //sizePicker will set the size of the grid
    //colorPicker will set the colors
    //pixelCanvas will create the grid
    const $sizePicker = document.getElementById("sizePicker");
    const $colorPicker = document.getElementById("colorPicker");
    const $pixelCanvas = document.getElementById("pixelCanvas");
    //Size listeners for picking the size of the grid 
    //event.preventDefault will stop the page from reloading
    $sizePicker.addEventListener('submit', function() {
        event.preventDefault();
        let height = document.getElementById("inputHeight").value;
        let width = document.getElementById("inputWidth").value;
        makeGrid(width, height);
    })
    //This makes the canvas grid for the colors
    function makeGrid(width, height) {
        $pixelCanvas.innerHTML = '';
        for (let line = 0; line < height; line++) {
            let addLine = $pixelCanvas.insertRow();
            for (let cell = 0; cell < width; cell++) {
                let addCell = addLine.insertCell();
                addCell.onclick = colors;
            }
        }
    }
    //This function changes a selected grid to the picked color
    function colors() {
        this.style.background = $colorPicker.value;
    }
})();
