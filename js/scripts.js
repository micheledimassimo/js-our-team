console.log('Js collegato');

// creo l'array di oggetti
let team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        photo: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        photo: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        photo: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        photo: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        photo: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        photo: 'barbara-ramos-graphic-designer.jpg'
    },
    
];

const teamInfo = document.getElementById('team-info');

for (i = 0; i < team.length; i++ ) {
    console.log('Name:', team[i].name);
    console.log('Role:', team[i].role);
    console.log('Photo:', team[i].photo);

    teamInfo.innerHTML += `
        <div>
            ${team[i].name}
            ${team[i].role}
            ${team[i].photo}
        </div>    
    `;
    

}