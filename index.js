
addEventListener('DOMContentLoaded',() => {
  const div = document.querySelector(".form-users")
  getUsers()
  
  const createUsersForm =  document.querySelector("#new-user-form")
  createUsersForm.addEventListener("submit",(e) => createFormHandler(e))

})

 function getUsers(){
   fetch("http://localhost:3000/users")
   .then(r => r.json())
   .then(users => users.forEach(user =>  renderUsers(user)))
  

 }
   
 function renderUsers(user){
  //  console.log(user.symptoms)
  
  //  div.className ="card"

  //  const userUl = document.createElement("ul")
  //  const userLi = document.createElement("li")
  //  userLi.innerText = `${user.name} ${user.lastname} ${user.age} ${user.gender} , Quarantined for: ${user.quarantines[0].days}  days Symptoms fever: ${user.symptoms[0].fever} cough: ${user.symptoms[0].cough} tiredness ${user.symptoms[0].tiredness} `
  //  userUl.appendChild(userLi)
  //  div.appendChild(userUl)
   
  
}

function createFormHandler(e) {
  
  e.preventDefault()  
  
  const name = document.querySelector('#input-name').value
  const lastname = document.querySelector('#input-lastname').value
  const age = document.querySelector('#input-age').value
  const gender = document.querySelector('#input-gender').value
  postFetch(name, lastname, age, gender)
}

function postFetch (name,lastname, age, gender){
  console.log(name,lastname,age,gender)
  fetch("http://localhost:3000/users", {
    method: "POST",
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify({
      name: name,
      age: age,
      lastname: lastname,
      gender: gender

    })
  })
  .then(response => response.json())
  .then(user => {
  console.log(user);
  })
}