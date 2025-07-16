/*Name this external file gallery.js*/

function upDate(previewPic) {
    let imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    imageDiv.innerHTML = previewPic.alt;
    console.log("onmouseover triggered");
}

function unDo() {
    let imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = "none";
    imageDiv.innerHTML = "Hover over an image below to display here.";
    console.log("onmouseout or onblur triggered");
}

function focusUpdate(previewPic) {
    let imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    imageDiv.innerHTML = previewPic.alt;
    console.log("onfocus triggered");
}

function addTabFocus() {
    let images = document.getElementsByClassName('preview');
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute('tabindex', '0');
        images[i].addEventListener('focus', function() {
            focusUpdate(images[i]);
        });
        images[i].addEventListener('blur', function() {
            unDo();
        });
        images[i].addEventListener('mouseover', function() {
            upDate(images[i]);
        });
        images[i].addEventListener('mouseout', function() {
            unDo();
        });
    }
    console.log("Tab focus attributes and event listeners added");
}

window.onload = addTabFocus;