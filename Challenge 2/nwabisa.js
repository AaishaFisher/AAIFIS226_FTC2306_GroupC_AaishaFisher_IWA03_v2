const nwabisa = {
    firstName: 'Nwabisa',
    surName: 'Gabe',
    role: 'CEO'
};

// const firstname = "Nwabisa";
// const surname = "Gabe";
// const role = "CEO";

let display= nwabisa.firstName + " " + nwabisa.surName + " (" + nwabisa.role + ")"

console.log(display);
document.querySelector('#nwabisa').innerText = display;