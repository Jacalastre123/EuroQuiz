  let allianceData = {
   "Entente WW1": [
    "France", "United_Kingdom", "Russia", "Italy", "Serbia", "Montenegro", "Greece","Portugal", "Belgium", "Luxembourg", "Romania"
  ],
  "Central Powers WW1": [
    "Germany", "Austria", "Hungary", "Bulgaria"
  ],
  "Allied Countries WW2": [
    "France", "United_Kingdom", "Russia", "Serbia", "Greece", "Denmark", "Norway", "Netherlands", "Belgium", "Luxembourg", "Poland"
  ],
  "Axis Countries WW2": [
    "Germany", "Italy", "Romania", "Bulgaria", "Finland", "Hungary"
  ],
 
  }
 
  const questionStack = [
    "Capital",
    "Area",
    "Alliances", 
    "Flags"
  ]
  let countriesData = []
  let success = sessionStorage.getItem("success") || null
  let isVisited = localStorage.getItem("isVisited") || "no"

const panel = document.getElementById("panel")
const question = document.getElementById("question")
const country = document.querySelectorAll(".country")
const loading = document.getElementById("loading")
const load = loading.querySelector("#load")
const youWon = document.getElementById("youWon")
const ident = document.getElementById("ident")
const wonAt = youWon.querySelector("#wonAt")
  const triesWon = youWon.querySelector("#triesWon")
const tries = document.getElementById("tries")
const wins = document.getElementById("wins")
const gameType = document.getElementById("gameType")
const imgDisp = document.getElementById("imgDisp")
let win = localStorage.getItem("win") || 0
let trying = 0
  let decision;
let random;
let allianceNum;
 let answerArray = []
let unIncludedCountries = ["Vatican City", "San Marino", "Andorra", "Åland Islands","Iceland","Faroe Islands", "Cyprus", "Guernsey", "Isle of Man", "Svalbard and Jan Mayen", "Jersey", "Gibraltar", "Liechtenstein", "Monaco", "Kosovo", "Malta"]
tries.innerText = "Tries: " + trying
wins.innerText = "Wins: " + win

produceNotif("Twinkle", "The Grey Room / Density & Time Music", 2500)
setTimeout(function() {
if (isVisited === "no") {
  isVisited = "yes"
  localStorage.setItem("isVisited", isVisited)
  produceNotif("Welcome to EuroQuiz!", "Right click or hold on a country to find the name!", 3000)
}
else {
  produceNotif("Welcome Back!", "Welcome back to EuroQuiz!", 2000)
}
}, 3000)

