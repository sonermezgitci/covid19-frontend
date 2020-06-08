//console.log ("in this js")// confirm if we succesfully link to this.js file 
// creating a constructor to give us all the attributes copys or prototype my user object 
// i also wanna create an empty array to push all instances of "this" in to an empty array 
class User {
 constructor(user,userAttributes){
  //  debugger
  this.id = user.id
  this.name = user.name
  this.lastname = user.lastname
  this.age = user.age
  this.gender = user.gender
  User.all.push(this)
//   debugger 
 }

renderUsers(){
    // console.log(users)
    // debugger
    //  div.className ="card"
    // console.log(user)
    
    return `
    
    const userUl = document.createElement("ul")
    const userLi = document.createElement("li")
    
     userLi.innerText = ${this.name} ${this.lastname} ${this.age} ${this.gender} , Quarantined Start Date: ${this.quarantines[0].startdate}, Quarantined End Date: ${this.quarantines[0].enddate},  Symptoms fever: ${this.symptoms[0].fever}, cough: ${this.symptoms[0].cough}, tiredness: ${this.symptoms[0].breath}, throat: ${this.symptoms[0].throat}, Runny Nose:${this.symptoms[0].nose}
     userUl.appendChild(userLi)
    // div.innerText = ""
    div.appendChild(userUl)`;
    
    
     
    
  }

 
}
User.all = []