function start(){
    if(!(localStorage.getItem("health") == 1 || localStorage.getItem("health") == 2 || localStorage.getItem("health") == 3)){
        resetTrack();
        localStorage.setItem("health", 3)
        localStorage.setItem("regain", 0)
        localStorage.setItem("remain", 130)
        document.getElementById("loss").style.width = "0px";
    }
    blocks();
    updateHealth();
    updateMana();
    updateWep("3")
    document.getElementById("rmntxt").innerHTML = `${localStorage.getItem("remain")}`
}

function saveLoss(){
    var currHealth = localStorage.getItem("health") - 1;
    localStorage.setItem("health", currHealth);
    if(localStorage.getItem("health") == 2){
        localStorage.setItem("regain", 5);
    }
    updateWep("2")
}

function updateHealth(){
    if(localStorage.getItem("health") == 3){
        document.getElementById("hearts").innerHTML = `
        <img style="width:160px;height:auto;position:absolute;top:140px;left:50px" src="assets/heart1.png" />
        <img style="width:160px;height:auto;position:absolute;top:140px;left:175px" src="assets/heart1.png" />
        <img style="width:160px;height:auto;position:absolute;top:140px;left:300px" src="assets/heart1.png" />
        `
    }
    else if(localStorage.getItem("health") == 2){
        document.getElementById("hearts").innerHTML = `
        <img style="width:160px;height:auto;position:absolute;top:140px;left:50px" src="assets/heart1.png" />
        <img style="width:160px;height:auto;position:absolute;top:140px;left:175px" src="assets/heart1.png" />
        <img style="width:160px;height:auto;position:absolute;top:140px;left:300px" src="assets/heart2.png" />
        `
    }
    else if(localStorage.getItem("health") == 1){
        document.getElementById("hearts").innerHTML = `
        <img style="width:160px;height:auto;position:absolute;top:140px;left:50px" src="assets/heart1.png" />
        <img style="width:160px;height:auto;position:absolute;top:140px;left:175px" src="assets/heart2.png" />
        <img style="width:160px;height:auto;position:absolute;top:140px;left:300px" src="assets/heart2.png" />
        `
    }
    else{
        document.getElementById("hearts").innerHTML = `
        <img style="width:160px;height:auto;position:absolute;top:140px;left:50px" src="assets/heart2.png" />
        <img style="width:160px;height:auto;position:absolute;top:140px;left:175px" src="assets/heart2.png" />
        <img style="width:160px;height:auto;position:absolute;top:140px;left:300px" src="assets/heart2.png" />
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
        if(localStorage.getItem("health") < 3){
            localStorage.setItem("regain", 5);
        }
        else{
            document.getElementById("regain").innerHTML = `
            <img style="width:100px;height:auto;position:absolute;top:280px;left:20px" src="assets/mana1.png" />
            <img style="width:100px;height:auto;position:absolute;top:280px;left:110px" src="assets/mana1.png" />
            <img style="width:100px;height:auto;position:absolute;top:280px;left:200px" src="assets/mana1.png" />
            <img style="width:100px;height:auto;position:absolute;top:280px;left:290px" src="assets/mana1.png" />
            <img style="width:100px;height:auto;position:absolute;top:280px;left:380px" src="assets/mana1.png" />
            `
        }
    }
    else if(localStorage.getItem("regain") == 1){
        document.getElementById("regain").innerHTML = `
        <img style="width:100px;height:auto;position:absolute;top:280px;left:20px" src="assets/mana1.png" />
        <img style="width:100px;height:auto;position:absolute;top:280px;left:110px" src="assets/mana1.png" />
        <img style="width:100px;height:auto;position:absolute;top:280px;left:200px" src="assets/mana1.png" />
        <img style="width:100px;height:auto;position:absolute;top:280px;left:290px" src="assets/mana1.png" />
        <img style="width:100px;height:auto;position:absolute;top:280px;left:380px" src="assets/mana2.png" />
        `
    }
    else if(localStorage.getItem("regain") == 2){
        document.getElementById("regain").innerHTML = `
        <img style="width:100px;height:auto;position:absolute;top:280px;left:20px" src="assets/mana1.png" />
        <img style="width:100px;height:auto;position:absolute;top:280px;left:110px" src="assets/mana1.png" />
        <img style="width:100px;heigh
        t:auto;position:absolute;top:280px;left:200px" src="assets/mana1.png" />
        <img style="width:100px;height:auto;position:absolute;top:280px;left:290px" src="assets/mana2.png" />
        <img style="width:100px;height:auto;position:absolute;top:280px;left:380px" src="assets/mana2.png" />
        `
    }
    else if(localStorage.getItem("regain") == 3){
        document.getElementById("regain").innerHTML = `
        <img style="width:100px;height:auto;position:absolute;top:280px;left:20px" src="assets/mana1.png" />
        <img style="width:100px;height:auto;position:absolute;top:280px;left:110px" src="assets/mana1.png" />
        <img style="width:100px;height:auto;position:absolute;top:280px;left:200px" src="assets/mana2.png" />
        <img style="width:100px;height:auto;position:absolute;top:280px;left:290px" src="assets/mana2.png" />
        <img style="width:100px;height:auto;position:absolute;top:280px;left:380px" src="assets/mana2.png" />
        `
    }
    else if(localStorage.getItem("regain") == 4){
        document.getElementById("regain").innerHTML = `
        <img style="width:100px;height:auto;position:absolute;top:280px;left:20px" src="assets/mana1.png" />
        <img style="width:100px;height:auto;position:absolute;top:280px;left:110px" src="assets/mana2.png" />
        <img style="width:100px;height:auto;position:absolute;top:280px;left:200px" src="assets/mana2.png" />
        <img style="width:100px;height:auto;position:absolute;top:280px;left:290px" src="assets/mana2.png" />
        <img style="width:100px;height:auto;position:absolute;top:280px;left:380px" src="assets/mana2.png" />
        `
    }
    else{
        document.getElementById("regain").innerHTML = `
        <img style="width:100px;height:auto;position:absolute;top:280px;left:20px" src="assets/mana2.png" />
        <img style="width:100px;height:auto;position:absolute;top:280px;left:110px" src="assets/mana2.png" />
        <img style="width:100px;height:auto;position:absolute;top:280px;left:200px" src="assets/mana2.png" />
        <img style="width:100px;height:auto;position:absolute;top:280px;left:290px" src="assets/mana2.png" />
        <img style="width:100px;height:auto;position:absolute;top:280px;left:380px" src="assets/mana2.png" />
        `
    }
    setTimeout(updateMana, 1000);
}

function saveWin(){
    var Weapons = JSON.parse(localStorage.getItem("weaponjoy"))
    var Weapon = localStorage.getItem("randomjoy")
    if(Weapon == "RESET"){
        resetTrack();
        localStorage.setItem('health', 3);
        localStorage.setItem('regain', 0);
        localStorage.setItem('remain', 130);
        document.getElementById('loss').style.width = '0px';
        document.getElementById('rmntxt').innerHTML = `${localStorage.getItem('remain')}`
        updateWep("2")
    }
    else {
        localStorage.setItem(Weapons[Weapon], "2");
        var left = localStorage.getItem("remain") - 1;
        if(left == 0){
            document.body.innerHTML = `u win yay`
        }
        else{
            localStorage.setItem("remain", left);
            document.getElementById("rmntxt").innerHTML = `${localStorage.getItem("remain")}`
            if(localStorage.getItem("health") < 3){
                var mana = localStorage.getItem("regain") - 1;
                localStorage.setItem("regain", mana);
            }
            Weapons.splice(Weapon, 1)
            localStorage.setItem("weaponjoy", JSON.stringify(Weapons));
            updateWep("2")
        }
    }
}

function resetBEW(){
    localStorage.setItem("randomjoy", "RESET")
    saveWin()
}