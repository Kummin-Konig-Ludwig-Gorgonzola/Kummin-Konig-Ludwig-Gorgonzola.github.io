document.addEventListener("DOMContentLoaded", function () {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "words.json", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var data = JSON.parse(xhr.responseText);
      var tableBody = document.getElementById("data-table").getElementsByTagName("tbody")[0];
      data.forEach(function (item) {
        var row = tableBody.insertRow();
        var cell1 = row.insertCell(0);
        //var cheeses=[];
        //cheeses.append(item.cheese);
        cell1.innerHTML = `<strong class="cheesenese-writing">${item.cheese}</strong> • <span style="font-size: small">${item.cheese} • [${item.ipa}] • ${item.wordclass}</span>`;  
      });
      //console.log(cheeses[i])
    }
  };
  xhr.send();

  var filterInput = document.getElementById('filterInput');
  filterInput.addEventListener('input', function () {
    var filterValue = this.value.toLowerCase();
    var rows = document.querySelectorAll("#data-table tbody tr");
    function deaccent(plaint){
      let plaintxt=plaint;
      let output=""
      for (let i=0;i<plaintxt.length;i++){
        if (plaintxt[i] =="é"){
            output=output+"e";
        }else if (plaintxt[i] =="á"){
            output=output+"a";
        }else if (plaintxt[i] =="ó"){
            output=output+"o";
        }else if (plaintxt[i] =="í"){
            output=output+"i";
        }else if (plaintxt[i] =="ú"){
            output=output+"u";
        }else if (plaintxt[i] !=" "){
            output=output+plaintxt[i];
        }
      }
      return output;
    }
    rows.forEach(function (row) {
      var cells = row.getElementsByTagName("td");
      var found = false;
      for (var i = 0; i < cells.length; i++) {
        match=0;
        var cellText = deaccent(cells[i].textContent.toLowerCase());
        var cheese  = "";
        for (var i=0;i<cellText.length;i++){ 
          if (cellText[i]=="•"){ 
            break; 
          } 
          else{ 
            cheese=cheese+cellText[i]; 
          } 
        } 
        cheese=deaccent(cheese);
        for (var i=0; i<filterValue.length;i++){
          console.log(filterValue[filterValue.length-i-1],"versus",cheese[cheese.length-i-1]);
           if (filterValue[filterValue.length-i-1]==cheese[cheese.length-i-1]){;
            match++;
          }
          console.log(match, cheese);
        }
        if (match==filterValue.length){
          found = true;
        }
      
      if (found) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }}
    });
  });
});
