addEventListener('DOMContentLoaded',() => {
 
  getUsers() 

  const createUsersForm =  document.querySelector("#new-user-form")
  createUsersForm.addEventListener("submit",(e) => createFormHandler(e))
  let displayNumberDiv = document.querySelector("#display-number")
  
  function getUsers(){ 
    fetch("http://localhost:3000/users") 
    .then(r => r.json()) 
    .then(users => users.forEach(user => {  

      let newUser = new User(user)
      newUser.renderUsers()
      symptomNumber(user.symptoms,user)
      
    

  }))
}


function createFormHandler(e) {
  
  e.preventDefault()  
 
  const name = document.querySelector('#input-name').value
  const lastname = document.querySelector('#input-lastname').value
  const age = document.querySelector('#input-age').value
  const gender = document.querySelector('.gender').value
  const feverYes = document.querySelector("#feverYes").checked
  const coughYes = document.querySelector("#coughYes").checked
  const breathYes = document.querySelector("#breathYes").checked
  const throatYes = document.querySelector("#throatYes").checked
  const noseYes = document.querySelector("#noseYes").checked
  const other = document.querySelector("#input-description").value
  const startDate = document.querySelector("#start").value
  const endDate = document.querySelector("#end").value
  
  const bodyData = {
   name: name,
   lastname: lastname,
   gender: gender,
   age:age,

   symptoms_attributes:[{
  
    
    fever: feverYes ? 'Yes': 'No' ,
    cough: coughYes ?  'Yes': 'No' ,
    breath: breathYes ? 'Yes': 'No',
    throat: throatYes ? 'Yes': 'No',
    nose: noseYes ? 'Yes': 'No',
    other: other ? 'Yes':'No'
    
  
    }
     
   ],
   quarantines_attributes:[{
     startdate: startDate,
     enddate: endDate
   }],

  }
  postFetchUser(bodyData)  //phase 2 execution 
}
function postFetchUser (bodyData){ // phase 1  hoisting complilation part 
// console.log(bodyData)


  fetch("http://localhost:3000/users", {
    method: "POST",
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify(bodyData) // goes my controller to create a new user 
  })
  .then(response => response.json()) 
  .then(user => { // gettin user from my back end to  my front end 
  // console.log(user); 
let newUser = new User(user)
newUser.renderUsers() 
 symptomNumber(bodyData.symptoms_attributes,newUser)
  
  })
}
function symptomNumber(symptoms,user){
  // console.log(symptoms)
    let yesCounter = 0 ///
    for(let value in symptoms[0]){
      
      if(symptoms[0][value]=== 'Yes'){
       yesCounter ++

    }

    }
 console.log(Math.floor(yesCounter/(Object.keys(symptoms[0]).length)*100)) 
  
  displayNumberDiv.innerHTML =`${user.name} ${user.lastname};  May have been infected with Virus `+ Math.floor(yesCounter/(Object.keys(symptoms[0]).length)*100)+ "%"
 

  }
})











