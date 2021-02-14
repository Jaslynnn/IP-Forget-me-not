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

//clock and color changing
class DigitalClock {
  constructor(element) {
    this.element = element;
  }

  start() {
    this.update();
    setInterval(() => {
      this.update();

    }, 500)
  }


  update() {

    const parts = this.getTimeParts();
    const minuteFormatted = parts.minute.toString().padStart(2, "0");
    const timeFormatted = `${parts.hour}: ${minuteFormatted}`;
    const amPm = parts.isAm ? "AM" : "PM";
    const amPmColorChange = parts.isAm ? "pink" : "lightblue";
    const greeting = parts.morning ? "Good Morning" : "Good afternoon";
    document.querySelector("body").style.backgroundColor = amPmColorChange;
    this.element.querySelector(".clock-Time").textContent = timeFormatted;
    this.element.querySelector(".clock-ampm").textContent = amPm;
    this.element.querySelector(".greeting").textContent = greeting;
  }

  getTimeParts() {
    const now = new Date();

    return {

      hour: now.getHours() % 12 || 12,
      minute: now.getMinutes(),
      isAm: now.getHours() < 12,
      morning: now.getHours() < 12,
      evening: now.getHours() < 12
    };
  }



}

const clockElement = document.querySelector(".clock")
const clockObject = new DigitalClock(clockElement);

clockObject.start()

//end of clock

//jquery

$(document).ready(function () {
  //Home page


  notification()

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
  loadCoins()
  $("#myForm").hide();
  $("#add-update-msg").hide();
  $("#add-coin-msg").hide();


  //Add coins
  $("#addPoints").on("click", function (e){
    e.preventDefault();

    let coins = 5

    let jsondata = {
      "coins": coins,

    };

    let settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://forgetmenot-7aac.restdb.io/rest/coins",
      "method": "POST",
      "headers": {
        "content-type": "application/json",
        "x-apikey": APIKEY,
        "cache-control": "no-cache"
      },

      "processData": false,
      "data": JSON.stringify(jsondata),
      "beforeSend": function () {
        //@TODO use loading bar instead
        //disable our button or show loading bar
        $("#addPoints").prop("disabled", true);

      }

  }


  $.ajax(settings).done(function (response) {
    console.log(response);

    $("#addPoints").prop("disabled", false);

    //@TODO update frontend UI 
    $("#add-coin-msg").show().fadeOut(3000);
    //update our list
    updateCoins();
  });
});


function loadCoins(limit = 30, all = true) {
  //load Coins upon log in
 //[STEP 7]: Create our AJAX settings
 let settings = {
   "async": true,
   "crossDomain": true,
   "url": "https://forgetmenot-7aac.restdb.io/rest/coins",
   "method": "GET",
   "headers": {
     "content-type": "application/json",
     "x-apikey": APIKEY,
     "cache-control": "no-cache"
   },
 }
 
 $.ajax(settings).done(function (response) {
 
     $("#points").html(response.length * 5);
 
 
 });

}


function updateCoins(limit = 30, all = true) {
 //load Coins upon log in
let settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://forgetmenot-7aac.restdb.io/rest/coins",
  "method": "GET",
  "headers": {
    "content-type": "application/json",
    "x-apikey": APIKEY,
    "cache-control": "no-cache"
  },
}

$.ajax(settings).done(function (response) {

    $("#points").html(response.length * 5);


});

}






//AddItem
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
      "beforeSend": function () {
        // use loading bar instead
        //disable our button or show loading bar
        $("#addItem").prop("disabled", true);

      }
    }

    $.ajax(settings).done(function (response) {
      console.log(response);

      $("#addItem").prop("disabled", false);

      //update frontend UI 
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
      let lastItem = response[response.length - 1].checklist

      document.getElementById("list").innerHTML += ` ${i} ${lastItem } <br>   `


      $("#totalItems").html(response.length);

    });
  }






  /* function to add points*/
  /*$("#addPoints").click(function (e) {
    e.preventDefault();
    addition()
    $("#add-coin-msg").show().fadeOut(4000);
  })

  //Settings page
  $("#homeLocator").click(function (e) {
    recordPosition()
  })

*/
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


/*function addition() {

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
//Beginning will run the record current position
//when pressed the home button the record position activates
//big function has-
//Record position inactive function
//current position inactive function
//If comparison if Record == current, show alert

var id, target, options;

function success(pos) {
  var crd = pos.coords;

  if (target.latitude === crd.latitude && target.longitude === crd.longitude) {
    console.log('Congratulations, you reached the target');
    navigator.geolocation.clearWatch(id);
  }
}

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
}

target = {
  latitude: 0,
  longitude: 0
};

options = {
  enableHighAccuracy: false,
  timeout: 5000,
  maximumAge: 0
};

id = navigator.geolocation.watchPosition(success, error, options);

function notification() {

  var home = recordPosition()
  var current = currentLocation()

  currentLocation()
  if (home == current) {
    alert("would you like to proceed the the checklist page?")

  } else {
    console.log("nothing")
  }

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

    return watchId1

  }

  function currentLocation() {
    const successCallback = (position) => {
      console.log(position);
    };
    const errorCallback = (error) => {
      console.error(error);
    };

    const watchId2 = navigator.geolocation.watchPosition(successCallback, errorCallback, {
      enableHighAccuracy: true,
      timeout: 7000
    });
    return watchId2

  }
  // record the user's house door location


  // record the user's current location




}