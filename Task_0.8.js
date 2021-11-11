function timeConversion(number) {
  if (typeof number !== "number" || number < 0) {
    return "Invalid input. Not a number or negative number.";
  }

  const hoursNotRounded = number / 60;
  const hoursRounded = Math.floor(hoursNotRounded);
  const minutes = number - hoursRounded * 60;
  let hourString = "hour";
  let minuteString = "minute";

  if (minutes !== 1) {
    minuteString += "s";
  }
  if (hoursRounded !== 1) {
    hourString += "s";
  }

  if (minutes === 0) {
    return `${hoursRounded} ${hourString}.`;
  } else if (hoursRounded === 0) {
    return `${minutes} ${minuteString}.`;
  } else {
    return `${hoursRounded} ${hourString}, ${minutes} ${minuteString}.`;
  }
}
console.log(timeConversion(61));
console.log(timeConversion(121));
