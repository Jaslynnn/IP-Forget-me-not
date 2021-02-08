//Id consultation
//How to make the toggle stay in the same state and 
//the location to be constantly recorded when surfing the whole application 


//Display the existing data 
let points = localStorage.getItem("Points")
document.getElementById("points").innerHTML = points
//function to display all statistics like water, plants and coins
function existing() {
  waterCount = localStorage.getItem("Water")
  document.getElementById("waterCount").innerHTML = waterCount
  waterCount = localStorage.getItem("Points")
  document.getElementById("points").innerHTML = waterCount
  waterCount = localStorage.getItem("Plants")
  document.getElementById("plantsCount").innerHTML = waterCount
}




//jquery

$(document).ready(function () {
  //Home page
$("#locationConstant").click(function(){
  currentLocation()
})




  $("#purchase-confirm1").hide();
  $("#purchase-confirm2").hide();
  $("#purchase-notice").hide();
  //shop page
  $("#Seed1").click(function (e) {
    e.preventDefault();
    $("#purchase-confirm1").show();
  })
  //deduct coins and add a plant to inventory
  $("#Deduct5").click(function (e) {
    e.preventDefault();
    deductCoins1()
    $("#purchase-notice").show().fadeOut(4000);
    $("#purchase-confirm1").hide();
  })
  $("#close1").click(function (e) {
    e.preventDefault();
    $("#purchase-confirm1").hide();

  })



  //Checklist page
  /* using arrays to create checklist*/
  $("#myForm").hide();
  $("#add-update-msg").hide();
  $("#add-coin-msg").hide();


  $("#addItem").click(function (e) {
    e.preventDefault();
    let items = localStorage.getItem("Checklist")
    let checklist = [items];
    checklist.forEach(retreival);

    function retreival() {
      let Item = document.getElementById("addingItem").value
      checklist.push(Item);
      localStorage.setItem("Checklist", checklist);
    }
    displayChecklist()
    $("#add-update-msg").show().fadeOut(4000);
  })


  /* function to add points*/
  $("#addPoints").click(function (e) {
    e.preventDefault();
    addition()
    $("#add-coin-msg").show().fadeOut(4000);
  })

  //Settings page




})


//End of jquery, all the javascript functions

//shop
//Buying of first seed
function deductCoins1() {
  let coins = localStorage.getItem("Points")
  let finalPoints = parseInt(coins) - parseInt('5')
  localStorage.setItem("Points", finalPoints);
  document.getElementById("points").innerHTML = finalPoints
}

//Buying of second seed
function deductCoins2() {
  let coins = localStorage.getItem("Points")
  let finalPoints = parseInt(coins) - parseInt('10')
  localStorage.setItem("Points", finalPoints);
  document.getElementById("points").innerHTML = finalPoints
}
//Buying of Third seed
function deductCoins3() {
  let coins = localStorage.getItem("Points")
  let finalPoints = parseInt(coins) - parseInt('20')
  localStorage.setItem("Points", finalPoints);
  document.getElementById("points").innerHTML = finalPoints
}

//buying of water
//deduct coins and add water
function deductCoinsForWater() {
  let coins = localStorage.getItem("Points")
  let finalPoints = parseInt(coins) - parseInt('10')
  localStorage.setItem("Points", finalPoints);
  document.getElementById("points").innerHTML = finalPoints
}


//Checklist Page

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}


function displayExistingChecklist() {
  let checklist = localStorage.getItem("Checklist")
  var checklistArr = checklist.split(',');
  document.getElementById("totalItems").innerHTML += checklistArr.length - 1
  for (var i = 1; i < checklistArr.length; i++) {
    document.getElementById("list").innerHTML +=` ${i} ${checklistArr[i] } <br>   `

  }
  }

  function displayChecklist() {
    let checklist = localStorage.getItem("Checklist")
    var checklistArr = checklist.split(',');
    let i = checklistArr.length - 1
    let lastItem = checklistArr[checklistArr.length - 1]
    document.getElementById("totalItems").innerHTML = checklistArr.length - 1
    document.getElementById("list").innerHTML +=
      ` ${i} ${lastItem } <br>   `

  }



  function addition() {

    let points = localStorage.getItem("Points")

    if (isNaN(points)) {
      let points = 0
      localStorage.setItem("Points", points);
      let oldpoints = localStorage.getItem("Points")
      let oldPoints = parseInt(oldpoints)
      let newPoints = oldPoints + parseInt("5")
      localStorage.setItem("Points", newPoints);
      document.getElementById("points").innerHTML += newPoints

    } else {

      localStorage.setItem("Points", points);
      let oldpoints = localStorage.getItem("Points")
      let oldPoints = parseInt(oldpoints)
      let newPoints = oldPoints + parseInt("5")
      localStorage.setItem("Points", newPoints);
      document.getElementById("points").innerHTML = newPoints
    }


  }


  //Settings page
  // record the user's house door location
  function recordPosition() {
    const successCallback = (position) => {
      console.log(position);
    };
    const errorCallback = (error) => {
      console.error(error);
    };

    const watchId1 = navigator.geolocation.getCurrentPosition(successCallback, errorCallback, {
      enableHighAccuracy: true,
      timeout: 7000
    });

  }


  // record the user's current location
  function currentLocation() {
    const successCallback = (position) => {
      console.log(position);
    };
    const errorCallback = (error) => {
      console.error(error);
    };
    const watchId2 = navigator.geolocation.watchPosition(successCallback, errorCallback);
  }