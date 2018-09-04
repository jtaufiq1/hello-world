/*
var onSale = true,
    inventoryLevel = 12,
    discount = 3;
if (onSale && inventoryLevel > 10) {
    console.log("We have Plenty left");
}
if(onSale || discount > 0) {
    console.log("on Sale");
} else {
    console.log("Full price");
}

// Rectangle Object
var rect = {
    width: 100,
    height: 50,
    toString: function() {
        return "Width: " + this.width + ", height: " + this.height;
    }
};
console.log(rect);
console.log("My Object rec is: " + rect);
*/

// Compute Area of a circle
// @param {number} The radius of the circle
// @return {number} The area of the circle
function computeArea(radius) {
    return radius * radius * Math.PI;
}
// printString(computeArea(4));

// Print String 
// @param {string} Input String
// @console {string} Print String to console
function printString(str) {
    console.log(str);
}

// Calculate Area of Rectangle
// @param {number, number} Length and Breadth of Rectangle
// @return {number} Area of Rectangle
function rect(w, h) {
    var re = {
        width: w,
        height: h,
        computeArea: function() {
        return (this.width * this.height);
        }
    }
    printString(re.computeArea());
}

// Return half of a Number
// @param {number} The number
// @return {number} Half of number
function half(x) {
    return (x/2);
}

// Check for even number
// @param {number} Input number
// @return {Boolean} Return true for evenNumber
function isEven(n) {
    (n % 2 == 0) ? console.log('True'): console.log('False');
}

/* OBJECTS */
