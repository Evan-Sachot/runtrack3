  const board = [1, 2, 3, 4, 5, 6, 7, 8, "V"];
  const images = document.getElementsByTagName("img");


  for (let i = 0; i < board.length; i++) {
    images[i].id = i.toString();
    if (board[i] === "V") {
      images[i].src = "vide.png";
    } else {
      images[i].src = board[i] + ".PNG";
    }
  }

  for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", mouvement);
  }

  function mouvement(evt) {
    const id_image = parseInt(this.id);
    const source_image = this.getAttribute("src");

    const directions = [
      id_image - 3, // en haut
      id_image + 3, // en bas
      id_image - 1, // gauche
      id_image + 1  // droite
    ];

    for (let i = 0; i < directions.length; i++) {
      let target = directions[i];
      if (target < 0 || target > 8) continue;
      if ((i === 2 && id_image % 3 === 0) || (i === 3 && (id_image + 1) % 3 === 0)) continue;

      let targetImg = document.getElementById(target.toString());
      if (targetImg.getAttribute("src") === "vide.png") {
        targetImg.src = source_image;
        this.src = "vide.png";
        break;
      }
    }
  }