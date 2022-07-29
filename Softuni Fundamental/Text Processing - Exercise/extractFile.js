function extractFile(input)  {
    let arrfromInput = input.split("\\")
    let file = arrfromInput[arrfromInput.length-1]
    let splitFile = file.split(".")
    let exstension = splitFile.pop()
    let name = splitFile.join(".")
    console.log("File name:", name)
    console.log("File extension:", exstension)
}
extractFile('C:\\Internal\\training-internal\\Template.bak.pptx')