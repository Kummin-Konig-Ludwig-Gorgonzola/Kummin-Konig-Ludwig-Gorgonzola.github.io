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
        cell1.innerHTML = `<strong class="cheesenese-writing">${item.cheese}</strong><br><span class="font-size-small">${item.cheese} • [${item.ipa}] • ${item.wordclass}</span>`;
        cell2.textContent = item.english;
      });
    }
  };
  xhr.send();

  var filterInput = document.getElementById('filterInput');
  filterInput.addEventListener('input', function () {
    var filterValue = this.value.toLowerCase();
    var rows = document.querySelectorAll("#data-table tbody tr");
    rows.forEach(function (row) {
      var cells = row.getElementsByTagName("td");
      var found = false;
      for (var i = 0; i < cells.length; i++) {
        var cellText = cells[i].textContent.toLowerCase();
        if (cellText.indexOf(filterValue) > -1) {
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
