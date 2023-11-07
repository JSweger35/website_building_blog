const container = document.querySelector('#container');

const p1 = document.createElement('div');
p1.classList.add('p1');
p1.textContent = "This is day two of creating my own  website. I'm adding a card style approach to the page and whatever else feels right after that."
container.appendChild(p1);

const p2 = document.createElement('div');
p2.classList.add('p2');
p2.textContent = "This is day one of creating my own website. This is the journey of working toward becoming a software engineer/developer. I'm looking forward to the journey.";
container.appendChild(p2);

const p3 = document.createElement('div');
p3.classList.add('p3');
p3.textContent = "This is day three of creating my own website. ";
container.appendChild(p3);
