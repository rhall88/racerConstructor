var data = [
  {
    name: "Vvroom",
    speed: 100,
    handling: 13
  },
  {
    name: "Lightning McQueen",
    speed: 105,
    handling: 11
  },
  {
    name: "Fast Freddie",
    speed: 110,
    handling: 9
  }
];

var racers = [];

function racer(name, speed, handling) {
  var that = this;
  this.name = name;
  this.speed = speed;
  this.handling = handling;
  this.ele = document.createElement("div");

  this.ele.innerHTML = this.name + " " + this.speed + " " + this.handling;

  this.ele.addEventListener("click", function() {
    that.increaseNumber();
  });

  document.body.appendChild(this.ele);
}

racer.prototype.increaseNumber = function() {
  this.speed = this.speed + 5;
  this.handling = this.handling - 2;
  this.ele.innerHTML = this.name + " " + this.speed + " " + this.handling;
  
  if(this.handling < 2){
    this.ele.style.border =  "2px red solid";
}
};



for (i = 0; i < data.length; i++) {
  racers.push(new racer(data[i].name, data[i].speed, data[i].handling));
 
}

racers[0].increaseNumber();