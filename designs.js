(function() {
    //Set Vars
    const $sizePicker = document.getElementById("sizePicker");
    const $colorPicker = document.getElementById("colorPicker");
    const $pixelCanvas = document.getElementById("pixelCanvas");
    //Size Listeners Prevent Refresh
    $sizePicker.addEventListener('submit', function() {
        event.preventDefault();
        let height = document.getElementById("inputHeight").value;
        let width = document.getElementById("inputWidth").value;
        makeGrid(width, height);
    })
    //Canvas
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
    //Change Colors
    function colors() {
        this.style.background = $colorPicker.value;
    }
})();