// do the thing you always have to do
// window.onload = function(){}
// 1. make an API Call to the Beer-Me-Backend
// 2. store data in variable
// 3. loop through data and append to page

window.onload = function() {
  axios.get('https://beer-me-python-backend.herokuapp.com/beers')
  .then(response => {
    let data = response.data
    let main = document.querySelector('#main')
    let paragraph;

    paragraph = document.createElement('p')
    paragraph.innerHTML = data[0].beer_name
    
    main.appendChild(paragraph)

    console.log(data[0].beer_name);



    
  })
}