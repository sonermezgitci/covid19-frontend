
addEventListener('DOMContentLoaded',() => {
  getUsers() 
  const userDiv = document.querySelector(".users")
  
 
  const createUsersForm =  document.querySelector("#new-user-form")
  createUsersForm.addEventListener("submit",(e) => createFormHandler(e))
  let displayNumberDiv = document.querySelector("#display-number")
  
  function getUsers(){ 
    fetch("http://localhost:3000/users") 
    .then(r => r.json()) 
    .then(users => {users.sort(function(a,b){
   
      if(a.age > b.age){
        return  - 1
        
      } if( a.age < b.age ) {
        
        return 1 
      }
      
      return 0 
    }) 
    users.forEach( user => {
     
      User.renderUsers(user)

    })


  })
  
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
   name,
   lastname,
   gender,
   age,

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
     startDate,
     endDate
   }],

  }
  postFetchUser(bodyData)  
}
function postFetchUser (bodyData){ 



  fetch("http://localhost:3000/users", {
    method: "POST",
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify(bodyData) 
  })
  .then(response => response.json()) 
  .then(user => { 
   

  User.renderUsers(user)
    symptomNumber(user.symptoms,user)
    userDiv.innerHTML = ""
    getUsers()
  
  })
}
function symptomNumber(symptoms,user){
  console.log(user)
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











