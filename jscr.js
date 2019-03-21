function getAnimal() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var animal = JSON.parse(this.responseText);
        document.getElementById("test").innerHTML = animal.animals[0].name +
        " live on the " + animal.animals[0].live + ".<br />" +
        animal.animals[1].name + " live on the " + animal.animals[1].live + ".<br />" +
        animal.animals[2].name + " live on the " + animal.animals[2].live + ".<br />";
      }
    };
    xmlhttp.open("GET", "text.txt", true);
    xmlhttp.send();
    }
