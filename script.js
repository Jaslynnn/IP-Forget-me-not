



// record the user's house door location 
function recordPosition(){
  const successCallback = (position) =>{
      console.log(position);
  };
  const errorCallback = (error) =>{
      console.error(error);
  };
  
  const watchId1 = navigator.geolocation.getCurrentPosition(successCallback, errorCallback, {
      enableHighAccuracy: true,
      timeout: 7000
  });
  
  }
  
  
  // record the user's current location
  function currentLocation(){
  const successCallback = (position) =>{
      console.log(position);
  };
  const errorCallback = (error) =>{
      console.error(error);
  };
  const watchId2 = navigator.geolocation.watchPosition(successCallback, errorCallback);
  }




//Checklist page
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function openInstructions() {
  document.getElementById("label").style.display = "block";
}

function closeInstructions() {
  document.getElementById("label").style.display = "none";
}


function init() {
    if (localStorage.Checklist) {
      document.getElementById("list").value = localStorage.Checklist;
    }
  }




$(document).ready(function () {
/* using arrays to create checklist*/
$("#add-update-msg").hide();



$("#addItem").click(function(e){
  
  e.preventDefault(); 
let items= localStorage.getItem("Checklist")
let checklist =[items];
checklist.forEach(retreival);
  
function retreival() {
let Item = document.getElementById("addingItem").value
checklist.push(Item);
localStorage.setItem("Checklist", checklist); 
}




document.getElementById("list").innerHTML += localStorage.getItem("Checklist")
/*for (var i = 0; i < ChecklistR.length; i++) {

  document.getElementById("list").innerHTML += 
`<p> ${ChecklistR}</p> `  
  }*/
$("#add-update-msg").show().fadeOut(3000);

})



  /*const APIKEY = "60150aff6adfba69db8b6b87";
  updateList()
  $("#add-update-msg").hide();

  
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
      "method": "GET",
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







  })

  function updateList(limit = 10, all = true) {

    //[STEP 7]: Create our AJAX settings
    let settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://forgetmenot-7aac.restdb.io/rest/checklist",
      "method": "GET", // use GET to retrieve info
      "headers": {
        "content-type": "application/json",
        "x-apikey": APIKEY,
        "cache-control": "no-cache"
      },
    }
    $.ajax(settings).done(function (response) {

      let content = "";

      for (var i = 0; i < response.length && i < limit; i++) {
        content = `${response[i].checklist}`

      }

      $("#list").html(content);

      $("#total-items").html(response.length);
    })
  }

  

*/

})

