import button from "./education.html"

fetch("semesters.json")
.then(function(response){
    return response.json();
})
.then(function(semesters){
    let placeholder = document.querySelector("#data-output");
    let out = "";
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