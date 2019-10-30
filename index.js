var currentpos = {
  x: 0,
  y: 0
};

var makesantafly = function() {
  var santael = document.querySelector(".santa");
  var scrollY = window.pageYOffset;
  var viewportY = document.documentElement.clientHeight;
  var viewportX = document.documentElement.clientWidth;

  var startpos = {
    x: -400,
    y: rndom(scrollY, scrollY + viewportY)
  };

  var endpos = {
    x: viewportX,
    y: rndom(scrollY, scrollY + viewportY)
  };

  santael.classList.remove("hidden");

  var dx = endpos.x - startpos.x;
  var dy = endpos.y - startpos.y;
  var angle = Math.atan2(dy, dx);
  var magnitude = 4.0;
  var velX = Math.cos(angle) * magnitude;
  var velY = Math.sin(angle) * magnitude;

  currentpos = startpos;
  var refreshIntervalId = setInterval(function() {
    mX = 200;
    mY = 100;
    currentpos.x = currentpos.x + velX;
    currentpos.y = currentpos.y + velY;
    santael.style.top = currentpos.y + "px";
    santael.style.left = currentpos.x + "px";

    if (currentpos.x > endpos.x) {
      clearInterval(refreshIntervalId);
      santael.classList.add("hidden");
      currentpos = {
        x: 0,
        y: 0
      };
    }
  }, 6);
};

var rndom = function(start, end) {
  return Math.floor(Math.random() * end) + start;
};

cheet("s a n t a", makesantafly);

// https://jsfiddle.net/loktar/UdyN6/
(function() {
  var requestAnimationFrame =
    window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function(callback) {
      window.setTimeout(callback, 1000 / 60);
    };
  window.requestAnimationFrame = requestAnimationFrame;
})();

var flakes = [],
  canvas = document.getElementById("canvas"),
  ctx = canvas.getContext("2d"),
  flakeCount = 200,
  mX = -100,
  mY = -100;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function snow() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (var i = 0; i < flakeCount; i++) {
    var flake = flakes[i],
      x = mX,
      y = mY,
      minDist = 150,
      x2 = flake.x,
      y2 = flake.y;

    var dist = Math.sqrt(
        (x2 - x - currentpos.x) * (x2 - x - currentpos.x) +
          (y2 - y - currentpos.y) * (y2 - y - currentpos.y)
      ),
      dx = x2 - x - currentpos.x,
      dy = y2 - y - currentpos.y;

    if (dist < minDist) {
      var force = minDist / (dist * dist),
        xcomp = (x - x2 - currentpos.x) / dist,
        ycomp = (y - y2 - currentpos.y) / dist,
        deltaV = force / 2;

      flake.velX -= deltaV * xcomp;
      flake.velY -= deltaV * ycomp;
    } else {
      flake.velX *= 0.98;
      if (flake.velY <= flake.speed) {
        flake.velY = flake.speed;
      }
      flake.velX += Math.cos((flake.step += 0.05)) * flake.stepSize;
    }

    ctx.fillStyle = "rgba(255,255,255," + flake.opacity + ")";
    flake.y += flake.velY;
    flake.x += flake.velX;

    if (flake.y >= canvas.height || flake.y <= 0) {
      reset(flake);
    }

    if (flake.x >= canvas.width || flake.x <= 0) {
      reset(flake);
    }

    ctx.beginPath();
    ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
    ctx.fill();
  }
  requestAnimationFrame(snow);
}

function reset(flake) {
  flake.x = Math.floor(Math.random() * canvas.width);
  flake.y = 0;
  flake.size = Math.random() * 3 + 2;
  flake.speed = Math.random() * 1 + 0.5;
  flake.velY = flake.speed;
  flake.velX = 0;
  flake.opacity = Math.random() * 0.5 + 0.3;
}

function init() {
  for (var i = 0; i < flakeCount; i++) {
    var x = Math.floor(Math.random() * canvas.width),
      y = Math.floor(Math.random() * canvas.height),
      size = Math.random() * 3 + 2,
      speed = Math.random() * 1 + 0.5,
      opacity = Math.random() * 0.5 + 0.3;

    flakes.push({
      speed: speed,
      velY: speed,
      velX: 0,
      x: x,
      y: y,
      size: size,
      stepSize: Math.random() / 30,
      step: 0,
      angle: 180,
      opacity: opacity
    });
  }

  snow();
}

canvas.addEventListener("mousemove", function(e) {
  (mX = e.clientX), (mY = e.clientY);
});

init();
