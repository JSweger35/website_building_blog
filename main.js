const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

const paragraph = document.createElement('p');
paragraph.classList.add('paragraph');
paragraph.style.color = 'red';
paragraph.textContent = 'Hi I\'m red!';
container.appendChild(paragraph);

console.log("Hello World!")