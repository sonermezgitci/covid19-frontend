const div = document.querySelector(".users")
class User {
 constructor(user){ 
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
  // debugger 
 }

  renderUsers(){
    this.div = document.querySelector(".users")
    // debugger
    this.userUl = document.createElement("tr")
    this.userLi = document.createElement("td")
    this.userLi.innerText = `Name: ${this.name} Last Name: ${this.lastname} Age: ${this.age} Gender: ${this.gender} Quarantined Start Date: ${this.quarantines[0].startdate} Quarantined End Date: ${this.quarantines[0].enddate},  Symptoms fever: ${this.symptoms[0].fever}, cough: ${this.symptoms[0].cough}, tiredness: ${this.symptoms[0].breath}, throat: ${this.symptoms[0].throat}, Runny Nose:${this.symptoms[0].nose} Others: ${this.symptoms[0].other} ` 
    this.userUl.prepend(this.userLi)
    this.div.prepend(this.userUl)  
}

}
User.all = []