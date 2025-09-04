function searchKeyword() {
    const input = document.getElementById('keywordInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    fetch('travel_recommendation_api.json')
      .then(response => response.json())
      .then(data => {
        const keyword = data.countries.find(item => item.name.toLowerCase() === input);
        if (keyword) {
          const name = keyword.name.join(', ');
          const imageUrl = keyword.imageUrl.join(', ');
          const description = keyword.description;

          resultDiv.innerHTML += `<h2>${keyword.name}</h2>`;
          resultDiv.innerHTML += `<img src="${keyword.imageUrl}" alt="search result image">`;

          resultDiv.innerHTML += `<p><strong>Temple Name:</strong> ${name}</p>`;
          resultDiv.innerHTML += `<p><strong>Image:</strong> ${imageUrl}</p>`;
          resultDiv.innerHTML += `<p><strong>Description</strong> ${description}</p>`;
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







