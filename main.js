
const tourStops=[
    { 		    location: "Denver, Colorado ",
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
    
    const printToDom =(divId,textToPrint)=>{
    const selectedDiv= document.getElementById(divId);
    selectedDiv.innerHTML=textToPrint;
    };
    const buildTourDates=()=>{
        let domString='';
        for(let i = 0; i <tourStops.length;i++){
            domString += '<div class="container px-lg-5">';
            domString += '<div class="row mx-lg-n5">';
            domString += `<div class="col py-3 px-lg-5 border">${tourStops[i].date}</div>`;
            domString += `<div class="col py-3 px-lg-5 border">${tourStops[i].location}</div>`;
            domString += `<div class="col py-3 px-lg-5 border">${tourStops[i].venue}</div>`;
            domString += `<a class="btn btn-success border" href="https://www.ticketnetwork.com/en/concerts" role="button" id= "tickets" onclick= "btnPurchase(${tourStops[i].id})" class="btn btn-success border">Purchase Tickets</a>`;
            domString += '</div>';
            domString += '</div>';
    }
    printToDom('tourdates',domString)
    };
    
    const btnPurchase= (id)=>{
     for(let i=0; i < tourStops.length; i++){  
         if(tourStops[i].id === id) {
    return;
}
}
    };

 
    
    const eventsForTickets = () => {
        document.getElementById("tickets").addEventListener('click', btnPurchase);
       
    };
    
    const init=()=> {
     buildTourDates(tourStops);
     eventsForTickets();
    };
    
    init();
    
 
    





