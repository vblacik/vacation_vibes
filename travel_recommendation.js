function reset() {
    document.getElementById('keywordInput').value="";
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
      }
function searchKeyword() {
    const input = document.getElementById('keywordInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
    let beachesMatch = input.includes("beach");
    let templesMatch = input.includes("temple");

    if (beachesMatch) {
        fetch('travel_recommendation_api.json')
          .then(response => response.json())
          .then(data => {
            const beaches = data.beaches; // assuming the JSON has a 'beaches' array
            beaches.forEach(beach => {
              resultDiv.innerHTML += `<h2>${beach.name}</h2>`;
              resultDiv.innerHTML += `<img src="${beach.imageUrl}" alt="search result image" width="500">`;
              resultDiv.innerHTML += `<p>${beach.description}</p>`;
            });
        })
        .catch(error => console.error('Error fetching data:', error));
    }
else if(templesMatch){
    fetch('travel_recommendation_api.json')
      .then(response => response.json())
      .then(data => {
        const temples = data.temples; // assuming the JSON has a 'temples' array
        temples.forEach(temple => {
          resultDiv.innerHTML += `<h2>${temple.name}</h2>`;
          resultDiv.innerHTML += `<img src="${temple.imageUrl}" alt="search result image" width="500">`;
          resultDiv.innerHTML += `<p>${temple.description}</p>`;
        });
    })
    .catch(error => console.error('Error fetching data:', error));
}
else{
    fetch('travel_recommendation_api.json')
      .then(response => response.json())
      .then(data => {
        const keyword = data.countries.find(item => item.name.toLowerCase() === input);
        if (keyword) {
        const cities = keyword.cities
        cities.forEach(city => {
          resultDiv.innerHTML += `<h2>${city.name}</h2>`;
          resultDiv.innerHTML += `<img src="${city.imageUrl}" alt="search result image" width="500">`;
          resultDiv.innerHTML += `<p>"${city.description}"</p>`;
        });
        } else {
          resultDiv.innerHTML = 'Keyword not found.';
        }
      })
      .catch(error => {
        console.error('Error:', error);
        resultDiv.innerHTML = 'An error occurred while fetching data.';
      });
  };
}
