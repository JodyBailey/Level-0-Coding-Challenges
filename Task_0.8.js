function timeConversion(number) {
    var hoursNotRounded = number / 60;
    var hoursRounded = Math.floor(hoursNotRounded);
    var minutes = number - hoursRounded * 60;

    if (hoursRounded == 1) {
        var hoursString = "hour";
    } else {
        hoursString = "hours";
    }

    if (minutes == 1) {
        var minutesString = "minute";
    } else {
        minutesString = "minutes";
    }
    console.log(hoursRounded + " " + hoursString + ", " + minutes + " " + minutesString );
}