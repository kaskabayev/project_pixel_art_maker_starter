let color = "#000000", colorPicker, sizePicker, height, width, table;

colorPicker = document.getElementById("colorPicker");
sizePicker 	= document.getElementById("sizePicker");
table  		= document.getElementById("pixel_canvas");

// Select color input
colorPicker.addEventListener("change", function(){
	color = colorPicker.value;
});

function makeGrid() {
	height 			= document.getElementById("input_height").value;
	width  			= document.getElementById("input_width").value;
	table.innerHTML = "";

	for (let i = 0; i < height; i++) {
		let row = table.insertRow(i);

		for (let j = 0; j < width; j++) {
			let cell = row.insertCell(j);

			cell.addEventListener("click", function(e){
				this.style.backgroundColor = this.style.backgroundColor ? '' : color;
			});
		}
	}
}

// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener("submit", function(e){
	e.preventDefault();
	makeGrid();
});
