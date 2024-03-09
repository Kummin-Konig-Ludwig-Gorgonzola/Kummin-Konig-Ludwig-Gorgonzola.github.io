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
        cell1.innerHTML = '<strong>' + item.cheese + '</strong> <span style="font-size: small;">' + item.wordclass + '</span>';
        cell2.textContent = item.english;
      });
    }
  };
  xhr.send();
});
