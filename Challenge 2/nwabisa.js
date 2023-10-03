const nwabisa = {
    firstName: 'Nwabisa',
    surName: 'Gabe',
    role: 'CEO'
};

export const role = nwabisa.role;

let display= nwabisa.firstName + " " + nwabisa.surName + " (" + nwabisa.role + ")"
document.querySelector('#nwabisa').innerText = display;