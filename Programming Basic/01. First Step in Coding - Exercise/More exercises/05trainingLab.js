function trainingLab(input) {
   let lenght = Number(input[0]);
   let width = Number(input[1]);
   let noWorkingplaces = 3;
   let corridorWidth = 100;

   let lenghtConvert = lenght * 100;
   let widthConvert = width * 100;

   let widthCorrection = widthConvert - corridorWidth;
   let lenghtWorkingplaces = Math.floor (lenghtConvert / 120);
   let widthWorkingplaces = Math.floor (widthCorrection / 70);

   let workingplaces = (lenghtWorkingplaces * widthWorkingplaces) - noWorkingplaces;
   console.log (workingplaces);
}

trainingLab ([ "15" , "8.9"]);
trainingLab ([ "8.4" , "5.2"]); 