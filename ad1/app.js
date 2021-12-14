let number;
function Song() {
    for (number = 99; number >= 0; number--) {
        let songLine = document.getElementById('songLine')
        let tag = document.createElement("p");
        if (number == 0) {
            let text = document.createTextNode("No more bottles of beer on the wall, no more bottles of beer\n" +
                "Go to the store and buy some more, 99 bottles of beer on the wall");
            tag.appendChild(text)
            songLine.appendChild(tag)
        } else if (number == 1) {
            let text = document.createTextNode(number + " bottle of beer on the wall, " + number + " bottle of beer\n" +
                "Take one down and pass it around, no more bottles of beer on the wall");
            tag.appendChild(text)
            songLine.appendChild(tag)
        } else {
            let text = document.createTextNode(number + " bottles of beer on the wall, " + number + " bottles of beer\n" +
                "Take one down and pass it around, " + (number - 1) + " bottles of beer on the wall");
            tag.appendChild(text)
            songLine.appendChild(tag)
        }
    }
}