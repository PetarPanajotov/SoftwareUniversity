function readText (input) {
    let index = 0;

    let str = input[index];

    while (true) {
        str = input[index]
       if (str === "Stop") {
           break;
       }
        index++
        console.log (str)
    }
}
readText (["Nakov",
"SoftUni",
"Sofia",
"Bulgaria",
"SomeText",
"Stop",
"AfterStop",
"Europe",
"HelloWorld"])
