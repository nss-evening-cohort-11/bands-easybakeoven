const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const bandMembers = [
  {
    name: "Ali Morris",
    instrument: "Vox"
  },
  {
    name: "Steven Oliver",
    instrument: "Guitar"
  },
  {
    name: "Andy Livingstone",
    instrument: "Guitar"
  },
  {
    name: "John Harvey",
    instrument: "Bass"
  },
  {
    name: "Liam Martin",
    instrument: "Drums"
  }
];

const merchArray = [
  {
    Merch: "shirt",
    description: "Easy Bake bong shirt",
    price: "$6.66",
    imageUrl:
      "https://i.etsystatic.com/17353358/r/il/22302b/1991411771/il_794xN.1991411771_h7qn.jpg",
    id: 1
  },
  {
    Merch: "Bong",
    description: "super rad bong",
    price: "$25",
    imageUrl: "https://i.pinimg.com/originals/41/aa/05/41aa0561964157751acf7b2eb486b0b0.jpg",
    id: 2
  },
  {
    Merch: "hoodie",
    description: "cool weed hoodie",
    price: "free thirty",
    imageUrl:
      "https://ae01.alicdn.com/kf/H0119555b8f4b4ab5adf545449a28d936t/Nuns-And-Bongs-Weed-Funny-Smoking-Men-Women-Unisex-1328-Hiphop-Summer-Hoodies-Sweatshirts.jpg_q50.jpg",
    id: 3
  },
  {
    Merch: "Beanie",
    description: "pot leaf beanie",
    price: "$your soul!!!",
    imageUrl:
      "https://i.etsystatic.com/10437770/r/il/619b45/1789415454/il_570xN.1789415454_9v7v.jpg",
    id: 4
  },
  {
    Merch: "dirty sweatpants",
    description: "plain ole sweatpants",
    price: "$5.00",
    imageUrl:
      "./images/sweats.jpg",
    id: 5
  },
  {
    Merch: "Beer Stein",
    description: "Easy Bake beer Stein",
    price: "$6.00",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/412BCQvrvHL.jpg",
    id: 6
  }
];

const merchBuilder = productArray => {
  let domString = "";
  for (let i = 0; i < productArray.length; i++) {
    domString += `
    <div class="card merchCard">
    <img class="card-img-top merchPics" src=${productArray[i].imageUrl} alt="Card image cap">
    <div class="card-body">
    <h5 class="card-title">${productArray[i].Merch}</h5>
    <p class="card-text">${productArray[i].description}</p>
    <p class="card-text">${productArray[i].price}</p>
    <button type="button" onclick="buttonFunction (${merchArray[i].id})" class="btn btn-primary">purchase</button>
    </div> 
    </div>`;
  }
  printToDom("cardPrint", domString);
};

buttonFunction = id => {
  for (let i = 0; i < merchArray.length; i++) {
    if (merchArray[i].id === id) {
      alert("Purchase successfull!");
    }
  }
};

const bandHistory = bandMembers => {
  let domString = "";
  {
    domString += '<h2 id="biographyTitle">Biography</h2>';
    domString +=
      '<p class = "briefHistory">Easy Bake Oven is a Blackened/Stoner Doom Band out of Glasgow.  We started out in my moms garage eating pizza rolls and pulling smoke out of our Unicorn bong.  The better the weed, the better the music.  We toke, we smoke, we hash and love it all. We love our fans and our mothers.  We struggle as a new band so.... ,make sure you like us on facebook and share our videos.  Play our music on spotify.  A band has to eat. Our band members are: </p>';
    domString += '<dl class = "members">';
    domString += "<dt>Ali Morris</dt>";
    domString += "<dd> on Vocals</dd>";
    domString += "<dt>Steven Oliver</dt>";
    domString += "<dd>on Guitar</dd>";
    domString += "<dt> Andy Livingstone</dt>";
    domString += "<dd> on Guitar</dd>";
    domString += "<dt> John Harvey</dt>";
    domString += "<dd> on Bass</dd>";
    domString += "<dt> Liam Martin</dt>";
    domString += "<dd> on Drums</dd>";
    domString += "</dl>";
  }
  printToDom("history", domString);
};

