let cor = "";
function updateSemester(newSemester) { 
    cor = newSemester

    fetch(cor)
    .then(function(response){
        return response.json();
    })
    .then(function(semesters){
        let placeholder = document.querySelector("#data-output");
        let out = [];
        for(let semester of semesters){
            out += `
                <tr>
                    <td>${semester.name}</td>
                    <td>${semester.prefix}</td>
                    <td>${semester.languages}</td>
                    <td>${semester.grade}</td>
                </tr>
            `;
        }

        placeholder.innerHTML = out;
    });
}

function clearTable() { 
    var table = document.getElementById("table");
    var tbody = table.getElementsByTagName("tbody")[0];
    tbody.innerHTML = "";
    var header = document.getElementById("tableHeader");
    header.style.backgroundColor= "black";
    header.style.color = "white";
    header.textContent = "Select a Semester to begin!"
}

function changeTableHeaderPSU(input) { 
    var header = document.getElementById("tableHeader");
    header.style.backgroundColor = "darkblue";
    header.style.color = "white";
    header.textContent = input;
}

function changeTableHeaderWCU(input) { 
    var header = document.getElementById("tableHeader");
    header.style.backgroundColor= "purple";
    header.style.color = "gold";
    header.textContent = input;
}




function toggleTable(tableName) {
    var table = document.getElementById(tableName);
    
    if (table.style.display === "none") {
      table.style.display = "table";
    } else {
      table.style.display = "none";
    }
}

function toggleButtonIn(initialButton) {
    var button = document.getElementById(initialButton);
    
    if (button.style.display === "none") {
        button.style.display = "button";
    } else {
        button.style.display = "none";
    }
}

function toggleButtonH1(hideButton) {
    var button = document.getElementById(hideButton);
    
    if (button.style.display === "none") {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}

function toggleButtonS1(showButton) {
    var button = document.getElementById(showButton);
    
    if (button.style.display === "none") {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
}

function hideAllTables() { 
    var table = document.getElementById("PSU-1");
    table.style.display = "none";
    var table = document.getElementById("PSU-2");
    table.style.display = "none";
}

var set = 0
function toggleInitialTable(input){ 
    set += input;
    if (set === 1) { 
        var tables = ["PSU-1","PSU-2"];
        for (i=0; i<tables.length; i++) { 
            var table = document.getElementById(tables[i]);
        
            if (table.style.display === "none") {
            table.style.display = "table";
            } else {
            table.style.display = "none";
            }
        }
    }
    else {
        return
    }
}
