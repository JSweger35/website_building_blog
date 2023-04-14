const container = document.querySelector('#container');

/*const content = document.createElement('div');
content.classList.add('content');
content.style.color = 'white';
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);*/

const paragraph = document.createElement('p');
paragraph.classList.add('paragraph');
paragraph.style.color = 'white';
paragraph.textContent = 'This is a test text.';
container.appendChild(paragraph);

console.log("Hello World!")