var settings = document.querySelector(".settings");
var darkB = document.getElementById("dark");

function settingsToogle(){
    settings.classList.toggle("settings-height");
}
darkB.onclick = function(){
    darkB.classList.toggle("dark-on");
    document.body.classList.toggle("dark-theme");

    if(localStorage.getItem("theme")=="light"){
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    } 
}

if(localStorage.getItem("theme")=="light"){
    darkB.classList.remove("dark-on");
    document.body.classList.remove("dark-theme");
} else if (localStorage.getItem("theme")=="dark"){
    darkB.classList.add("dark-on");
    document.body.classList.add("dark-theme");
} else {
    localStorage.setItem("theme", "light");
}

//localStorage.setItem("theme", "dark");//entre quiene se van a cambiar
//localStorage.getItem("theme");//El original