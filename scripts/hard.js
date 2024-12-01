function start(){
    if(!(localStorage.getItem("health") == 1 || localStorage.getItem("health") == 2 )){
        resetTrack();
        localStorage.setItem("health", 2)
        localStorage.setItem("regain", 0)
        localStorage.setItem("remain", 130)
        document.getElementById("loss").style.width = "0px";
    }
    blocks();
    updateHealth();
    updateMana();
    document.getElementById("rmntxt").innerHTML = `${localStorage.getItem("remain")}`
}

function saveLoss(){
    var currHealth = localStorage.getItem("health") - 1;
    localStorage.setItem("health", currHealth);
    if(localStorage.getItem("health") == 1){
        localStorage.setItem("regain", 7);
    }
}

function updateHealth(){
    if(localStorage.getItem("health") == 2){
        document.getElementById("hearts").innerHTML = `
        <img style="width:160px;height:auto;position:absolute;top:140px;left:100px" src="assets/heart1.png" />
        <img style="width:160px;height:auto;position:absolute;top:140px;left:250px" src="assets/heart1.png" />
        `
    }
    else if(localStorage.getItem("health") == 1){
        document.getElementById("hearts").innerHTML = `
        <img style="width:160px;height:auto;position:absolute;top:140px;left:100px" src="assets/heart1.png" />
        <img style="width:160px;height:auto;position:absolute;top:140px;left:250px" src="assets/heart2.png" />
        `
    }
    else{
        document.getElementById("hearts").innerHTML = `
        <img style="width:160px;height:auto;position:absolute;top:140px;left:100px" src="assets/heart2.png" />
        <img style="width:160px;height:auto;position:absolute;top:140px;left:250px" src="assets/heart2.png" />
        `
        loss()
    }
    setTimeout(updateHealth, 1000);
}

