let dragged = null;
let offsetX = 0, offsetY = 0;

window.addEventListener("load", () => {
  
  document.querySelectorAll(".draggable").forEach((el, index) => {
    const dropzone = document.querySelector(`.dropzone${index + 1}`);
    if (dropzone) {
      const dropRect = dropzone.getBoundingClientRect();
      const imgRect = el.getBoundingClientRect();

      const dropCenterX = dropRect.left + dropRect.width / 2;
      const dropCenterY = dropRect.top + dropRect.height / 2;

      const newLeft = dropCenterX - imgRect.width / 2 + window.scrollX;
      const newTop = dropCenterY - imgRect.height / 2 + window.scrollY;

      el.style.left = `${newLeft}px`;
      el.style.top = `${newTop}px`;
    }
  });
});

document.querySelectorAll(".draggable").forEach(el => {
  el.addEventListener("mousedown", (e) => {
    dragged = el;

    const rect = el.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;

    el.style.cursor = "grabbing";

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  });
});

function onMouseMove(e) {
  if (!dragged) return;

  dragged.style.left = (e.clientX - offsetX) + "px";
  dragged.style.top = (e.clientY - offsetY) + "px";
}

function onMouseUp() {
  if (dragged) {
    dragged.style.cursor = "grab";
    const draggedRect = dragged.getBoundingClientRect();

    let droppedInZone = false;

    document.querySelectorAll('[class^="dropzone"]').forEach(zone => {
      const zoneRect = zone.getBoundingClientRect();

      const isinZone = 
        draggedRect.left < zoneRect.right && 
        draggedRect.right > zoneRect.left &&
        draggedRect.top < zoneRect.bottom &&
        draggedRect.bottom > zoneRect.top;

      if (isinZone && !droppedInZone) {
        console.log(`${dragged.id} dropped in ${zone.className}`);
       
        const dropCenterX = zoneRect.left + zoneRect.width / 2;
        const dropCenterY = zoneRect.top + zoneRect.height / 2;

        const newLeft = dropCenterX - dragged.offsetWidth / 2 + window.scrollX;
        const newTop = dropCenterY - dragged.offsetHeight / 2 + window.scrollY;

        dragged.style.left = `${newLeft}px`;
        dragged.style.top = `${newTop}px`;

        droppedInZone = true; 
      }
    });
  }

  dragged = null;
  document.removeEventListener("mousemove", onMouseMove);
  document.removeEventListener("mouseup", onMouseUp);
}

document.getElementById("buttonreset").addEventListener("click", () => {
  document.querySelectorAll(".draggable").forEach((el, index) => {
    const dropzone = document.querySelector(`.dropzone${index + 1}`);
    if (dropzone) {
      const zoneLeft = dropzone.offsetLeft;
      const zoneTop = dropzone.offsetTop;

      const newLeft = zoneLeft + (dropzone.offsetWidth - el.offsetWidth) / 2;
      const newTop = zoneTop + (dropzone.offsetHeight - el.offsetHeight) / 2;

      el.style.left = `${newLeft}px`;
      el.style.top = `${newTop}px`;
    }
  });
});

document.getElementById("randomize").addEventListener("click", () => {
  const images = Array.from(document.querySelectorAll(".draggable"));
  const zones = Array.from(document.querySelectorAll('[class^="dropzone"]'));

  const shuffledZones = [...zones].sort(() => Math.random() - 0.5);

  images.forEach((img, i) => {
    const zone = shuffledZones[i];
    if (zone) {
      const zoneLeft = zone.offsetLeft;
      const zoneTop = zone.offsetTop;

      const newLeft = zoneLeft + (zone.offsetWidth - img.offsetWidth) / 2;
      const newTop = zoneTop + (zone.offsetHeight - img.offsetHeight) / 2;

      img.style.left = `${newLeft}px`;
      img.style.top = `${newTop}px`;
    }
  });
});

document.getElementById("verify").addEventListener("click", checkById);

function checkById() {
  let allCorrect = true;

  document.querySelectorAll(".draggable").forEach(img => {
    const imgId = img.id;
    const expectedNumber = imgId.replace("imageContainer", ""); 

    const expectedDropzone = document.querySelector(`.dropzone${expectedNumber}`);
    const dropzoneRect = expectedDropzone.getBoundingClientRect();
    const imgRect = img.getBoundingClientRect();
    const imgCenterX = imgRect.left + imgRect.width / 2;
    const imgCenterY = imgRect.top + imgRect.height / 2;

    const isInside = (
      imgCenterX >= dropzoneRect.left &&
      imgCenterX <= dropzoneRect.right &&
      imgCenterY >= dropzoneRect.top &&
      imgCenterY <= dropzoneRect.bottom
    );

    if (!isInside) {
      allCorrect = false;
      console.log(`${imgId} n'est pas dans sa bonne zone (dropzone${expectedNumber})`);
    }
  });

  if (allCorrect) {
    alert("Vous avez gagné !");
  } else {
    alert("Vous avez perdu.");
  }
}




