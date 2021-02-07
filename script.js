// record the user's house door location

let points = localStorage.getItem("Points")  
document.getElementById("points").innerHTML = points

let checklist = localStorage.getItem("Checklist")
var checklistArr = checklist.split(',');
for (var i = 1; i < checklistArr.length; i++) {
  document.getElementById("list").innerHTML +=
    ` ${i} ${checklistArr[i] } <br>   `
}

document.getElementById("myForm").style.display = "none";


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




//Checklist page
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}









$(document).ready(function () {
  /* using arrays to create checklist*/
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

 

})
function displayChecklist(){
    let checklist = localStorage.getItem("Checklist")
    var checklistArr = checklist.split(',');
    let i = checklistArr.length - 1
    let lastItem = checklistArr[checklistArr.length-1]
      document.getElementById("list").innerHTML +=
        ` ${i} ${lastItem } <br>   `

  }

function addition() {

  let points = localStorage.getItem("Points")   

  if(isNaN(points)){
    let points = 0
    localStorage.setItem("Points", points);
    let oldpoints = localStorage.getItem("Points")    
    let oldPoints = parseInt(oldpoints)
    let newPoints = oldPoints + parseInt("5")
    localStorage.setItem("Points", newPoints);
    document.getElementById("points").innerHTML += newPoints

  }else{

  localStorage.setItem("Points", points);
  let oldpoints = localStorage.getItem("Points")    
  let oldPoints = parseInt(oldpoints)
  let newPoints = oldPoints + parseInt("5")
  localStorage.setItem("Points", newPoints);
  document.getElementById("points").innerHTML = newPoints
}


}