function updateMana(){
    if(localStorage.getItem("regain") == 0){
        if(localStorage.getItem("health") == 1){
            localStorage.setItem("health", 2);
        }
        else if(localStorage.getItem("health") < 2){
            localStorage.setItem("regain", 7);
        }
        else{
            document.getElementById("regain").innerHTML = `
            <img style="width:70px;height:auto;position:absolute;top:300px;left:20px" src="assets/mana1.png" />
            <img style="width:70px;height:auto;position:absolute;top:300px;left:85px" src="assets/mana1.png" />
            <img style="width:70px;height:auto;position:absolute;top:300px;left:150px" src="assets/mana1.png" />
            <img style="width:70px;height:auto;position:absolute;top:300px;left:215px" src="assets/mana1.png" />
            <img style="width:70px;height:auto;position:absolute;top:300px;left:280px" src="assets/mana1.png" />
            <img style="width:70px;height:auto;position:absolute;top:300px;left:345px" src="assets/mana1.png" />
            <img style="width:70px;height:auto;position:absolute;top:300px;left:410px" src="assets/mana1.png" />
            `
        }
    }
    else if(localStorage.getItem("regain") == 1){
        document.getElementById("regain").innerHTML = `
        <img style="width:70px;height:auto;position:absolute;top:300px;left:20px" src="assets/mana1.png" />
        <img style="width:70px;height:auto;position:absolute;top:300px;left:85px" src="assets/mana1.png" />
        <img style="width:70px;height:auto;position:absolute;top:300px;left:150px" src="assets/mana1.png" />
        <img style="width:70px;height:auto;position:absolute;top:300px;left:215px" src="assets/mana1.png" />
        <img style="width:70px;height:auto;position:absolute;top:300px;left:280px" src="assets/mana1.png" />
        <img style="width:70px;height:auto;position:absolute;top:300px;left:345px" src="assets/mana1.png" />
        <img style="width:70px;height:auto;position:absolute;top:300px;left:410px" src="assets/mana2.png" />
        `
    }
    else if(localStorage.getItem("regain") == 2){
        document.getElementById("regain").innerHTML = `
        <img style="width:70px;height:auto;position:absolute;top:300px;left:20px" src="assets/mana1.png" />
        <img style="width:70px;height:auto;position:absolute;top:300px;left:85px" src="assets/mana1.png" />
        <img style="width:70px;height:auto;position:absolute;top:300px;left:150px" src="assets/mana1.png" />
        <img style="width:70px;height:auto;position:absolute;top:300px;left:215px" src="assets/mana1.png" />
        <img style="width:70px;height:auto;position:absolute;top:300px;left:280px" src="assets/mana1.png" />
        <img style="width:70px;height:auto;position:absolute;top:300px;left:345px" src="assets/mana2.png" />
        <img style="width:70px;height:auto;position:absolute;top:300px;left:410px" src="assets/mana2.png" />
        `
    }
    else if(localStorage.getItem("regain") == 3){
        document.getElementById("regain").innerHTML = `
        <img style="width:70px;height:auto;position:absolute;top:300px;left:20px" src="assets/mana1.png" />
        <img style="width:70px;height:auto;position:absolute;top:300px;left:85px" src="assets/mana1.png" />
        <img style="width:70px;height:auto;position:absolute;top:300px;left:150px" src="assets/mana1.png" />
        <img style="width:70px;height:auto;position:absolute;top:300px;left:215px" src="assets/mana1.png" />
        <img style="width:70px;height:auto;position:absolute;top:300px;left:280px" src="assets/mana2.png" />
        <img style="width:70px;height:auto;position:absolute;top:300px;left:345px" src="assets/mana2.png" />
        <img style="width:70px;height:auto;position:absolute;top:300px;left:410px" src="assets/mana2.png" />
        `
    }
    else if(localStorage.getItem("regain") == 4){
        document.getElementById("regain").innerHTML = `
        <img style="width:70px;height:auto;position:absolute;top:300px;left:20px" src="assets/mana1.png" />
        <img style="width:70px;height:auto;position:absolute;top:300px;left:85px" src="assets/mana1.png" />
        <img style="width:70px;height:auto;position:absolute;top:300px;left:150px" src="assets/mana1.png" />
        <img style="width:70px;height:auto;position:absolute;top:300px;left:215px" src="assets/mana2.png" />
        <img style="width:70px;height:auto;position:absolute;top:300px;left:280px" src="assets/mana2.png" />
        <img style="width:70px;height:auto;position:absolute;top:300px;left:345px" src="assets/mana2.png" />
        <img style="width:70px;height:auto;position:absolute;top:300px;left:410px" src="assets/mana2.png" />
        `
    }
    else if(localStorage.getItem("regain") == 5){
        document.getElementById("regain").innerHTML = `
        <img style="width:70px;height:auto;position:absolute;top:300px;left:20px" src="assets/mana1.png" />
        <img style="width:70px;height:auto;position:absolute;top:300px;left:85px" src="assets/mana1.png" />
        <img style="width:70px;height:auto;position:absolute;top:300px;left:150px" src="assets/mana2.png" />
        <img style="width:70px;height:auto;position:absolute;top:300px;left:215px" src="assets/mana2.png" />
        <img style="width:70px;height:auto;position:absolute;top:300px;left:280px" src="assets/mana2.png" />
        <img style="width:70px;height:auto;position:absolute;top:300px;left:345px" src="assets/mana2.png" />
        <img style="width:70px;height:auto;position:absolute;top:300px;left:410px" src="assets/mana2.png" />
        `
    }
    else if(localStorage.getItem("regain") == 6){
        document.getElementById("regain").innerHTML = `
        <img style="width:70px;height:auto;position:absolute;top:300px;left:20px" src="assets/mana1.png" />
        <img style="width:70px;height:auto;position:absolute;top:300px;left:85px" src="assets/mana2.png" />
        <img style="width:70px;height:auto;position:absolute;top:300px;left:150px" src="assets/mana2.png" />
        <img style="width:70px;height:auto;position:absolute;top:300px;left:215px" src="assets/mana2.png" />
        <img style="width:70px;height:auto;position:absolute;top:300px;left:280px" src="assets/mana2.png" />
        <img style="width:70px;height:auto;position:absolute;top:300px;left:345px" src="assets/mana2.png" />
        <img style="width:70px;height:auto;position:absolute;top:300px;left:410px" src="assets/mana2.png" />
        `
    }
    else{
        document.getElementById("regain").innerHTML = `
        <img style="width:70px;height:auto;position:absolute;top:300px;left:20px" src="assets/mana2.png" />
        <img style="width:70px;height:auto;position:absolute;top:300px;left:85px" src="assets/mana2.png" />
        <img style="width:70px;height:auto;position:absolute;top:300px;left:150px" src="assets/mana2.png" />
        <img style="width:70px;height:auto;position:absolute;top:300px;left:215px" src="assets/mana2.png" />
        <img style="width:70px;height:auto;position:absolute;top:300px;left:280px" src="assets/mana2.png" />
        <img style="width:70px;height:auto;position:absolute;top:300px;left:345px" src="assets/mana2.png" />
        <img style="width:70px;height:auto;position:absolute;top:300px;left:410px" src="assets/mana2.png" />
        `
    }
    setTimeout(updateMana, 1000);
}

function saveWin(){
    var Weapon = document.getElementById('boxWep').value
    if(Weapon == "RESET"){
        resetTrack();
        localStorage.setItem('health', 2);
        localStorage.setItem('regain', 0);
        localStorage.setItem('remain', 130);
        document.getElementById('loss').style.width = '0px';
        document.getElementById('rmntxt').innerHTML = `${localStorage.getItem('remain')}`
    }
    else {
        localStorage.setItem(Weapon, "2");
        var left = localStorage.getItem("remain") - 1;
        localStorage.setItem("remain", left);
        document.getElementById("rmntxt").innerHTML = `${localStorage.getItem("remain")}`
        if(localStorage.getItem("health") < 2){
            var mana = localStorage.getItem("regain") - 1;
            localStorage.setItem("regain", mana);
        }
    }
}