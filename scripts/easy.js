function start(){
    if(!(localStorage.getItem("health") >= 1 && localStorage.getItem("health") <= 5)){
        resetTrack();
        localStorage.setItem("health", 5)
        localStorage.setItem("regain", 0)
        localStorage.setItem("remain", 120)
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
    if(localStorage.getItem("health") == 4){
        localStorage.setItem("regain", 3);
    }
}

function updateHealth(){
    if(localStorage.getItem("health") == 5){
        document.getElementById("hearts").innerHTML = `
        <img style="width:140px;height:auto;position:absolute;top:150px;left:19px" src="assets/heart1.png" />
        <img style="width:140px;height:auto;position:absolute;top:150px;left:102px" src="assets/heart1.png" />
        <img style="width:140px;height:auto;position:absolute;top:150px;left:185px" src="assets/heart1.png" />
        <img style="width:140px;height:auto;position:absolute;top:150px;left:268px" src="assets/heart1.png" />
        <img style="width:140px;height:auto;position:absolute;top:150px;left:351px" src="assets/heart1.png" />
        `
    }
    else if(localStorage.getItem("health") == 4){
        document.getElementById("hearts").innerHTML = `
        <img style="width:140px;height:auto;position:absolute;top:150px;left:19px" src="assets/heart1.png" />
        <img style="width:140px;height:auto;position:absolute;top:150px;left:102px" src="assets/heart1.png" />
        <img style="width:140px;height:auto;position:absolute;top:150px;left:185px" src="assets/heart1.png" />
        <img style="width:140px;height:auto;position:absolute;top:150px;left:268px" src="assets/heart1.png" />
        <img style="width:140px;height:auto;position:absolute;top:150px;left:351px" src="assets/heart2.png" />
        `
    }
    else if(localStorage.getItem("health") == 3){
        document.getElementById("hearts").innerHTML = `
        <img style="width:140px;height:auto;position:absolute;top:150px;left:19px" src="assets/heart1.png" />
        <img style="width:140px;height:auto;position:absolute;top:150px;left:102px" src="assets/heart1.png" />
        <img style="width:140px;height:auto;position:absolute;top:150px;left:185px" src="assets/heart1.png" />
        <img style="width:140px;height:auto;position:absolute;top:150px;left:268px" src="assets/heart2.png" />
        <img style="width:140px;height:auto;position:absolute;top:150px;left:351px" src="assets/heart2.png" />
        `
    }
    else if(localStorage.getItem("health") == 2){
        document.getElementById("hearts").innerHTML = `
        <img style="width:140px;height:auto;position:absolute;top:150px;left:19px" src="assets/heart1.png" />
        <img style="width:140px;height:auto;position:absolute;top:150px;left:102px" src="assets/heart1.png" />
        <img style="width:140px;height:auto;position:absolute;top:150px;left:185px" src="assets/heart2.png" />
        <img style="width:140px;height:auto;position:absolute;top:150px;left:268px" src="assets/heart2.png" />
        <img style="width:140px;height:auto;position:absolute;top:150px;left:351px" src="assets/heart2.png" />
        `
    }
    else if(localStorage.getItem("health") == 1){
        document.getElementById("hearts").innerHTML = `
        <img style="width:140px;height:auto;position:absolute;top:150px;left:19px" src="assets/heart1.png" />
        <img style="width:140px;height:auto;position:absolute;top:150px;left:102px" src="assets/heart2.png" />
        <img style="width:140px;height:auto;position:absolute;top:150px;left:185px" src="assets/heart2.png" />
        <img style="width:140px;height:auto;position:absolute;top:150px;left:268px" src="assets/heart2.png" />
        <img style="width:140px;height:auto;position:absolute;top:150px;left:351px" src="assets/heart2.png" />
        `
    }
    else{
        document.getElementById("hearts").innerHTML = `
        <img style="width:140px;height:auto;position:absolute;top:150px;left:19px" src="assets/heart2.png" />
        <img style="width:140px;height:auto;position:absolute;top:150px;left:102px" src="assets/heart2.png" />
        <img style="width:140px;height:auto;position:absolute;top:150px;left:185px" src="assets/heart2.png" />
        <img style="width:140px;height:auto;position:absolute;top:150px;left:268px" src="assets/heart2.png" />
        <img style="width:140px;height:auto;position:absolute;top:150px;left:351px" src="assets/heart2.png" />
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
        else if(localStorage.getItem("health") == 2){
            localStorage.setItem("health", 3);
        }
        else if(localStorage.getItem("health") == 3){
            localStorage.setItem("health", 4);
        }
        else if(localStorage.getItem("health") == 4){
            localStorage.setItem("health", 5);
        }
        if(localStorage.getItem("health") < 5){
            localStorage.setItem("regain", 3);
        }
        else{
            document.getElementById("regain").innerHTML = `
            <img style="width:100px;height:auto;position:absolute;top:280px;left:110px" src="assets/mana1.png" />
            <img style="width:100px;height:auto;position:absolute;top:280px;left:200px" src="assets/mana1.png" />
            <img style="width:100px;height:auto;position:absolute;top:280px;left:290px" src="assets/mana1.png" />
            `
        }
    }
    else if(localStorage.getItem("regain") == 1){
        document.getElementById("regain").innerHTML = `
        <img style="width:100px;height:auto;position:absolute;top:280px;left:110px" src="assets/mana1.png" />
        <img style="width:100px;height:auto;position:absolute;top:280px;left:200px" src="assets/mana1.png" />
        <img style="width:100px;height:auto;position:absolute;top:280px;left:290px" src="assets/mana2.png" />
        `
    }
    else if(localStorage.getItem("regain") == 2){
        document.getElementById("regain").innerHTML = `
        <img style="width:100px;height:auto;position:absolute;top:280px;left:110px" src="assets/mana1.png" />
        <img style="width:100px;height:auto;position:absolute;top:280px;left:200px" src="assets/mana2.png" />
        <img style="width:100px;height:auto;position:absolute;top:280px;left:290px" src="assets/mana2.png" />
        `
    }
    else{
        document.getElementById("regain").innerHTML = `
        <img style="width:100px;height:auto;position:absolute;top:280px;left:110px" src="assets/mana2.png" />
        <img style="width:100px;height:auto;position:absolute;top:280px;left:200px" src="assets/mana2.png" />
        <img style="width:100px;height:auto;position:absolute;top:280px;left:290px" src="assets/mana2.png" />
        `
    }
    setTimeout(updateMana, 1000);
}

function saveWin(){
    var Weapon = document.getElementById('boxWep').value
    if(Weapon == "RESET"){
        resetTrack();
        localStorage.setItem('health', 5);
        localStorage.setItem('regain', 0);
        localStorage.setItem('remain', 120);
        document.getElementById('loss').style.width = '0px';
        document.getElementById('rmntxt').innerHTML = `${localStorage.getItem('remain')}`
    }
    else {
        localStorage.setItem(Weapon, "2");
        var left = localStorage.getItem("remain") - 1;
        localStorage.setItem("remain", left);
        document.getElementById("rmntxt").innerHTML = `${localStorage.getItem("remain")}`
        if(localStorage.getItem("health") < 5){
            var mana = localStorage.getItem("regain") - 1;
            localStorage.setItem("regain", mana);
        }
    }
}