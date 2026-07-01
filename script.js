function upDate(previewPic) {

    console.log("Mouse Over");
    console.log(previewPic.alt);
    console.log(previewPic.src);

    let imageDiv = document.getElementById("image");

    imageDiv.innerHTML = previewPic.alt;

    imageDiv.style.backgroundImage =
        "url('" + previewPic.src + "')";

}

function unDo() {

    let imageDiv = document.getElementById("image");

    imageDiv.innerHTML =
        "Hover over an image below to display here.";

    imageDiv.style.backgroundImage = "url('')";

}

// Runs when the page finishes loading
function addTabFocus() {

    console.log("Page Loaded");

    let images = document.querySelectorAll("img");

    for (let i = 0; i < images.length; i++) {

        images[i].setAttribute("tabindex", "0");

    }

}