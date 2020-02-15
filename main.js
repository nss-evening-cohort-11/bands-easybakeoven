const tourStops = [
  {
    location: "Denver, Colorado ",
    venue: " Pepsi Center ",
    date: "MON 04/20/2020",
    id: 1
  },
  {
    location: "Las Vegas, Nevada",
    venue: " Flamingo Hotel",
    date: "FRI 04/24/2020",
    id: 2
  },
  {
    location: "Hollywood, California",
    venue: " Troubadour ",
    date: "SAT  05/02/2020",
    id: 3
  },
  {
    location: "Portland,Oregon",
    venue: " Moda Center ",
    date: "FRI  05/15/2020",
    id: 4
  },
  {
    location: "Washington, D.C. ",
    venue: " Capital One Arena",
    date: "FRI  05/22/2020",
    id: 5
  },
  {
    location: "Bangor, Maine ",
    venue: " Darlings Waterfront",
    date: "FRI  06/05/2020",
    id: 6
  },
  {
    location: "Boston, Massachusetts",
    venue: " Wilbur Theater ",
    date: "SAT  06/20/2020",
    id: 7
  },
  {
    location: "Anchorage, Alaska ",
    venue: "Atwood Concert Hall",
    date: "THU  07/09/2020",
    id: 8
  }
];

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const buildTourDates = () => {
  let domString = "";
  for (let i = 0; i < tourStops.length; i++) {
    domString += '<div class="container px-lg-5">';
    domString += '<div class="row mx-lg-n5">';
    domString += `<div class="col py-3 px-lg-5 border">${tourStops[i].date}</div>`;
    domString += `<div class="col py-3 px-lg-5 border">${tourStops[i].location}</div>`;
    domString += `<div class="col py-3 px-lg-5 border">${tourStops[i].venue}</div>`;
    domString += `<a class="btn btn-success border" href="https://www.ticketnetwork.com/en/concerts" role="button" id= "tickets" onclick= "btnPurchase(${tourStops[i].id})" class="btn btn-success border">Purchase Tickets</a>`;
    domString += "</div>";
    domString += "</div>";
  }
  printToDom("tourdates", domString);
};

const btnPurchase = id => {
  for (let i = 0; i < tourStops.length; i++) {
    if (tourStops[i].id === id) {
      return;
    }
  }
};

const eventsForTickets = () => {
  document.getElementById("tickets").addEventListener("click", btnPurchase);
};

const recentEvents = [
  {
    event: "New Tour!",
    para:
      "We'll be starting a new tour starting 4/20/20! We've been lucky enough these past few years to save enough money to tour the US with our friends (insert student group names here) We're are unbelieveably stoked for this opportunity and can't wait to meet our american fans! We'll have one time only merch available specifically for the tour and once the items are gone they are GONE! So get them while you can! Can't wait to see your smiling faces!",
    img: "https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/10636022_687582918000406_3231745271274769475_n.jpg?_nc_cat=102&_nc_ohc=-3lqjXarpsUAX-nBuGE&_nc_ht=scontent-ort2-2.xx&oh=7d5dfed0046cab8993d3cc1ddeff9bcc&oe=5F030098"
  },
  {
    event: "New Album",
    para:
      "The newest album just released on 11/15/2019! Stoner Wisdom is available now on spotify and itunes as well as a few tracks on youtube. If you loved our single 'Stoner Wisdom' you're gonna love this this kick ass album!",
    img: "https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/524691_393549160737118_1724626884_n.jpg?_nc_cat=105&_nc_ohc=6SVawbsNlW0AX89oN7x&_nc_ht=scontent-ort2-2.xx&oh=10cd1bbaba1ca94a22e32465e003f6e7&oe=5F0285B0"
  },
  {
    event: "New Member",
    para: "Its been a crazy year, we've been working on recording our new album and getting a tour set up for 2020, and with the unfortunate departure of our good friend John Wayne we just felt overwelhmed, but luckily there is always a light at the end of the tunnel. We were able to get a replacement with ease. Please give a loving EASY BAKE OVEN welcoe to Andy Livingstone! Andy will be joining us on guitar! He's a dear friend to us and has been in the sidelines of our journey. We look forward to the coming years and seeing what we can accomplish.",
    img: "https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/543225_393547024070665_1956419788_n.jpg?_nc_cat=110&_nc_ohc=Wy5ViLyKpCMAX-VTSIx&_nc_ht=scontent-ort2-2.xx&oh=2170d64d71be92bd27fa55f5577051b8&oe=5ECC9D01"
  }
];

//new code for signup button starts here
const newsLetterFans= []; 
const btnSignUp = (e)=> {
   e.preventDefault()
newsLetterFans.push(document.getElementById("fanEmail").value); //get from input
 alert("Your signup was successful!");
 document.getElementById("fanEmail").value="";

};   
// signup button code ends here
console.log(newsLetterFans);




const buildEvents = () => {
  let domString = "";
  for (let i = 0; i < recentEvents.length; i++) {
    domString += `<div class="eventsContainer">`
    domString += `<div class="media">`;
    domString += `<img class="eventsImg" src="${recentEvents[i].img}" class="mr-3" alt="...">`;
    domString += `<div class="media-body">`;
    domString += ` <h5 class="mt-0">${recentEvents[i].event}</h5>`;
    domString += `${recentEvents[i].para}`;
    domString += `</div>`;
    domString += `</div>`;
    domString += `</div>`
  }
  printToDom("newEvents", domString);
};

const init = () => {
  const pageRoute = window.location.pathname;

  if (pageRoute == "/tour.html") {
    buildTourDates(tourStops);
    eventsForTickets();
  } 
  else (pageRoute == "/index.html") 
  {
    buildEvents(recentEvents);
  }
};

init();
