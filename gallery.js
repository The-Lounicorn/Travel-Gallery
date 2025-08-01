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

function adjustLayout() {
  const screenWidth = window.innerWidth;

  // Mobile-first default (already styled with CSS)
  if (screenWidth >= 768) {
    // Tablet layout tweaks
    document.body.classList.add('tablet-layout');
    document.body.classList.remove('mobile-layout');
  }

  if (screenWidth >= 1024) {
    // Desktop layout tweaks
    document.body.classList.add('desktop-layout');
    document.body.classList.remove('tablet-layout');
  }

  if (screenWidth < 768) {
    // Keep mobile layout
    document.body.classList.add('mobile-layout');
    document.body.classList.remove('desktop-layout');
  }
}

// Trigger on page load and resize
window.addEventListener('load', adjustLayout);
window.addEventListener('resize', adjustLayout);
window.onload = addTabFocus;
