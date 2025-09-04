function searchKeyword() {
    const input = document.getElementById('keywordInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    fetch('travel_recommendation_api.json')
      .then(response => response.json())
      .then(data => {
        const keyword = data.countries.find(item => item.name.toLowerCase() === input);
        if (keyword) {
        const cities = keyword.cities
        cities.forEach(city => {
          const cityName = cities.name;
          const cityImage = cities.imageUrl;
          const cityDescription = cities.description;

          resultDiv.innerHTML += `<h2>${city.name}</h2>`;
          resultDiv.innerHTML += `<img src="${city.imageUrl}" alt="search result image">`;

          resultDiv.innerHTML += `<p><strong>City Name:</strong> ${cityName}</p>`;
          resultDiv.innerHTML += `<p><strong>Image:</strong> ${cityImage}</p>`;
          resultDiv.innerHTML += `<p><strong>Description:</strong> ${cityDescription}</p>`;
        });
        } else {
          resultDiv.innerHTML = 'Keyword not found.';
        }
      })
      .catch(error => {
        console.error('Error:', error);
        resultDiv.innerHTML = 'An error occurred while fetching data.';
      });
  }
    btnSearch.addEventListener('click', searchKeyword);







