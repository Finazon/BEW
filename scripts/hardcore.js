function start(){
    if(!(localStorage.getItem("health") == 1)){
        resetTrack();
        localStorage.setItem("health", 3)
        localStorage.setItem("regain", 0)
        localStorage.setItem("remain", 120)
        document.getElementById("loss").style.width = "0px";
    }
    blocks();
    updateHealth();
    document.getElementById("rmntxt").innerHTML = `${localStorage.getItem("remain")}`
}

function saveLoss(){
    var currHealth = localStorage.getItem("health") - 1;
    localStorage.setItem("health", currHealth);
}

function updateHealth(){
    if(localStorage.getItem("health") == 1){
        document.getElementById("hearts").innerHTML = `
        <img style="width:300px;height:auto;position:absolute;top:110px;left:105px" src="assets/heart1.png" />
        `
    }
    else{
        document.getElementById("hearts").innerHTML = `
        <img style="width:160px;height:auto;position:absolute;top:140px;left:50px" src="assets/heart2.png" />
        `
        loss()
    }
    setTimeout(updateHealth, 1000);
}

function saveWin(){
    var Weapon = document.getElementById('boxWep').value
    if(Weapon == "RESET"){
        resetTrack();
        localStorage.setItem('health', 1);
        localStorage.setItem('remain', 120);
        document.getElementById('loss').style.width = '0px';
        document.getElementById('rmntxt').innerHTML = `${localStorage.getItem('remain')}`
    }
    else {
        localStorage.setItem(Weapon, "2");
        var left = localStorage.getItem("remain") - 1;
        localStorage.setItem("remain", left);
        document.getElementById("rmntxt").innerHTML = `${localStorage.getItem("remain")}`
    }
}