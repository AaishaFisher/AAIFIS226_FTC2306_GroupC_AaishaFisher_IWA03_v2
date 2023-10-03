 const alex = {
 
 firstname: "Alex",
 surname: "Naidoo",
 role: "Head of Marketing"

};

export const role = alex.role;

let display= alex.firstname + " " + alex.surname + " (" + alex.role + ")";
document.querySelector('#alex').innerText = display
