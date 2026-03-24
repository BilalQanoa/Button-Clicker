function toggleLogin(element) {
    if (element.innerText === "Login") {
        element.innerText = "Logout";
        element.style.backgroundColor = "red"
    } else {
        element.innerText = "Login";
        element.style.backgroundColor = "blue"
    }
}

function hideElement(element) {
    element.remove();
}

function likeNinja() {
    alert("Ninja was liked");
}