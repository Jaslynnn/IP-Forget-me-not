//Id consultation
//All animation
if (window.location.pathname == "/index.html") {
  FirstAnimation()
}
if (window.location.pathname == "/LogIn.html") {
  LogInAnimation()
}

if (window.location.pathname == "/SignUp.html") {
  SignUpAnimation()
}

if (window.location.pathname == "/tutorial.html") {
  TutorialAnimation()
}

if (window.location.pathname == "/home.html") {
  HomeAnimation()
}
if (window.location.pathname == "/Marketplace.html") {
  MarketplaceAnimation()
}
if (window.location.pathname == "/checklist.html") {
  ChecklistAnimation()
}
if (window.location.pathname == "/Settings.html") {
  SettingsAnimation()
}
function FirstAnimation() {
  const tl = gsap.timeline({
    defaults: {
      ease: "power1.out"
    }
  })
  tl.to('.text', {
    y: "0%",
    duration: 1.5,
    stagger: 0.25
  });
  tl.to(".slider1", {
    y: "-100%",
    duration: 1.5,
    delay: 0.5
  });
  tl.to(".intro", {
    y: "-100%",
    duration: 1
  }, "-=1");
  tl.fromTo(".name", {
    opacity: 0
  }, {
    opacity: 1,
    duration: 2
  }, "-=.5")

  tl.fromTo(".begin", {
    opacity: 0
  }, {
    opacity: 1,
    duration: 2
  }, "-=1")
}

function LogInAnimation() {
  const tl = gsap.timeline({
    defaults: {
      ease: "power1.out"
    }
  })
  tl.to('.logIn', {
    y: "13%",
    duration: 1
  });

}

function SignUpAnimation() {
  const tl = gsap.timeline({
    defaults: {
      ease: "power1.out"
    }
  })
  tl.to('.logIn', {
    y: "1%",
    duration: 1
  });

}

function TutorialAnimation() {

  const tl = gsap.timeline({
    defaults: {
      ease: "power1.out"
    }
  })

  tl.fromTo(".heading", {
    opacity: 0
  }, {
    opacity: 1,
    duration: 2
  })

  tl.to('.text', {
    y: "0%",
    duration: 2,
    stagger: 0.7
  },"-=2");

  tl.fromTo(".skip", {
    opacity: 0
  }, {
    opacity: 1,
    duration: 2
  },"-=4.5")

  tl.fromTo(".next", {
    opacity: 0
  }, {
    opacity: 1,
    duration: 2
  },"-=1")


}
//home page animation
function HomeAnimation() {

  const tl = gsap.timeline({
    defaults: {
      ease: "power1.out"
    }
  })

  tl.to(".slider2", {
    x: "-100%",
    duration: 1.2,
    delay: .9
  });

}
function MarketplaceAnimation() {

  const tl = gsap.timeline({
    defaults: {
      ease: "power1.out"
    }
  })

  tl.to(".slider2", {
    x: "-100%",
    duration: 2,
    delay: 1
  });

}
function ChecklistAnimation() {

  const tl = gsap.timeline({
    defaults: {
      ease: "power1.out"
    }
  })

  tl.to(".slider2", {
    x: "-100%",
    duration: 2,
    delay: 1.5
  });

}
function SettingsAnimation() {

  const tl = gsap.timeline({
    defaults: {
      ease: "power1.out"
    }
  })

  tl.to(".slider2", {
    x: "-100%",
    duration: .5,
    delay: 0
  });

}
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
    const amPmColorChange = parts.isAm ? "#F8C088" : "#D17173";
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
  const APIKEY = "60150aff6adfba69db8b6b87";

  notification()

  //
  $("#purchase-confirm1").hide();
  $("#purchase-confirm2").hide();
  $("#purchase-notice").hide();
  //shop page
  $("#Seed1").on("click", function (e) {
    e.preventDefault();
    $("#purchase-confirm1").show();
  })


  //deduct coins and add a plant to inventory  
  //Delete coins
  $("#Deduct5").on("click", function (e) {
    e.preventDefault();

    let coins = 5

    let jsondata = {
      "coins": coins,

    };

    let settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://forgetmenot-7aac.restdb.io/rest/coins",
      "method": "DELETE",
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
        $("#Deduct5").prop("disabled", true);

      }

    }


    $.ajax(settings).done(function (response) {
      console.log(response);

      $("#addPoints").prop("disabled", false);

      //@TODO update frontend UI 
      $("#add-coin-msg").show().fadeOut(3000);
      $("#purchase-confirm1").hide();
      //update our list
      updateCoins();

    });
  });



  $("#close1").on("click", function (e) {
    e.preventDefault();
    $("#purchase-confirm1").hide();

  })

  if (window.location.pathname == "/Marketplace.html") {
    loadSeeds()
  }


  $("#Deduct5").on("click", function (e) {
    e.preventDefault();

    let plants = 1

    let jsondata = {
      "plants": plants,

    };

    let settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://forgetmenot-7aac.restdb.io/rest/plants",
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
        $("#Deduct5").prop("disabled", true);

      }

    }


    $.ajax(settings).done(function (response) {
      console.log(response);

      $("#addPoints").prop("disabled", false);

      //@TODO update frontend UI 
      $("#add-coin-msg").show().fadeOut(3000);
      $("#purchase-confirm1").hide();
      //update our list
      loadSeeds()

    });
  });

  function loadSeeds(limit = 30, all = true) {
    let settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://forgetmenot-7aac.restdb.io/rest/plants",
      "method": "GET",
      "headers": {
        "content-type": "application/json",
        "x-apikey": APIKEY,
        "cache-control": "no-cache"
      },
    }

    $.ajax(settings).done(function (response) {
      $("#plantsCount").html(response.length);
      $("#plantsCount2").html(response.length);
      for (var i = 0; i < response.length && i < limit; i++) {
        document.getElementById("pills-home").innerHTML += `                    
        <div class="window">
        <p>Seed ${i+1}

        </p>
        <button type="submit" class="btn btn-secondary" id= story${i} >Backstory</button>
        </div>`


      }


    });


  }

  /*$("#Deduct5").click(function (e) {
    e.preventDefault();
    deductCoins1()
    $("#purchase-notice").show().fadeOut(4000);
    $("#purchase-confirm1").hide();
  })*/



  //Checklist page
  /* using arrays to create checklist*/




  //Sign up page
  $("#signUp").on("click", function (e) {

    const username = $("#Username").val()
    let email = $("#Email").val()
    let password = $("#Password").val()

    let jsondata = {
      "username": username,
      "email": email,
      "password": password,

    };
    let settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://forgetmenot-7aac.restdb.io/rest/accounts",
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
        $("#signUp").prop("disabled", true);

      }

    }


    $.ajax(settings).done(function (response) {
      console.log(response);

      $("#signUp").prop("disabled", false);

      //@TODO update frontend UI 
      alert("You have successfully signed up")
      $("#add-coin-msg").show().fadeOut(3000);
      //update our list

    });

  });


  if (window.location.pathname == "/checklist.html") {
    loadList()
  }



  loadCoins()
  $("#myForm").hide();
  $("#add-update-msg").hide();
  $("#add-coin-msg").hide();


  //Add coins
  $("#addPoints").on("click", function (e) {
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
      $("#points2").html(response.length * 5);


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
      $("#purchase-notice").show().fadeOut(3000);
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
/*function deductCoins1() {
  let coins = localStorage.getItem("Points")
  let finalPoints = parseInt(coins) - parseInt('5')
  localStorage.setItem("Points", finalPoints);
  document.getElementById("points").innerHTML = finalPoints
}
*/

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