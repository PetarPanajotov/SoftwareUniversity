function trainingLab(input) {
    let lenght = Number(input[0]);
    let width = Number(input[1]);
    let reservedSeats = 3;
    let reservedSpace = 100;
    // Едно работно място заема 70 на 120 cm
    // Коридорът е широк поне 100 cm.
    let convertedLenght = lenght * 100;
    let convertedWidth = width * 100;
    let widthAfterReservedSpace = convertedWidth - reservedSpace;
    let workingPlacesWidth = Math.floor(widthAfterReservedSpace / 70);
    let workingPlacesLenght = Math.floor(convertedLenght / 120);
    let allWorkingPlaces = (workingPlacesLenght * workingPlacesWidth) - reservedSeats;
    console.log(allWorkingPlaces);
}
trainingLab ([ "15" , "8.9"]);
trainingLab ([ "8.4" , "5.2"]); 
trainingLab ([ "4" , "3"]);
trainingLab ([ "5" , "11"]);
trainingLab ([ "65.45" , "35.54"]);
trainingLab ([ "43.4" , "35.3"]);
trainingLab ([ "24" , "54.2"]);
