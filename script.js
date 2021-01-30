function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

$(document).ready(function () {


  const APIKEY = "60150aff6adfba69db8b6b87";
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
      "method": "GET", //[cher] we will use GET to retrieve info
      "headers": {
        "content-type": "application/json",
        "x-apikey": APIKEY,
        "cache-control": "no-cache"
      },
    }
    $.ajax(settings).done(function (response) {

      let content = "";

      for (var i = 0; i < response.length && i < limit; i++) {
        content = `${response[i].item}`

      }

      $("#list").html(content);

      $("#total-items").html(response.length);
    })
  }

  



})

