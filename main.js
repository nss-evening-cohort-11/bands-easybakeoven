const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
  };
  
  const merchArray = [
    {
      Merch: "shirt",
      description: "Easy Bake bong shirt",
      price: 6.66
    },
  
    {
      Merch: "Bong",
      description: "super rad bong ",
      price: 25.0
    },
    {
      Merch: "hoodie",
      description: "cool black metal weed hoodie",
      price: "free thirty"
    },
    {
      Merch: "Beanie",
      description: "pot leaf beanie",
      price: "your soul"
    },
    {
      Merch: "sweatpants",
      description: "plain ole sweatpants",
      price: 5.0
    },
    {
      Merch: "Beer Stein",
      description: "Easy Bake beer Stein",
      price: 6.0
    }
  ];
  
  merchBuilder = poopArray => {
    let domString = "";
    for (let i = 0; i < merchArray.length; i++) {
      domString += `<div class="card mb-3" id= "merchCard" style="max-width: 540px;"></div>
      <div class="row no-gutters">
      <div class="col-md-4">
      <img src="..." class="card-img" alt="...">
      </div>
      <div class="col-md-8">
      <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      <button type="button" class="btn btn-primary">Primary</button>
      </div>
      </div>
      </div>
      </div>`;
    }
    printToDom("cardPrint", domString);
  };
  
  const init = () => {
    merchBuilder(merchArray);
  };
  
  init();
  