const albums = ["Stoner Wisdom", "Purple Haze", "Weed Resort"];
const stoner = [
  "Stoner Wisdom", "California Cheeseburger", "Baker Lives", "Dope Kingdom", "Hazy Vision"
];
const purple = [
  "Puff Puff Pass",
  "Roll it up",
  "Mary Jane, My Love",
  "Shotgun Heaven",
  "Job 1.5",
  "Bongs Delight"
];
const weed = [
  "Cabbage for all",
  "Up in smoke",
  "Toasted",
  "Let's get blunt",
  "Running on plants",
  "High O'clock"
];

const cardStoner = albums => {
  let domString = "";
  for (let i = 0; i < albums.length; i++);
  for (let a = 0; a < stoner.length; a++);
  {
    domString += '<div class="card">';
    domString +=
      '<img src="data:image/jpeg;base64,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" class="card-img-album" alt="...">';
    domString += '<div class="card-body">';
    domString += `<h5 class="card-title">${albums[0]}</h5>`;
    domString += '<p class="card-text">"Released 2019"</p>';
    domString += "</div>";
    domString += '<ol class="list-group list-group-flush">';
    domString += `<li class="list-group-item">1.${stoner[0]}</li>`;
    domString += `<li class = "list-group-item">2.${stoner[1]}</li>`;
    domString += `<li class = "list-group-item">3.${stoner[2]}</li>`;
    domString += `<li class = "list-group-item">4.${stoner[3]}</li>`;
    domString += `<li class = "list-group-item">5.${stoner[4]}</li>`;
    domString += "</ol>";
  }
  {
    printToDom("albumStoner", domString);
  }
};

const cardPurple = albums => {
  let domString = "";
  for (let i = 0; i < albums.length; i++);
  for (let a = 0; a < purple.length; a++);
  {
    domString += '<div class="card">';
    domString +=
      '<img src="data:image/jpeg;base64,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" class="card-img-album" alt="purple pot leaf">';
    domString += '<div class="card-body">';
    domString += `<h5 class="card-title">${albums[1]}</h5>`;
    domString += '<p class="card-text">"Released 2017"</p>';
    domString += "</div>";
    domString += '<ol class="list-group list-group-flush">';
    domString += `<li class="list-group-item">1.${purple[0]}</li>`;
    domString += `<li class = "list-group-item">2.${purple[1]}</li>`;
    domString += `<li class = "list-group-item">3.${purple[2]}</li>`;
    domString += `<li class = "list-group-item">4.${purple[3]}</li>`;
    domString += `<li class = "list-group-item">5.${purple[4]}</li>`;
    domString += "</ol>";
  }
  printToDom("albumPurple", domString);
};

const cardWeed = albums => {
  let domString = "";
  for (let i = 0; i < albums.length; i++);
  for (let a = 0; a < weed.length; a++);
  {
    domString += '<div class="card">';
    domString +=
      '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQIZCQYo6AX0xcNLq7MtfkdWCOFnhD_U6BzLFnFyAvihz5qn_mP" class="card-img-album" alt="Weed Resort">';
    domString += '<div class="card-body">';
    domString += `<h5 class="card-title">${albums[2]}</h5>`;
    domString += '<p class="card-text">"Released 2011"</p>';
    domString += "</div>";
    domString += '<ol class="list-group list-group-flush">';
    domString += `<li class="list-group-item">1.${weed[0]}</li>`;
    domString += `<li class = "list-group-item">2.${weed[1]}</li>`;
    domString += `<li class = "list-group-item">3.${weed[2]}</li>`;
    domString += `<li class = "list-group-item">4.${weed[3]}</li>`;
    domString += `<li class = "list-group-item">5.${weed[4]}</li>`;
    domString += "</ol>";
  }
  {
    printToDom("albumWeed", domString);
  }
};

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

