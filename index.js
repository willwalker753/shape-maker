$(document).ready(() => {
    $('#shape-form').submit(e => {
        e.preventDefault();
        handleShapeForm();
    });
});
const handleShapeForm = () => {  
    $('#result').empty();
    let shape = $('#shape').val();
    let filled = $('#infill').val();
    let char = $('#char').val();
    let width = $('#width').val();
    let height = $('#height').val();
    let size = $('#size').val();
    let color = $('#color').val();
    $('.font').css('font-size', size + 'px');
    size = size / 2;
    $('.font').css('line-height', size + 'px');
    $('.font').css('color', color);
    if(width < 3 || height < 3) { filled = "true" }
    switch(shape) {
        case('rectangle'): rectangle(filled, char, width, height);
            break;       
        case('triangle'): triangle(filled, char, width, height);
            break;
    }
}
const rectangle = (filled, char, width, height) => {
    let result = '';
    if(filled === "true") {     
        for(let h=0; h<height; h++) {
            for(let w=0; w<width; w++) {
                result = result + char;
            }
            result = result + '<br></br>';
        }
    }
    else {
        for(let h=0; h<height; h++) {
            for(let w=0; w<width; w++) {
                if(w === 1 && h > 0 && h < height-1) {
                    if(width === "3") { 
                        result = result + '<span class="hidden">' + char + '</span>'; 
                    }
                    else {
                        result = result + '<span class="hidden">' + char;
                    }      
                }
                else if(w === width-2 && h > 0 && h < height-1) {
                    result = result + char + '</span>';
                }
                else {
                    result = result + char;
                }
            }
            result = result + '<br></br>';
        }
    }
    $('#result').append(result);
}

const triangle = (filled, char, width, height) => {
    let result = '';
    let ratio = Math.round(height / width);
    let multiple = ratio;
    let widthCount = 1;
    if(filled === "true") { 
        for(let h=0; h<height; h++) {
            if(h === multiple) {
                multiple = multiple + ratio;
                widthCount++;
            }
            for(let w=0; w<widthCount; w++) {
                result = result + char;
            }
            result = result + '<br></br>';
        }
    }
    else {
        for(let h=0; h<height; h++) {
            if(h === multiple) {
                multiple = multiple + ratio;
                widthCount++;
            }
            for(let w=0; w<widthCount; w++) {
                if(w === 1 && widthCount > 2 && h > 0 && h < height-1) {
                    result = result + '<span class="hidden">' + char;
                }
                else if(w === widthCount-1 && h > 0 && h < height-1) {
                    result = result + '</span>' + char;
                }
                else {
                    result = result + char;
                }
            }
            result = result + '<br></br>';
        }
    }
    $('#result').append(result);
}