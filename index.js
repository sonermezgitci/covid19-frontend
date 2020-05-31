addEventListener('DOMContentLoaded',() => {
  
  
  const createUsersForm =  document.querySelector("#new-user-form")
  createUsersForm.addEventListener("submit",(e) => createFormHandler(e))



// function getUsers(){
//   fetch("http://localhost:3000/users")
//   .then(r => r.json())
//   .then(users => users.forEach(user =>  renderUsers(user)))
// }

const div = document.querySelector(".users")
// getUsers() //its for get users on the DOM for  Fetch Read Test! 
function renderUsers(user){
  // console.log(users)
  
  //  div.className ="card"
  console.log(user)

   const userUl = document.createElement("ul")
   const userLi = document.createElement("li")
   userLi.innerText = `${user.name} ${user.lastname} ${user.age} ${user.gender} , Quarantined Start Date: ${user.quarantines[0].startdate}, Quarantined End Date: ${user.quarantines[0].enddate},  Symptoms fever: ${user.symptoms[0].fever}, cough: ${user.symptoms[0].cough}, tiredness: ${user.symptoms[0].breath}, throat: ${user.symptoms[0].throat}, Runny Nose:${user.symptoms[0].nose}`
   userUl.appendChild(userLi)
  div.innerHTML = ""
  div.appendChild(userUl)
  
   
  
}

function createFormHandler(e) {
  
  e.preventDefault()  
  
  const name = document.querySelector('#input-name').value
  const lastname = document.querySelector('#input-lastname').value
  const age = document.querySelector('#input-age').value
  const gender = document.querySelector('#input-gender').value
  const feverYes = document.querySelector("#feverYes").checked
  const coughYes = document.querySelector("#coughYes").checked
  const breathYes = document.querySelector("#breathYes").checked
  const throatYes = document.querySelector("#throatYes").checked
  const noseYes = document.querySelector("#noseYes").checked
  const other = document.querySelector("#input-description").value
  const startDate = document.querySelector("#start").value
  const endDate = document.querySelector("#end").value
  // const numberSymptoms = 
  const bodyData = {
   name: name,
   lastname: lastname,
   gender: gender,
   age:age,

   symptoms_attributes:[{
  
    
    fever: feverYes ? "Yes" : "No",
    cough: coughYes ?  "Yes" : "No",
    breath: breathYes ? "Yes" : "No",
    throat: throatYes ? "Yes" : "No",
    nose: noseYes ? "Yes" : "No",
    other: other
  
    }
     
   ],
   quarantines_attributes:[{
     startdate: startDate,
     enddate: endDate
   }]
    
 

  }
  postFetchUser(bodyData)
}

function postFetchUser (bodyData){
  //build my body object outside of my fetch 

  console.log(bodyData)


  fetch("http://localhost:3000/users", {
    method: "POST",
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify(bodyData)
  })
  .then(response => response.json())
  .then(user => {
  console.log(user);
  const bodyData = user
  renderUsers(user)
  })
}
})







