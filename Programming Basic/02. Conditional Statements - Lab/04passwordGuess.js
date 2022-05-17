function passwordGuess (input) {
    let password = input;
    let correctpassword = 's3cr3t!P@ssw0rd';

if (password == correctpassword) {
    console.log ("Welcome");
}   else {
        console.log ("Wrong password!");
    }
}
passwordGuess (["s3cr3t!P@ssw0rd"]);