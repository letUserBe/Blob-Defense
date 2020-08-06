//Zombie Defense Test

let score = []
let zombies = []

function preload() {
  zombieimg = loadImage('chibiblueslime.png')
  bgimg = loadImage('blobsylvania.png')
  heroimg = loadImage('catidle0.png')
}

function setup() {
  createCanvas(750, 750);
  for (let i = 0; i <= 5; i++) {
    let z = new Zombie(120 / 2, 100 / 2, 50)
    zombies.push(z)
  }
  hero = new Hero()
}

function draw() {
  textSize(20)
  background(200)
  imageMode(CENTER)
  image(bgimg, width / 2, height / 2, width, height)
  hero.show()
  for (let i = 0; i <= 5; i++) {
    zombies[i].show()
    zombies[i].mining()
    zombies[i].move()
  }
  // noFill()
  // stroke(255)
  // fill(255)
  // triangle(width / 2, height / 2 - 15, width / 2 - 10, height / 2 + 10, width / 2 + 10, height / 2 + 10)
  // noFill()
  // noStroke()

  // KeepScore()
  // fill(255)
  // textAlign(RIGHT)
  // text('Score: ' + score.length, width - 10, 35)
  // noFill()
}

function KeepScore() {
  // print(score.length)
}

class Zombie {

  constructor(w, h, r) {
    this.pos = createVector(random(50, width - 50), random(-50), r)
    this.vel = createVector(0, 1)
    // this.acel = p5.Vector.random2D()
    // this.x = this.pos.x
    // this.y = this.pos.y
    this.w = w
    this.h = h
    this.r = r
    // this.weight = int(random(0.5, 10))
    // this.length = int(random(0.5, 48))
    this.namearray = ['James', 'John', 'Robert', 'Michael', 'William', 'David', 'Richard', 'Joseph', 'Thomas', 'Charles', 'Christopher', 'Daniel', 'Matthew', 'Anthony', 'Donald', 'Mark', 'Paul', 'Steven', 'Andrew', 'Kenneth', 'Joshua', 'George', 'Kevin', 'Brian', 'Edward', 'Ronald', 'Timothy', 'Jason', 'Jeffrey', 'Ryan', 'Jacob', 'Gary', 'Nicholas', 'Eric', 'Stephen', 'Jonathan', 'Larry', 'Justin', 'Scott', 'Brandon', 'Frank', 'Benjamin', 'Gregory', 'Samuel', 'Raymond', 'Patrick', 'Alexander', 'Jack', 'Dennis', 'Jerry', 'Tyler', 'Aaron', 'Jose', 'Henry', 'Douglas', 'Adam', 'Peter', 'Nathan', 'Zachary', 'Walter', 'Kyle', 'Harold', 'Carl', 'Jeremy', 'Keith', 'Roger', 'Gerald', 'Ethan', 'Arthur', 'Terry', 'Christian', 'Sean', 'Lawrence', 'Austin', 'Joe', 'Noah', 'Jesse', 'Albert', 'Bryan', 'Billy', 'Bruce', 'Willie', 'Jordan', 'Dylan', 'Alan', 'Ralph', 'Gabriel', 'Roy', 'Juan', 'Wayne', 'Eugene', 'Logan', 'Randy', 'Louis', 'Russell', 'Vincent', 'Philip', 'Bobby', 'Johnny', 'Bradley']
    this.name = random(this.namearray)
    this.minetext1 = 'Click or Press the zombie to LASERCAT.'
    this.minetext2 = ' '
    this.tintcolr = 255
    this.tintcolg = 255
    this.tintcolb = 255
    this.tintcola = 255
    this.hitpoints = 100
    this.hptextsize = 20
    this.zombiekilltextpos = createVector(this.pos.x, this.pos.y)
  }

  show() {
    fill(100)
    imageMode(CENTER)
    tint(this.tintcolr, this.tintcolg, this.tintcolb, this.tintcola)
    image(zombieimg, this.pos.x, this.pos.y, this.w, this.h)
    noTint()
    noStroke()
    fill(255)
    textAlign(CENTER)
    textSize(this.hptextsize)

    text(this.hitpoints, this.pos.x, this.pos.y + (this.h / 2) + 15)
  }

  move() {
    // print(this.pos.x)
    // p5.Vector.add(this.vel,this.acel)
    // this.vel.add(this.acel)
    // this.vel.limit(4)
    this.vel.setMag(2)
    this.pos.add(this.vel)
    // this.x = this.pos.x
    // this.y = this.pos.y
    // this.pos.x += 1
  }

  mining() {

    // if (mouseIsPressed && dist(mouseX, mouseY, this.pos.x, this.pos.y) <= this.r / 2) {
      if (dist(mouseX, mouseY, this.pos.x, this.pos.y) <= this.r / 2) {
      if (this.pos.y >= -10) {
        stroke(0, 255, 0)
        strokeWeight(random(1, 10))
        line(this.pos.x, this.pos.y, hero.pos.x + 15, height - 70)
        line(this.pos.x, this.pos.y, hero.pos.x - 15, height - 70)
        strokeWeight(1)
        noStroke()
        this.hitpoints -= 5
        this.tintcolg -= 5
        this.tintcolb -= 5
        this.tintcola -= 2
        this.h -= 1.1
        this.w -= 1
      }
      this.hptextsize -= .1
      if (this.hitpoints <= 0 ) {
        score.push(1)
        // this.minetext1 = 'You killed a zombie.'
        // this.minetext2 = 'Its name was ' + this.name + '.'
        this.pos.x = random(50, width - 50)
        this.pos.y = random(-100, 0)
        this.w = 120 / 2
        this.h = 100 / 2
        this.name = random(this.namearray)
        // this.weight = int(random(10, 32))
        this.tintcolr = 255
        this.tintcolg = 255
        this.tintcolb = 255
        this.tintcola = 255
        this.hitpoints = 100
        this.hptextsize = 20
      }
    }
      if(this.pos.y>= height+55){
       this.pos.y = -100 
        // print('test')
      }
    textAlign(CENTER)
    // text(this.minetext1, width / 2, height - 50)
    // text(this.minetext2, width / 2, height - 20)
  }
}

class Hero {
  constructor() {
    this.pos = createVector(width / 2, height - 70)
  }
  show() {
    image(heroimg, this.pos.x, this.pos.y, 135.5, 118.5)
  }
}

// function mousePressed(){
// print('mouse test')  
//     let x = mouseX
//     let y = mouseY
//   for(let i=0;i<30;i++){
//    ellipse(x,y,20)
//     x+=1
//   }
// }