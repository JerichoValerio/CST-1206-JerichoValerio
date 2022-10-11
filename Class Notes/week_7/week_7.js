//this keyword

//this keyword refers to the current object that's ----> name

var name = 'Daniel'

let obj = {
  name: 'Jericho',
  getName: () => {
    console.log(this.name)
  }
}

obj.getName()

// main difference on this keyword

let obj2 = {
  name: 'Jericho',
  getName: () => {
    console.log(this.name)
  }
}

obj2.getName()

var game = 'cod'
let obj2 = {
  game: 'val',
  getGame: () => {
    console.log(this.game)
  }
}

obj2.getGame()


var city = {

}
let student2 = {
  name: "dan",
  college: 'vcc',
  city: "Tronto",
  addy: {
    city: 'van',
    province: 'bc',
    getCity: function () {
      console.log(this.city)
    }
  }
}
student.addy.getCity(); 



// hositing 
console.log(collegeName); //undefined

var collegeName = "VCC";

