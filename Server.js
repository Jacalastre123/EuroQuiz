 async function countries() {
    loading.showModal()
    load.innerText = "Fetching Europe"
    let res = await fetch("https://restcountries.com/v3.1/region/europe") 
    load.innerText = "Europe Fetch Complete"
    countriesData = await res.json()
    load.innerText = "Converted Europe Data"

    load.innerText = "Filtering Countries"
    unIncludedCountries.forEach(UIC => {
      countriesData = countriesData.filter(country => {
        return country.name.common !== UIC
      })
    })
    
    load.innerText = "Fully Completed closing..."
    setTimeout(function() {loading.close()}, 1000)
    

  }
   await countries()
