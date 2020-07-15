const div = document.querySelector(".users")
class User {
 constructor(user){ 

  this.id = user.id
  this.name = user.name
  this.lastname = user.lastname
  this.age = user.age
  this.gender = user.gender
  this.symptoms = user.symptoms
  this.quarantines = user.quarantines 
  
  
  User.all.push(this)
  
 }

static renderUsers(user){

  this.div = document.querySelector(".users")
  // debugger
  this.userUl = document.createElement("tr")
  this.userLi = document.createElement("td")
  this.userLi.innerText = `Name: ${user.name} Last Name: ${user.lastname} Age: ${user.age} Gender: ${user.gender} Quarantined Start Date: ${user.quarantines[0].startdate} Quarantined End Date: ${user.quarantines[0].enddate},  Symptoms fever: ${user.symptoms[0].fever}, cough: ${user.symptoms[0].cough}, tiredness: ${user.symptoms[0].breath}, throat: ${user.symptoms[0].throat}, Runny Nose:${user.symptoms[0].nose} Others: ${user.symptoms[0].other} ` 
  this.userUl.append(this.userLi)
  this.div.append(this.userUl)  
 } 

}
User.all = []
