// JS mantra When the DOM CONTENT is loaded i want to make a get Fetch and then manipulate DOM content Loaded 
// with render data with renderUsers(user),method below 
addEventListener('DOMContentLoaded',() => {
  // Creating DOMCONTENTLOADED event listener to properly set up listener
  getUsers() //its for get users on the DOM for  Fetch Read Test! 
  
  const createUsersForm =  document.querySelector("#new-user-form")
  createUsersForm.addEventListener("submit",(e) => createFormHandler(e))
  let displayNumberDiv = document.querySelector("#display-number")
  
  
  
  function getUsers(){ // we are creating a function to have FETCH and we passed it On DOMContent loaded)
    fetch("http://localhost:3000/users")// return the promise has response to take out 
    .then(r => r.json()) // (r) capturing this respond and parse in the  json 
    .then(users => users.forEach(user => {  
      
      //  debugger 
      let newUser = new User(user)
      //each new instances i am going tp push it this(user"first user") 
      // because i create new intsances in my user class everytime i create new instance it goes to my constructor in user.js(user class file)
      //then it push user.all =[]
      const div = document.querySelector(".users").innerHTML += newUser.renderUsers()
      // we still need update userdiv after we moved renderUsers to user.js
      // we get acces to return data with newUser.renderUsers()
    // renderUsers(user)
  // we get access to json data we are getting user array back (er can name it anything make sense)
  // i am  getting mu users array and i am gonna get user array and object in the array an i rendered them indivudual 

  }))



}

// function renderUsers(user){
//   // console.log(users)
  
//   //  div.className ="card"
//   // console.log(user)

//    const userUl = document.createElement("ul")
//    const userLi = document.createElement("li")
//    userLi.innerText = `${user.name} ${user.lastname} ${user.age} ${user.gender} , Quarantined Start Date: ${user.quarantines[0].startdate}, Quarantined End Date: ${user.quarantines[0].enddate},  Symptoms fever: ${user.symptoms[0].fever}, cough: ${user.symptoms[0].cough}, tiredness: ${user.symptoms[0].breath}, throat: ${user.symptoms[0].throat}, Runny Nose:${user.symptoms[0].nose}`
//    userUl.appendChild(userLi)
//   // div.innerText = ""
//   div.appendChild(userUl)
  
  
   
  
// }

function createFormHandler(e) {
  
  e.preventDefault()  
  // let percentageNumber = 0 
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
  // let displayNumberDiv = document.querySelector("#display-number")
  // displayNumberDiv.innerHTML = percentageNumber
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
    other: other,
    
  
    }
     
   ],
   quarantines_attributes:[{
     startdate: startDate,
     enddate: endDate
   }],

   
    
 

  }
  postFetchUser(bodyData)
}
function postFetchUser (bodyData){

  //build my body object outside of my fetch 

  // console.log(bodyData)


  fetch("http://localhost:3000/users", {
    method: "POST",
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify(bodyData)
  })
  .then(response => response.json())
  .then(user => {
  console.log(user); /// when we are console.log we have to be sure shape of that what we are getting of user object i am intersted in  
//  const bodyData = user  // when we console.log we are realize we are taking back user object when i am getting back object user object i am interested in 
 renderUsers(user) 
 symptomNumber(bodyData.symptoms_attributes,user)
  
  })
}
function symptomNumber(symptoms,user){
  console.log(symptoms)
    
  
    let yesCounter = 0
    for(let value in symptoms[0]){
      //console.log(symptoms[0])
      if(symptoms[0][value]=== 'Yes'){
       yesCounter ++
     }

    }
  console.log(Math.floor(yesCounter/(Object.keys(symptoms[0]).length)*100))
  
  displayNumberDiv.innerHTML =`${user.name} ${user.lastname}  May has  infected by Corana   `+ Math.floor(yesCounter/(Object.keys(symptoms[0]).length)*100)+ "%"

  }
})











