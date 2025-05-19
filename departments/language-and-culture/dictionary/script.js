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
        var cell2 = row.insertCell(1);
        function zealify(plaintxt){
          var zealtxt = "";
          for (let i=0;i<plaintxt.length;i++){
              if (plaintxt[i]=="i"){
                  zealtxt=zealtxt+"u";
              }
              else if (plaintxt[i]=="a"){
                  zealtxt=zealtxt+"e";
              }
              else if (plaintxt[i]=="e"){
                  zealtxt=zealtxt+"i";
              }
              else if (plaintxt[i]=="u"){
                  zealtxt=zealtxt+"a";
              }
              else if (plaintxt[i]=="I"){
                  zealtxt=zealtxt+"U";
              }
              else if (plaintxt[i]=="A"){
                  zealtxt=zealtxt+"E";
              }
              else if (plaintxt[i]=="E"){
                  zealtxt=zealtxt+"I";
              }
              else if (plaintxt[i]=="U"){
                  zealtxt=zealtxt+"A";
              }
              else{
                  zealtxt=zealtxt+plaintxt[i];
              }
          } 
          return zealtxt;
      }
        cell1.innerHTML = `<strong class="cheesenese-writing">${item.cheese}</strong> • <span style="font-size: small">${item.cheese} • [${item.ipa}] • ${item.wordclass}</span>`;
        cell2.innerHTML = `<strong class="cheesenese-writing zealify">${zealify(item.english)}</strong>`;
      });
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
        }else{
            output=output+plaintxt[i];
        }
      }
      return output;
    }
    rows.forEach(function (row) {
      var cells = row.getElementsByTagName("td");
      var found = false;
      for (var i = 0; i < cells.length; i++) {
        var cellText = deaccent(cells[i].textContent.toLowerCase());
        var cheese  = "";
        var english = "";
        var count=0;
        for (var i=0;i<cellText.length;i++){ 
          if (cellText[i]=="•"){ 
            count=count+1
          } 
          else if(count==0){ 
            cheese=cheese+cellText[i]; 
          } 
          else if(count==2){
            english=english+cellText[i];
          }
        } 
        console.log(english);
        if (cheese.indexOf(deaccent(filterValue)) > -1) {
          found = true;
          break;
        }
      }
      if (found) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    });
  });
});

function cheeseToIpa(cheese) {
  ipa = "";
  cheese.forEach((letter, i) => {
    if (letter == "a") {
      if (cheese[i+1] == "a") ipa += "aː"
      else ipa += "a"
    }
  })
  return ipa;
}
