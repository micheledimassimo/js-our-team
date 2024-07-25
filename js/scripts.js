console.log('Js collegato');

// creo l'array di oggetti
let team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        photo: 'img/wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        photo: 'img/angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        photo: 'img/walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        photo: 'img/angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        photo: 'img/scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        photo: 'img/barbara-ramos-graphic-designer.jpg'
    },
    
];

const teamInfo = document.getElementById('team-info');
// stampo in console poi in pagina gli elementi oggetto dell'array

for (i = 0; i < team.length; i++ ) {
    console.log('Name:', team[i].name);
    console.log('Role:', team[i].role);
    console.log('Photo:', team[i].photo);

    teamInfo.innerHTML += `
        <div class = "cards"> 
            <img src="${team[i].photo}">
            <p>${team[i].name}</p>
            <p>${team[i].role}</p>
        </div>    
    `;

    
}

 