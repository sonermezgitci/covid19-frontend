//console.log ("in this js")// confirm if we succesfully link to this.js file 
// creating a constructor to give us all the attributes copys or prototype my user object 
// i also wanna create an empty array to push all instances of "this" in to an empty array 
// const div = document.querySelector(".users")
class User {
  // this is just an object in globol scope must know about user class itself
 constructor(user){ 
   //this-> instance some of the times 
   // i am defining attributes on instances of the class 
  //  debugger
  this.id = user.id
  this.name = user.name
  this.lastname = user.lastname
  this.age = user.age
  this.gender = user.gender
  this.symptoms = user.symptoms
  this.quarantines = user.quarantines 

  // debugger
  
  User.all.push(this)
  
  
   //each new instances i am going to push it this(user"first user") to User.all = []Array
      
      //then it push user.all =[]
  // debugger 
 }

 
  renderUsers(){
    this.div = document.querySelector(".users")
    // debugger
    // console.log(user)
    this.userUl = document.createElement("tr")
    this.userLi = document.createElement("td")
    this.userLi.innerText = `Name: ${this.name} Last Name: ${this.lastname} Age: ${this.age} Gender: ${this.gender} Quarantined Start Date: ${this.quarantines[0].startdate} Quarantined End Date: ${this.quarantines[0].enddate},  Symptoms fever: ${this.symptoms[0].fever}, cough: ${this.symptoms[0].cough}, tiredness: ${this.symptoms[0].breath}, throat: ${this.symptoms[0].throat}, Runny Nose:${this.symptoms[0].nose} Others: ${this.symptoms[0].other} ` 
    this.userUl.prepend(this.userLi)
    this.div.prepend(this.userUl)  
}


// renderUsers2(){

//   this.div = document.querySelector(".users")
//   // debugger
//   // console.log(user)
//   this.userUl = document.createElement("tr")

//   this.userLi = document.createElement("td")
//   this.userLi.innerText = `${this.name} `  
//   this.userUl.appendChild(this.userLi)

//   this.userLi2 = document.createElement("td")
//   this.userLi2.innerText = `${this.lastname}  `  
//   this.userUl.appendChild(this.userLi2)

//   this.userLi3 = document.createElement("td")
//   this.userLi3.innerText = ` ${this.age}`
//   this.userUl.appendChild(this.userLi3)

//   this.div.appendChild(this.userUl)  


// }
 



}
User.all = []