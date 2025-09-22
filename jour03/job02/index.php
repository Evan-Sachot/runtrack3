<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>document</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>

</head>
<body>
  <div id="imagebox" >
   <div class="draggable" id="imageContainer1" data-start-top="50" data-start-left="50">
    <img src="arc1.png" alt="img1">
  </div>
  <div class="draggable" id="imageContainer2" data-start-top="50" data-start-left="160">
    <img src="arc2.png" alt="img2">
  </div>
  <div class="draggable" id="imageContainer3" data-start-top="50" data-start-left="270">
    <img src="arc3.png" alt="img3">
  </div>
  <div class="draggable" id="imageContainer4" data-start-top="50" data-start-left="380">
    <img src="arc4.png" alt="img4">
  </div>
  <div class="draggable" id="imageContainer5" data-start-top="50" data-start-left="490">
    <img src="arc5.png" alt="img5">
  </div>
  <div class="draggable" id="imageContainer6" data-start-top="50" data-start-left="600">
    <img src="arc6.png" alt="img6">
  </div>
  <div class="dropzone1" id="1"></div>
  <div class="dropzone2" id="2" ></div>
  <div class="dropzone3" id="3"></div>
  <div class="dropzone4" id="4"></div>
  <div class="dropzone5" id="5"></div>
  <div class="dropzone6"id="6"></div>
  </div>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
<div id="buttonbox" style="display: inline-flex">
<button id="buttonreset">reset</button>
</div>
<br>
<button id="randomize">randomize</button>
<button id="verify">verifier</button>
<script src="script.js"></script>
</body>
</html>
<style>
  .draggable {
    position: absolute;
    cursor: grab;
     z-index: 10;
  }
  [class^="dropzone"] {
  width: 100px; 
    height: 300px;
  border: 2px dashed gray;
  position: absolute;
  display: inline-flex;
  z-index: 1;
}

  

  img {
    width: 100px; 
    height: auto;
    user-drag: none;
    -webkit-user-drag: none;
    pointer-events: none; 
  }

  .draggable img {
    pointer-events: none; 
  }
  .dropzone1 { top: 200px; left: 50px; }
.dropzone2 { top: 200px; left: 160px; }
.dropzone3 { top: 200px; left: 270px; }
.dropzone4 { top: 200px; left: 380px; }
.dropzone5 { top: 200px; left: 490px; }
.dropzone6 { top: 200px; left: 600px; }
</style>
