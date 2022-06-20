function mathPower (num, degree) {
    //let result = Math.pow (num , degree)
   // console.log (result)
   let result = 1;
   for (let i = 0; i < degree; i++) {
        result *= num
   }
   console.log (result)
}
mathPower(3,4)
