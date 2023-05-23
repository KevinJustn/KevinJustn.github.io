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
