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
        let newOut = [];
        let years = 1
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

function toggleTable() {
    var table = document.getElementById("PSU-1");
    
    if (table.style.display === "none") {
      table.style.display = "table";
    } else {
      table.style.display = "none";
    }
}

function toggleButtonIn() {
    var button = document.getElementById("initial_button1");
    
    if (button.style.display === "none") {
        button.style.display = "button";
    } else {
        button.style.display = "none";
    }
}

function toggleButtonH1() {
    var button = document.getElementById("hide_button1");
    
    if (button.style.display === "none") {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}

function toggleButtonS1() {
    var button = document.getElementById("show_button1");
    
    if (button.style.display === "none") {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
}