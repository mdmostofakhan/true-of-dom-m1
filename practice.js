const mainContainer = document.getElementById('main-container');
const section = document.createElement('section')
const h1 = document.createElement('h1');
h1.innerText = 'my house';
section.appendChild(h1);

// const ul = document.createElement('ul');
// const li1 = document.createElement('li')
// li1.innerText ='big Tajmhol'
// ul.appendChild(li1)

const ul = document.createElement('ul');
const li1 = document.createElement('li')
li1.innerText = 'salad';
ul.appendChild(li1);

const li2 = document.createElement('li')
li2.innerText = 'salad';
ul.appendChild(li2);

const li3 = document.createElement('li')
li3.innerText = 'salad';
ul.appendChild(li3);

const li4 = document.createElement('li')
li4.innerText = 'salad';
ul.appendChild(li4); 


section.appendChild(ul)
mainContainer.appendChild(section);

const sectionAdders = document.createElement('section');
sectionAdders.innerHTML = `
<h1> MY Dresh Cundtier </h1>
<ul>
<li> pent</li>
<li> wow</li>
<li> T Shart </li>
<li> pent</li>
</ul>
`
mainContainer.appendChild(sectionAdders);