const buildTourDates = () => {
  let domString = "";
  for (let i = 0; i < tourStops.length; i++) {
    domString += '<div id="tourBox" class="container px-lg-5">';
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
    event: "NA - Stoner Wisdom Tour!",
    para:
      "We'll be starting a new tour starting 4/20/20! We've been lucky enough these past few years to save enough money to tour the US with our friends.  We are unbelieveably stoked for this opportunity and can't wait to meet our american fans! We'll have one time only merch available specifically for the tour and once the items are gone they are GONE! So get them while you can!",
    img:
      "https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/10636022_687582918000406_3231745271274769475_n.jpg?_nc_cat=102&_nc_ohc=-3lqjXarpsUAX-nBuGE&_nc_ht=scontent-ort2-2.xx&oh=7d5dfed0046cab8993d3cc1ddeff9bcc&oe=5F030098"
  },
  {
    event: "Stoner Wisdom",
    para:
      "The newest album just released on 11/15/2019! Stoner Wisdom is available now on spotify and itunes as well as a few tracks on youtube. If you loved our single 'Stoner Wisdom' you're gonna love this this kick ass album!",
    img:
      "https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/524691_393549160737118_1724626884_n.jpg?_nc_cat=105&_nc_ohc=6SVawbsNlW0AX89oN7x&_nc_ht=scontent-ort2-2.xx&oh=10cd1bbaba1ca94a22e32465e003f6e7&oe=5F0285B0"
  },
  {
    event: "Welcome Steven Oliver",
    para:
      "Its been a crazy year, we've been working on recording our new album and getting a tour set up for 2020, and with the unfortunate departure of our good friend John Wayne we just felt overwelhmed, but luckily there is always a light at the end of the tunnel. We were able to get a replacement with ease. Please give a loving EASY BAKE OVEN welcome to Andy Livingstone! Andy will be joining us on guitar! He's a dear friend to us and we're sure you'll love him!",
    img:
      "https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/543225_393547024070665_1956419788_n.jpg?_nc_cat=110&_nc_ohc=Wy5ViLyKpCMAX-VTSIx&_nc_ht=scontent-ort2-2.xx&oh=2170d64d71be92bd27fa55f5577051b8&oe=5ECC9D01"
  }
];

//new code for signup button starts here
const newsLetterFans = [];
const btnSignUp = e => {
  e.preventDefault();
  newsLetterFans.push(document.getElementById("fanEmail").value); //get from input
  alert("Your signup was successful!");
  document.getElementById("fanEmail").value = "";
};
// signup button code ends here

const buildEvents = () => {
  let domString = "";
  for (let i = 0; i < recentEvents.length; i++) {
    domString += `<div class="eventsContainer">`;
    domString += `<div class="media">`;
    domString += `<img class="eventsImg" src="${recentEvents[i].img}" class="mr-3" alt="...">`;
    domString += `<div class="media-body">`;
    domString += ` <h3 class="mt-0">${recentEvents[i].event}</h3>`;
    domString += `${recentEvents[i].para}`;
    domString += `</div>`;
    domString += `</div>`;
    domString += `</div>`;
  }
  printToDom("newEvents", domString);
};

const init = () => {
  const pageRoute = window.location.pathname;

  if (pageRoute == "/tour.html") {
    buildTourDates(tourStops);
    eventsForTickets();
  } else if (pageRoute == "/index.html") {
    buildEvents(recentEvents);
    document.getElementById("signupbtn").addEventListener("click", btnSignUp);
  } else if (pageRoute == "/merch.html") {
    merchBuilder(merchArray);
    buttonFunction();
  } else if (pageRoute == "/about.html") {
    bandHistory(bandMembers);
    cardStoner(albums);
    cardPurple(albums);
    cardWeed(albums);
  }
};

init();
