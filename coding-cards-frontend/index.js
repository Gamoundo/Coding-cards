
//  function fetchUsers() {
//      fetch("http://127.0.0.1:3000/users").
//      then(resp => resp.json()).
//      then(data => findnames(data))
//  }

 

// function findnames(users) {
//     usernames = []
//     users.forEach(user => {
        
//         usernames.push(user.name)
//     });
    
//     return usernames
// }
let userCards
let userData
let registerBtn = document.querySelector("#registerB")

let loginBtn = document.querySelector("#loginB")

  registerBtn.addEventListener("click", (event) => {
    let div= document.querySelector('div')
    div.innerHTML = `
    <form id = "login" >
        name <input type="text" name="name" id="name">
        <br>
        password <input type="text" name="password" id="password">
        <br> 
        
        <input id="registerB" type="submit" value="register">
    </form> 
    `
    let loginForm = document.querySelector("#login")
    loginForm.addEventListener("submit", (event) => {
    
    event.preventDefault()
    // console.log(loginForm.name.value)
    console.log(loginForm.name.value)
    let userobj ={
        name: loginForm.name.value,
        password: loginForm.password.value
    }
    fetch('http://127.0.0.1:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(userobj)
      })
      .then(resp => resp.json())
      .then(resp => renderUser(resp))
  
    
  });
    
});

loginBtn.addEventListener("click", (event) => {
    let div= document.querySelector('div')
    div.innerHTML = `
    <form id = "login" >
        name <input type="text" name="name" id="name">
        <br>
        password <input type="text" name="password" id="password">
        <br> 
        
        <input id="submitB" type="submit" value="submit">
    </form> 
    `
    let loginForm = document.querySelector("#login")
    loginForm.addEventListener("submit", (event) => {
    
    event.preventDefault()
    console.log(loginForm.name.value)
    let userobj ={
        name: loginForm.name.value,
        password: loginForm.password.value
    }
    fetch('http://127.0.0.1:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(userobj)
      })
      .then(resp => resp.json())
      .then(resp => renderUser(resp))
  });
    
});

function renderUser(user) {
    let body = document.querySelector('body')
    userData= user
    
    if (userCards === undefined) {
        body.innerHTML = `
    <h1>${user.name} </h1>
    <div class="modal-content">
    <span id="modal" </span>
    <p>Where I'd put my cards if I had any!</p>
    <img src="https://i.ytimg.com/vi/nwNaVjkJYes/maxresdefault.jpg" height= 300 width= 248 alt="Timmy Dad">
    
  </div>
   <button id="shop"> Shop </button>
   <button id="user-cards"> Cards </button>
    `
    } else {
        body.innerHTML = `
        <h1>${user.name} </h1>
       
        <button id="shop"> Shop </button>
        <button id="user-cards"> Cards </button>

        `
        renderCards(userCards)

    }
    

    let shopBtn = document.querySelector("#shop")
    shopBtn.addEventListener("click", (event) => {
        event.preventDefault()
        let body = document.querySelector('body')
        body.innerHTML = `
        <h1>Get Your Cards Here</h1>
        <button id="buy" align: center;>buy pack</button>
        `
        console.log(userData)

        let buybtn = document.querySelector("#buy")
        buybtn.addEventListener("click", (event)=> {
            event.preventDefault()
            fetch('http://127.0.0.1:3000/user_cards', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify( {id: userData.id})
      })
      .then(resp => resp.json())
      .then(resp => {
        userCards= resp
        renderUser(userData)
      })
  

        })
        fetch("http://127.0.0.1:3000/cards")
        .then(resp => resp.json())
        .then(resp => renderCards(resp))
    })

}

document.addEventListener("DOMContentLoaded", (event) => {
// fetchform()
// fetchUsers()

})


function renderCard(card) {
    let body = document.querySelector('body')
    
    let div = document.createElement('div')
    div.innerHTML= `
    
    <div>
    <h2> ${card.name}</h2>
    <img src="${card.img}" height= 300 width= 248 alt="${card.name}">
    <p>${card.att_val}</p>
    <p>${card.def_val}</p>
    <p>${card.description}</p>
    </div>
    `
    body.appendChild(div)
}

function renderCards(cards) {
    cards.forEach(renderCard)
}

