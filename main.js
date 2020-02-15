const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};
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
    imageUrl: "https://media.giphy.com/media/wsZeooqD2EqRw8AhJf/giphy.gif",
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
      "https://lh3.googleusercontent.com/proxy/_jTiBmT7TXA_WwxFTZxck-SByl_Vh4WaXdAvrd9GoneJ3bj8JisPXxJGQkZOvOYd7ReM_iw6E2tVyOkSDuczLi09J_hF6cyyqAgvRdFQ-nVdEWf8ALbPDUTUHwp-VnFCgp2y8RcFyY4",
    id: 4
  },
  {
    Merch: "dirty sweatpants",
    description: "plain ole sweatpants",
    price: "$5.00",
    imageUrl:
      "https://lh3.googleusercontent.com/proxy/Do3guNocPuktZaslUtFeI601lXJm8QX8OCeMI86_8DXG9wT23eWXlEkexqmOR-mvIGCKT5tA27I-XNpMtAvHwBJcM06nMXMCA-wmPLjbKd-TFLMiRqJSnRhNlA",
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
    <div class="card">
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
buttonFunction();

init = () => {};
merchBuilder(merchArray);

init();
