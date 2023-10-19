function searchTable() {
    let input, filter, table, tr, td, i, j, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("studentsTable");
    tr = table.getElementsByTagName("tr");
  
    for (i = 1; i < tr.length; i++) {
        tr[i].style.display = "none";  // Initially hide all rows
        td = tr[i].getElementsByTagName("td");
        for (j = 0; j < td.length; j++) {
            if (td[j]) {
                if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = ""; // Display rows that match
                    break;
                }
            }
        }
    }
}
