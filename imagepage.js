$(document).ready(function () {
  /* Open lightbox on button click */
  $(".lightbox-toggle img").click(function () {
    $(".backdrop")
      .animate({ opacity: ".50" }, 300, "linear")
      .css("display", "block");
    $(".box").fadeIn();

    //Check if lightbox has an image
    if ($(".box").contents("img")) {
      $(".box").contents().remove("img"); //If true, clear image
    }

    //Get text content in attribute
    var img = $(this).clone(); //Duplicate DOM element
            $(".box").append(img); //Insert duplicated element in another element
  });

  /* Click to close lightbox */
  $(".close, .backdrop").click(function () {
    $(".backdrop").animate({ opacity: "0" }, 300, "linear", function () {
      $(".backdrop").css("display", "none");
    });
    $(".box").fadeOut();
  });
});

var photos = [];
      var fileNames = [];
      var imageList = [];
      var image;
      var openList = "<li id = 'photo'>";
      var closeList = "</li>";
      var captions = [
        "Gigi",
        "Somi",
        "Sugar",
        "Bob",
        "Luna",
        "Paul",
        "Kimi",
        "Mochi",
        "Dudu",
        "Feifei",
      ];
      var captag = [];
      var descriptions = [
        "Lady",
        "Gentleman",
        "Lady",
        "Lady",
        "Lady",
        "Lady",
        "Gentleman",
        "Gentleman",
        "Gentleman",
        "Gentleman",
      ];
      var desctag = [];
      var texttag = [];
      var infoText = ["age: 6 months old","age: 10 months old","age: 3 years old","age: 2 years old","age: 1 years old",
      "age: 11 months old","age: 5 years old","age: 2 years old","age: 1 years old","age: 7 months old"];
      var infoCloseText = "Click to close";
      var openDesc = "<button id='dogdesc' onClick = 'displayInfo(" ;
      var openDescClose=")'>";
      var closeDesc = "</button>";
      var openatag = "<a href='#/'' class='lightbox-toggle'>";
      var closeatag = "</a>";

      //Create a loop to create 6 images starting with index of 0
      for (var i = 0; i < 10; i++) {
        fileNames.push("dog_pic" + (i + 1));
        photos.push(
          "<img src = 'images/" +
            fileNames[i] +
            ".jpg' alt = 'Dog photo " +
            (i + 1) +
            "' width = 640px> "
        );     //assemble full image elements
        captag.push("<span id='dogcap'>" + captions[i] + "</span>");
        desctag.push( openDesc + i + openDescClose +  descriptions[i] + closeDesc);
        image = openList  + captag[i] + openatag + photos[i] + closeatag+ desctag[i]  +closeList;
        imageList.push(image);
      }
      //Display all six images from the array in the album
      document.getElementById("album").innerHTML = imageList.join(" ");
      
      function displayInfo(i) {
        document.getElementById("infoBox").style.visibility = 'visible';
        document.getElementById("title").innerHTML = captions[i];
        document.getElementById("info").innerHTML = infoText[i];
        document.getElementById("closeInfo").innerHTML = infoCloseText;
      }
      var closeInfo = document.getElementById("closeInfo");
      closeInfo.addEventListener("click",hideInfo);
      function hideInfo() {
      document.getElementById("infoBox").style.visibility = 'hidden';
      }