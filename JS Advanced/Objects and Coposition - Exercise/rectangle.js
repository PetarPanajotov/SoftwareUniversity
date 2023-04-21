// Write a function that creates and returns a rectangle object. The rectangle needs to have a width (Number), height (Number), and color (String) properties, which are set via arguments during creation, and a calcArea() method, that calculates and returns the rectangle’s area.

// Input

// The function will receive three valid parameters – width (Number), height (Number), and color (String).
function rectangle(width, height, color) {
    let rect = {
        width: width,
        height: height,
        color: color.charAt(0).toUpperCase() + color.slice(1),
        calcArea() {
            return this.width * this.height;
        }
    };
    return rect
}
let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
