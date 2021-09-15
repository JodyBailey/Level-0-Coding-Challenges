function areaOfTriangle(firstLength, secondLength, thirdLength) {
    var semiPerimeter = 0.5 * (firstLength + secondLength + thirdLength);
    var area = Math.sqrt(
        semiPerimeter * 
        (semiPerimeter - firstLength) *
        (semiPerimeter - secondLength) *
        (semiPerimeter - thirdLength)
    );
    return area;
}

