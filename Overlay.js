const overlay = document.getElementById("overlay")

function produceNotif(name, desc, time) {
    let limit = 0
    const overClone = overlay.content.cloneNode(true)
    const title = overClone.querySelector("#title")
    const description = overClone.querySelector("#description")
    const notif = overClone.getElementById("notif")
      document.body.appendChild(overClone)
       title.innerText = name
      description.innerText = desc
      setInterval(function() {
        limit++
        if (limit >= 5) {
        let text = description.textContent
      text = text.slice(1)
      description.innerText = text
        }
      }, 90)
    
    setTimeout(function() {
        notif.remove()
    }, time)

}