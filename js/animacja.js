const canvas = document.getElementById('animacja');
const ctx = canvas.getContext('2d');

let CANVAS_WIDTH = canvas.width = 1200;
let CANVAS_HEIGHT = canvas.height = 500;

let speed = parseFloat(document.getElementById("szybkosc").value);
let dx = 0.0;
let dy = 0.0;
let fast = 1;
let szer = parseFloat(document.getElementById("wielkosc").value);
let wys = parseFloat(document.getElementById("wielkosc").value);
let x = CANVAS_WIDTH / 2 - szer / 2;
let y = CANVAS_HEIGHT / 2 - wys / 2;
let xKoniec = x + szer;
let yKoniec = y + wys;
ctx.fillStyle = "black";

animate();

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.fillRect(x, y, szer, wys);

  //zmiana koloru kwadratu
  if (document.getElementById("czarny").checked) {
    ctx.fillStyle = "black";
  }
  if (document.getElementById("zielony").checked) {
    ctx.fillStyle = "green";
  }
  if (document.getElementById("rozowy").checked) {
    ctx.fillStyle = "rgb(255,125,200)";
  }
  //zmiana koloru tła
  if (document.getElementById("blekit").checked) {
    document.getElementById("animacja").style.backgroundColor = "lightskyblue";
  }
  if (document.getElementById("bialy").checked) {
    document.getElementById("animacja").style.backgroundColor = "white";
  }
  if (document.getElementById("szare").checked) {
    document.getElementById("animacja").style.backgroundColor = "lightgrey";
  }

  x = x + dx * speed;
  y = y + dy * speed;
  xKoniec = x + szer;
  yKoniec = y + wys;

  document.addEventListener('keydown', ruchPostaci, false);
  function ruchPostaci(e) {
    if (e.keyCode == 37) {

      dx = -fast;
    }
    if (e.keyCode == 39) {
      dx = fast;
    }
    if (e.keyCode == 38) {
      dy = - fast;
    }
    if (e.keyCode == 40) {
      dy = fast;
    }
    if (e.keyCode == 32) {
      dy = 0;
      dx = 0;
    }
  }

  //ograniczenia wychodzenia poza canvas
  if ((x >= CANVAS_WIDTH - szer) || (x <= 0)) {
    dx = -dx;
    if (x < 0) {
      x = 0;
    }
    if (x > CANVAS_WIDTH - szer) {
      x = CANVAS_WIDTH - szer;
    }
  }
  if ((y >= CANVAS_HEIGHT - wys) || (y <= 0)) {
    dy = -dy;
    if (y < 0) {
      y = 0;
    }
    if (y > CANVAS_HEIGHT - szer) {
      y = CANVAS_HEIGHT - szer;
    }
  }
  requestAnimationFrame(animate);
}

function up() {
  dy = - fast;
}
function left() {
  dx = -fast;
}
function stop() {
  dx = 0;
  dy = 0;
}
function right() {
  dx = fast;
}
function down() {
  dy = fast;
}

//ustalenie wielkosci kwadratu
function wielkoscPola() {
  szer = parseFloat(document.getElementById("wielkosc").value);
  wys = parseFloat(document.getElementById("wielkosc").value);
  document.getElementById("wyswietlWielkosc").innerHTML = szer
}

// odczyt wartosci prędkości
function predkosc() {
  speed = parseInt(document.getElementById("szybkosc").value);
  document.getElementById("wyswietlPredkosc").innerHTML = speed;
}


//reset wszelkich wartosci (po zmianach) - początek animacji
function reset() {
  wielkoscPola();
  predkosc();
  x = CANVAS_WIDTH / 2 - (szer / 2);
  y = CANVAS_HEIGHT / 2 - (wys / 2);
  dx = 0;
  dy = 0;
  fast = 1;
}

