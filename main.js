const container = document.querySelector('#container');


const paragraph = document.createElement('p');
paragraph.classList.add('paragraph');
paragraph.textContent = 'This is a test text.';
container.appendChild(paragraph);

console.log("Hello World!")