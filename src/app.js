// const greeting = 'Hello World';
// console.log(greeting);

// const getData = async (url) => {
//   const response = await fetch(url);
//   const result = await response.json();
//   console.log(result);
// };

// getData('https://jsonplaceholder.typicode.com/posts');


import {http} from './http';

// Get Post on dom load

function getPosts() {
  http.get('http://localhost:3000/posts')
  .then(data => console.log(data))
  .catch(err => console.log(err) )
}


