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

  const extentData = {
    "Yugoslavia": [
      "Serbia", "Bosnia_and_Herzegovina", "Croatia", "North_Macedonia", "Montenegro", "Slovenia", "Croatia"
    ],
    "USSR_1950": [
      "Russia", "Ukraine", "Belarus", "Lithuania", "Latvia", "Estonia", "Moldova"
    ],
    "Austria_Hungary": [
      "Austria", "Hungary", "Czechia", "Slovakia", "Slovenia", "Croatia", "Bosnia_and_Herzegovina"
    ],
    "Ottoman_Empire_1650": [
      "Greece", "Bulgaria", "North_Macedonia", "Serbia", "Bosnia_and_Herzegovina", "Romania", "Montenegro", "Albania", "Moldova"
    ],
    "Great_Britain_1900": [
      "United_Kingdom", "Ireland"
    ]

  }
  const questionStack = [
    "Capital",
    "Area",
    "Alliances", 
    "Flags",
    "Parts"
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
const answers = youWon.querySelector("#answers")
const imgDisp = document.getElementById("imgDisp")
let win = localStorage.getItem("win") || 0
let trying = 0
  let decision;
let random;
let randomPart;
let learning = true
let allianceNum;
 let answerArray = []

let unIncludedCountries = ["Vatican City", "San Marino", "Andorra", "Åland Islands","Iceland","Faroe Islands", "Cyprus", "Guernsey", "Isle of Man", "Svalbard and Jan Mayen", "Jersey", "Gibraltar", "Liechtenstein", "Monaco", "Kosovo", "Malta"]
