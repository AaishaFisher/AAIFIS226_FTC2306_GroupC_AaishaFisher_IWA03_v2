const johannes = {

firstName: "Johannes",
surName: "Potgieter",
role: "Intern"

};

let display= johannes.firstName + " " + johannes.surName + " (" + johannes.role + ")";
document.querySelector('#johannes').innerText = display;