function alliedFunc() {
      switch(allianceNum) {
        case 0:
          return "Entente WW1"

        case 1:
          return "Central Powers WW1"

        case 2:
          return "Allied Countries WW2"
    
        case 3:
          return "Axis Countries WW2"
       
      }}



 

  async function quizzingTime(button) {
  
  sessionStorage.removeItem("success")
   let limit = 10
    let time = 0
    success = 0
    trying = 0
    tries.innerText = "Tries: " + trying
    let randomiser = await setInterval(function() {
     
      if (time < limit) {
        if (button) {
    
          button.disabled = true
        }
        time++
        decision = questionStack[Math.floor(Math.random() * questionStack.length)]
        gameType.innerText = "Type: " + decision
        
      }
      if (time === limit) {
        button.disabled = false
        clearTimeout(randomiser)
        gameExecute()
      }
      
    }, 100)
function gameExecute() {
     document.querySelectorAll("path").forEach(item => {
      item.style.fill = "rgba(255, 255, 255, 0.64)"
    })
       imgDisp.src = ""
       
    if (questionStack[0] === decision) {
 random = Math.floor(Math.random() * countriesData.length)
     question.innerText = "What country has the capital of " + countriesData[random].capital
      tries.innerText = "Tries: " + trying
     
      country.forEach(item => {
    const countryName = countriesData.find(c => c.name.common === item.id.replaceAll("_", " "))
   panel.innerText = ""
    
    item.onclick = function() {
    
    if (countriesData[random].capital === countryName.capital) {
      if (item.parentElement.tagName === "g") {
            item.parentElement.querySelectorAll("path").forEach(item => {
              item.style.fill = "green"
            })
           
            }
              item.style.fill = "green"
            trying++
            youWon.showModal()
            tries.innerText = "Tries: " + trying
            wonAt.innerText = "You Won at Capitals mode"
            triesWon.innerText = "Tries: " + trying
           
    }
    else {
       
             if (item.parentElement.tagName === "g") {
            item.parentElement.querySelectorAll("path").forEach(item => {
              item.style.fill = "#780000"
            })

          }
          
                    trying++
          tries.innerText = "Tries: " + trying
           item.style.fill = "#780000"
    }
    }})
    }
    if (questionStack[1] === decision) {
      answerArray.length = 0
      tries.innerText = "Success/Failed: " + success + "/" + trying
     let random = Math.floor(Math.random() * countriesData.length)
  while (countriesData[random].name.common === "Russia") {
      random = Math.floor(Math.random() * countriesData.length)
  }
  
      
      question.innerText = "What countries are larger than " + countriesData[random].name.common
      country.forEach(item => {
        
       
        const countryName = countriesData.find(c => c.name.common === item.id.replaceAll("_", " "))
        if (Number(countryName.area) > Number(countriesData[random].area)) {
          answerArray.push(item.id)
          
         
          
        }
        
        item.onclick = function() {
          if (window.getComputedStyle(item).fill == "rgba(255, 255, 255, 0.64)") {
          if (Number(countryName.area) > Number(countriesData[random].area)) {
          
            answerArray = answerArray.filter(ans => ans !== item.id)
            panel.innerText = "Countries that are larger: " + answerArray.length
            success++
            tries.innerText = "Success/Failed: " + success + "/" + trying
           item.style.fill = "green"
          if (item.parentElement.tagName === "g") {
            item.parentElement.querySelectorAll("path").forEach(item => {
              item.style.fill = "green"
            })
          
            }
           
            if (!answerArray[0]) {
              
              youWon.showModal()
              wonAt.innerText = "You Won at Area mode"
              triesWon.innerText = "Success/Failed: " + success + "/" + trying 
            }
          
            
          }
          else {
             if (item.parentElement.tagName === "g") {
            item.parentElement.querySelectorAll("path").forEach(item => {
              item.style.fill = "#780000"
            })

            }
                trying++
          tries.innerText = "Success/Failed: " + success + "/" + trying 
        item.style.fill = "#780000"
          }
          
          }}
          
          
      })
      panel.innerText = "Countries that are larger: " + answerArray.length
    }
    if (questionStack[2] === decision) {

   allianceNum = Math.floor(Math.random() * 4)
    
     tries.innerText = "Success/Failed: " + success + "/" + trying 
  let alliance = allianceData[alliedFunc()]
      answerArray.length = 0
      country.forEach(item => {
        question.innerText = "What countries are part of " + alliedFunc()
        panel.innerText = "Countries in the alliance: " + answerArray.length
        if (alliance.includes(item.id)) {
            answerArray.push(item.id)
            
          }
        panel.innerText = "Countries in the alliance: " + answerArray.length
        item.onclick = function() {
         
          if (window.getComputedStyle(item).fill === "rgba(255, 255, 255, 0.64)") {
            if (answerArray.includes(item.id)) {

            success++
            answerArray = answerArray.filter(ans => ans !== item.id)
            panel.innerText = "Countries in the alliance: " + answerArray.length
             if (item.parentElement.tagName === "g") {
            item.parentElement.querySelectorAll("path").forEach(item => {
              item.style.fill = "green"
            })
            
             
            } 
           
         if (answerArray.length === 0) {
             
              youWon.showModal()
              win++
              triesWon.innerText = "Success/Fails: " + success + "/" + trying
              localStorage.setItem("win", win)
              wins.innerText = "Wins: " + win
              wonAt.innerText = "You Won at Alliance mode"
            }
        item.style.fill = "green"
          }

          else {
             if (item.parentElement.tagName === "g") {
            item.parentElement.querySelectorAll("path").forEach(item => {
              item.style.fill = "#780000"
            })
            
          
            }

          trying++
        item.style.fill = "#780000"
          }
          
            tries.innerText = "Success/Failed: " + success + "/" + trying

           
            
        }
      }
      })}
      if (questionStack[3] === decision) {
        random = countriesData[Math.floor(Math.random() * countriesData.length)]
        country.forEach(item => {
          const countryName = countriesData.find(c => c.name.common === item.id.replaceAll("_", " "))
          imgDisp.src = random.flags.png
          question.innerText = "What country does this flag belong to?"
          panel.innerText = ""
       
          item.onclick = function() {
            if (window.getComputedStyle(item).fill == "rgba(255, 255, 255, 0.64)") {
            if (countryName.name.common === random.name.common) {
              youWon.showModal()
              
                 trying++
              tries.innerText = "Tries: " + trying
              triesWon.innerText = "Tries: " + trying
              wonAt.innerText = "You won at Flags mode!"
              item.style.fill = "green"
          if (item.parentElement.tagName === "g") {
            item.parentElement.querySelectorAll("path").forEach(item => {
              item.style.fill = "green"
            })
          
            }
            }
            else {
               if (item.parentElement.tagName === "g") {
            item.parentElement.querySelectorAll("path").forEach(item => {
              item.style.fill = "#780000"
            })
             
            }
         
        item.style.fill = "#780000"
          
          trying++
          tries.innerText = "Tries: " + trying 
            }
          }}
        })
      }
    }}
          
          
    
  
    
 

    country.forEach((element) => {
       
      
        element.addEventListener("contextmenu", (event) => {
         let elementFill = window.getComputedStyle(element).fill
          
            
            event.preventDefault()
          
         
          const box = document.createElement("div")
          box.className = "box"
          
         setTimeout(function() {
          box.remove()
         }, 3000)

          box.innerText = element.id.replaceAll("_", " ")
          document.body.appendChild(box)
          let boxAll = document.querySelectorAll(".box")
           if (boxAll[1]) {
          boxAll[0].remove()
         }
         box.style.setProperty("--colour", elementFill)
         box.style.left = event.clientX + "px"
          box.style.top = event.clientY + "px"

         
         
        
        })
    })
