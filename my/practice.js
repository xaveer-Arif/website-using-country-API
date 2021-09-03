const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const countryContainer = document.getElementById('country-container');
const error = document.getElementById('error');
const countryDetails =document.getElementById('country-details');

searchBtn.addEventListener('click', function(){
    const search = searchInput.value;
    // clean 
    searchInput.value='';
    countryDetails.innerText = ''
    countryContainer.innerText = ''
    if(search === ''){
            error.innerText = 'Search field cannot be empty.';
            return
    };
    fetch(`https://restcountries.eu/rest/v2/name/${search}`)
    .then(res => res.json())
    .then(data => displayCountry(data))
})

function displayCountry(countryArray){ 
//   error handling
     if(countryArray.status == 404){
            error.innerText= 'NO FOUND RESULT';
            return
    }
    else{
        error.innerText = ''
    }

    countryArray.forEach((item) => {
        console.log(item.flag)

        const div = document.createElement('div')
        div.classList.add("col-md-3")
        div.innerHTML = `
        
          <div class="rounded overflow-hidden border p-2">
            <img
              src="${item.flag}"
              class="w-100"
              alt=""
            />
          </div>
          
          <div
            class="
              py-2
              d-flex
              justify-content-between
              align-items-center
              d-md-block
              text-md-center
            "
          >
            <h2>${item.name}</h2>
            <button onclick ="loadDetails('${item.alpha3Code}')" class="btn btn-dark">Learn More</button>
            `;
  
        countryContainer.appendChild(div)
    })
}

function loadDetails(alpha3Code){
    fetch(`https://restcountries.eu/rest/v2/alpha/${alpha3Code}`)
    .then(res => res.json())
    .then(data => displayDetails(data))
   
}

function displayDetails(details){
    countryDetails.innerHTML = `
    <div class="col-md-12">
        <h1>${details.name}</h1>
        <p>Capital: ${details.capital}</p>
        <p>Currency Name:${details.currencies[0].name}</p>
        <p>Currency symbol:${details.currencies[0].symbol}</p>
    </div>
    `
}