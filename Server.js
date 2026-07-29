

async function countries() {
    loading.showModal()
    load.innerText = "Fetching Europe"
    let res = await fetch("https://restcountries.com/v5?region=europe", {headers: {
        "Authorization": "Bearer rc_live_f2fc9ff67a8946de80e74fd03d3566e0"
    }}) 
    load.innerText = "Europe Fetch Complete"
    countriesData = await res.json()
    load.innerText = "Converted Europe Data"

    load.innerText = "Filtering Countries"
    unIncludedCountries.forEach(UIC => {
      countriesData = countriesData.filter(country => {
        return country.name.common !== UIC
      })
    })
    localStorage.setItem("countriesData", countriesData)
    
    load.innerText = "Fully Completed closing..."
    setTimeout(function() {loading.close()}, 1000)
    

  }
  await countries()

