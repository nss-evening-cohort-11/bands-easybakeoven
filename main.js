
const bandMembers = [
{
    name: "Ali Morris",
    instrument: "Vox",
},
{
    name: "Steven Oliver",
    instrument: "Guitar",
},
{
    name: "Andy Livingstone",
    instrument: "Guitar",
},
{
    name: "John Harvey",
    instrument: "Bass",
},
{
    name: "Liam Martin",
    instrument: "Drums",
},
];

console.log('bandMembers',bandMembers);



const printToDom = (divId, textToPrint)=> {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const bandHistory = (bandMembers)=>{
    let domString = "";
   for (let i = 0; i < bandMembers.length; i++){
    domString += '<h2>"Our History"</h2>';
    domString += `<p class = "briefHistory">"We are a Blackened/Stoner Doom Band out of Glasgow.  We started out in my moms garage eating pizza rolls and pulling smoke out of our Unicorn bong.  The better the weed, the better the music.  We toke, we smoke, we hash and love it all. We love our fans and our mothers.  Our band members are: ${bandArray[i].name} on ${bandArray[i].instrument}.  We struggle as a new band so.... ,make sure you like us on facebook and share our videos.  Play our music on spotify.  A band has to eat." </p>`;
    domString += '<img src="https://scontent-den4-1.xx.fbcdn.net/v/t1.0-9/541800_393561987402502_1666011539_n.jpg?_nc_cat=106&_nc_ohc=LIv8zUDS88UAX-cUv3I&_nc_ht=scontent-den4-1.xx&oh=5a4979120d7cc9a5b8b2c88b6875b146&oe=5EC866AA" class= "bandpic" alt="Stoner Band Picture">';
    
   }
printToDom('history',domString);

};
bandHistory();