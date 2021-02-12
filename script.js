//Id consultation

//Display the existing data 
//let points = localStorage.getItem("Points")
//document.getElementById("points").innerHTML = points
//function to display all statistics like water, plants and coins
/*function existing() {
  waterCount = localStorage.getItem("Water")
  document.getElementById("waterCount").innerHTML = waterCount
  waterCount = localStorage.getItem("Points")
  document.getElementById("points").innerHTML = waterCount
  waterCount = localStorage.getItem("Plants")
  document.getElementById("plantsCount").innerHTML = waterCount
}
*/



//jquery

$(document).ready(function () {
  //Home page

  currentLocation()
//
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
 


  const APIKEY = "60150aff6adfba69db8b6b87";
  loadList()
  $("#myForm").hide();
  $("#add-update-msg").hide();
  $("#add-coin-msg").hide();
  
  $("#addItem").on("click", function (e) {
    //prevent default action of the button 
    e.preventDefault();

    let item = $("#addingItem").val()


    let jsondata = {
      "checklist": item,
      
    };

    let settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://forgetmenot-7aac.restdb.io/rest/checklist",
      "method": "POST",
      "headers": {
        "content-type": "application/json",
        "x-apikey": APIKEY,
        "cache-control": "no-cache"
      },


      "processData": false,
      "data": JSON.stringify(jsondata),
      "beforeSend": function(){
        //@TODO use loading bar instead
        //disable our button or show loading bar
        $("#addItem").prop( "disabled", true);

      }
    }

    $.ajax(settings).done(function (response) {
      console.log(response);
      
      $("#addItem").prop( "disabled", false);
      
      //@TODO update frontend UI 
      $("#add-update-msg").show().fadeOut(3000);
      //update our list
      updateList();
    });
  });

//load list upon log in
  function loadList(limit = 30, all = true) {
  
    //[STEP 7]: Create our AJAX settings
    let settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://forgetmenot-7aac.restdb.io/rest/checklist",
      "method": "GET", 
      "headers": {
        "content-type": "application/json",
        "x-apikey": APIKEY,
        "cache-control": "no-cache"
      },
    }

    $.ajax(settings).done(function (response) {

      for (var i = 0; i < response.length && i < limit; i++) {
  document.getElementById("list").innerHTML += `${[i+1]}.${response[i].checklist}<br>`


      $("#totalItems").html(response.length);
      }
    });
  }

    function updateList(limit = 30, all = true) {
  
      //[STEP 7]: Create our AJAX settings
      let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://forgetmenot-7aac.restdb.io/rest/checklist",
        "method": "GET", 
        "headers": {
          "content-type": "application/json",
          "x-apikey": APIKEY,
          "cache-control": "no-cache"
        },
      }

      $.ajax(settings).done(function (response) {
        let i = response.length
        let lastItem = response[response.length- 1].checklist
       
    document.getElementById("list").innerHTML += ` ${i} ${lastItem } <br>   `

  
        $("#totalItems").html(response.length);
        
      });
    }
  
    

  











  /*$("#addItem").click(function (e) {
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
*/

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


//Checklist Page

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}


/*function displayExistingChecklist() {
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
*/

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