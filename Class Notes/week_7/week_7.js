//this keyword

//this keyword refers to the current object that's ----> name

var name = 'Daniel'

let obj = {
  name: 'Jericho',
  getName: function () {
    console.log(this.name)
  }
}

obj.getName()
