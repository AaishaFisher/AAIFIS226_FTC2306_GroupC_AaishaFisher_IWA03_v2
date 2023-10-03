const johannes = {

firstName: "Johannes",
surName: "Potgieter",
role: "Intern"

};

export const role = johannes.role;

let display= johannes.firstName + " " + johannes.surName + " (" + johannes.role + ")";
document.querySelector('#johannes').innerText = display;