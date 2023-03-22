var selectedRow= null;

function showAlert(message, className){
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div, main);

    setTimeout(() => document.querySelector(".alert").remove(),3000);

}

function clearFields(){
    document.querySelector("#fullNames").value = "";
    document.querySelector("#emailAddress").value = "";
    document.querySelector("#department").value = "";
    document.querySelector("#enrollNo").value = "";
    document.querySelector("#gender").value = "";
    

}

//add data
document.querySelector("#student-form").addEventListener("submit", (e) =>{
    e.preventDefault();

    const fullNames = document.querySelector("#fullNames").value;
    const emailAddress = document.querySelector("#emailAddress").value;
    const department = document.querySelector("#department").value;
    const enrollNo= document.querySelector("#enrollNo").value;
    const gender= document.querySelector("#gender").value;
    

    if(fullNames == "" || emailAddress == "" ||  department == "" || enrollNo == "" || gender == "" ){
        showAlert("Please fill in all fields", "danger");
    }
    else{
        if(selectedRow == null){
            const list = document.querySelector("#student-list");
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${fullNames}</td>
                <td>${emailAddress}</td>
                <td>${department}</td>
                <td>${enrollNo}</td>
                <td>${gender}</td>
                <td>
                <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
                <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
                </td>
            `;
            list.appendChild(row);
            selectedRow = null;
            showAlert("Student Added", "success");    

        }
        else{
            selectedRow.children[0].textContent = fullNames;
            selectedRow.children[1].textContent = emailAddress;
            selectedRow.children[2].textContent = department;
            selectedRow.children[3].textContent = enrollNo;
            selectedRow.children[4].textContent = gender;
            selectedRow = null;
            showAlert("Student Info Edited", "info");
        }

        clearFields();
    }
});
//edit data
document.querySelector("#student-list").addEventListener("click", (e) =>{
    target = e.target;
    if(target.classList.contains("edit")){
        selectedRow = target.parentElement.parentElement;
        document.querySelector("#fullNames").value = selectedRow.children[0].textContent;
        document.querySelector("#emailAddress").value = selectedRow.children[1].textContent;
        document.querySelector("#department").value = selectedRow.children[2].textContent;
        document.querySelector("#enrollNo").value = selectedRow.children[3].textContent;
        document.querySelector("#gender").value = selectedRow.children[4].textContent;
    }


});

//delete data
document.querySelector("#student-list").addEventListener("click", (e) =>{
    target = e.target;
    if(target.classList.contains("delete")){
        target.parentElement.parentElement.remove();
        showAlert("Student Data Deleted", "danger");
    }

});