document.addEventListener("keydown", function (event) {
    let note = event.key.toUpperCase();
    if ("A" == note ||
        "S" == note ||
        "D" == note ||
        "F" == note ||
        "G" == note ||
        "H" == note ||
        "J" == note ||
        "W" == note ||
        "E" == note ||
        "T" == note ||
        "Y" == note ||
        "U" == note) {
        let fName = "sounds/" + note + ".mp3";
        let audio = new Audio(fName);
        audio.play();
    }
    console.log("The '" + event.key + "' key is pressed")
})