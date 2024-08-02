
const ApiUrl = "https://randomuser.me/api/";

function renderUser(){
    fetch(ApiUrl)
    .then(response => response.json())
    .then(data =>{
        console.log(data);
        const user = data.results[0];
        const newWrapper = document.querySelector(".wrapper");
        newWrapper.innerHTML = `<h1>Gender ${user.gender}</h1>
        <h2>Name:${user.name.first}</h2>
        <h3>Location:${user.location.street.name}</h3>
        <h4>Email:${user.email}</h4>
        <img src="${user.picture.large}" alt="User Image">
        <h5>Age:${user.dob.age}</h5>
        <h5>Phone number:${user.phone}</h5>`
        const newBtn = document.querySelector(".btn");
        newBtn.addEventListener("click", renderUser);
    })
    
}
renderUser()