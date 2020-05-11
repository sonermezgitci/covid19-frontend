
addEventListener('DOMContentLoaded',() => {
  const div = document.querySelector(".form-users")
  getUsers()
  


 function getUsers(){
   fetch("http://localhost:3000/users")
   .then(r => r.json())
   .then(users => users.forEach(user =>  renderUsers(user)))
 }
   
 function renderUsers(user){
   console.log(user)
  
  //  div.className ="card"

   const userUl = document.createElement("ul")
   const userLi = document.createElement("li")
   userLi.innerText = `${user.name}, Quarantined for: ${user.quarantines[0].days} days Symptoms fever: ${user.symptoms[0].fever}`
   userUl.appendChild(userLi)
   div.appendChild(userUl)
   
  
   
   

 }
})