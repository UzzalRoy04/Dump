function showBox() {
    var box = document.getElementById("messageBox");
    box.classList.remove("hidden"); // Remove the 'hidden' class to display the box
}

function checkMessage() {
    var input = document.getElementById("messageInput").value;
    var messageContainer = document.getElementById("messageContainer");
    if (input.toLowerCase() === "sorry") {
        messageContainer.innerHTML = "<p style='color: #642DCE;'>IT'S OK. I LOVE YOU <span style='color: red;'>&lt;3</span></p>";
    } else {
        messageContainer.innerHTML = "<p style='color: #642DCE;'>Go away!</p>";
    }
}
