function areaOfTriangle(firstLength, secondLength, thirdLength) {
  const semiPerimeter = 0.5 * (firstLength + secondLength + thirdLength);
  const area = Math.sqrt(
    semiPerimeter *
      (semiPerimeter - firstLength) *
      (semiPerimeter - secondLength) *
      (semiPerimeter - thirdLength)
  );
  return area;
}
console.log(areaOfTriangle(3, 5, 4));
