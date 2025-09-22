<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>document</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>

</head>
<body>
  <div class="board" id="board">
  <img src="1.PNG" alt="">
  <img src="2.PNG" alt="">
  <img src="3.PNG" alt="">
  <img src="4.PNG" alt="">
  <img src="5.PNG" alt="">
  <img src="6.PNG" alt="">
  <img src="7.PNG" alt="">
  <img src="8.PNG" alt="">
  <img src="vide.png" alt="">
</div>
</body>
<script src="script.js"></script>
</html>

<style>
    #board {
    width: 33%;
    margin-left: 33%;
    margin-top:50px;
	font-size: 30px;
	color : rgb(62, 158, 191);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}

#regle {
	margin-bottom: 50px;
}

img {
    width: 150px;
    height: 150px;
    border-color: black;
    border-width: 2px;
    border-style: double;
    object-fit:fill;
}
</style>