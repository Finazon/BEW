function blocks(){
    setTimeout(barOne, 1000)
    setTimeout(openbar, 5000)
    setTimeout(barOne, 20000)
    setTimeout(closebar, 35000)
    setTimeout(barTwo, 36000)
    setTimeout(openbar, 50000)
    setTimeout(barTwo, 65000)
    setTimeout(closebar, 80000)
    setTimeout(barTre, 81000)
    setTimeout(openbar, 95000)
    setTimeout(barTre, 110000)
    setTimeout(closebar, 125000)
    setTimeout(barFor, 126000)
    setTimeout(openbar, 140000)
    setTimeout(barFor, 155000)
    setTimeout(closebar, 170000)
    setTimeout(blocks, 180000)
}

function barOne(){
    document.getElementById("sidebar").style.backgroundColor = "#ab1c1c"
    document.getElementById("sidebar").innerHTML = `
        <img class="wep${localStorage.getItem("52 Gal")}" src="Weapons s3/52 Gal.png" />
        <img class="wep${localStorage.getItem("52 Gal Deco")}" src="Weapons s3/52 Gal Deco.png" />
        <img class="wep${localStorage.getItem("96 Gal")}" src="Weapons s3/96 Gal.png" />
        <img class="wep${localStorage.getItem("96 Gal Deco")}" src="Weapons s3/96 Gal Deco.png" />
        <img class="wep${localStorage.getItem("Aerospray MG")}" src="Weapons s3/Aerospray MG.png" />
        <img class="wep${localStorage.getItem("Aerospray RG")}" src="Weapons s3/Aerospray RG.png" />
        <img class="wep${localStorage.getItem("Splattershot Nova")}" src="Weapons s3/Splattershot Nova.png" />
        <img class="wep${localStorage.getItem("Annaki Splattershot Nova")}" src="Weapons s3/Annaki Splattershot Nova.png" />
        <img class="wep${localStorage.getItem("Jet Squelcher")}" src="Weapons s3/Jet Squelcher.png" />
        <img class="wep${localStorage.getItem("Custom Jet Squelcher")}" src="Weapons s3/Custom Jet Squelcher.png" />
        <img class="wep${localStorage.getItem("Splattershot Jr.")}" src="Weapons s3/Splattershot Jr..png" />
        <img class="wep${localStorage.getItem("Custom Splattershot Jr.")}" src="Weapons s3/Custom Splattershot Jr..png" />
        <img class="wep${localStorage.getItem("Splattershot Pro")}" src="Weapons s3/Splattershot Pro.png" />
        <img class="wep${localStorage.getItem("Forge Splattershot Pro")}" src="Weapons s3/Forge Splattershot Pro.png" />
        <img class="wep${localStorage.getItem("N-ZAP 85")}" src="Weapons s3/N-ZAP 85.png" />
        <img class="wep${localStorage.getItem("N-ZAP 89")}" src="Weapons s3/N-ZAP 89.png" />
        <img class="wep${localStorage.getItem("Splash-O-Matic")}" src="Weapons s3/Splash-O-Matic.png" />
        <img class="wep${localStorage.getItem("Neo Splash-O-Matic")}" src="Weapons s3/Neo Splash-O-Matic.png" />
        <img class="wep${localStorage.getItem("Sploosh-O-Matic")}" src="Weapons s3/Sploosh-O-Matic.png" />
        <img class="wep${localStorage.getItem("Neo Sploosh-O-Matic")}" src="Weapons s3/Neo Sploosh-O-Matic.png" />
        <img class="wep${localStorage.getItem("Splattershot")}" src="Weapons s3/Splattershot.png" />
        <img class="wep${localStorage.getItem("Tentatek Splattershot")}" src="Weapons s3/Tentatek Splattershot.png" />
        <img class="wep${localStorage.getItem("Squeezer")}" src="Weapons s3/Squeezer.png" />
        <img class="wep${localStorage.getItem("Foil Squeezer")}" src="Weapons s3/Foil Squeezer.png" />
        <img class="wep${localStorage.getItem("H-3 Nozzlenose")}" src="Weapons s3/H-3 Nozzlenose.png" />
        <img class="wep${localStorage.getItem("H-3 Nozzlenose D")}" src="Weapons s3/H-3 Nozzlenose D.png" />
        <img class="wep${localStorage.getItem("L-3 Nozzlenose")}" src="Weapons s3/L-3 Nozzlenose.png" />
        <img class="wep${localStorage.getItem("L-3 Nozzlenose D")}" src="Weapons s3/L-3 Nozzlenose D.png" />
        <img class="wep${localStorage.getItem("Splatana Stamper")}" src="Weapons s3/Splatana Stamper.png" />
        <img class="wep${localStorage.getItem("Splatana Stamper Nouveau")}" src="Weapons s3/Splatana Stamper Nouveau.png" />
        <img class="wep${localStorage.getItem("Splatana Wiper")}" src="Weapons s3/Splatana Wiper.png" />
        <img class="wep${localStorage.getItem("Splatana Wiper Deco")}" src="Weapons s3/Splatana Wiper Deco.png" />
        <img class="wep${localStorage.getItem("Mint Decavitator")}" src="Weapons s3/Mint Decavitator.png" />
        <img class="wep${localStorage.getItem("Charcoal Decavitator")}" src="Weapons s3/Charcoal Decavitator.png" />
    `
}

function barTwo(){
    document.getElementById("sidebar").style.backgroundColor = "#b6b23c"
    document.getElementById("sidebar").innerHTML = `
        <img class="wep${localStorage.getItem("Blaster")}" src="Weapons s3/Blaster.png" />
        <img class="wep${localStorage.getItem("Custom Blaster")}" src="Weapons s3/Custom Blaster.png" />
        <img class="wep${localStorage.getItem("Clash Blaster")}" src="Weapons s3/Clash Blaster.png" />
        <img class="wep${localStorage.getItem("Clash Blaster Neo")}" src="Weapons s3/Clash Blaster Neo.png" />
        <img class="wep${localStorage.getItem("Luna Blaster")}" src="Weapons s3/Luna Blaster.png" />
        <img class="wep${localStorage.getItem("Luna Blaster Neo")}" src="Weapons s3/Luna Blaster Neo.png" />
        <img class="wep${localStorage.getItem("Range Blaster")}" src="Weapons s3/Range Blaster.png" />
        <img class="wep${localStorage.getItem("Custom Range Blaster")}" src="Weapons s3/Custom Range Blaster.png" />
        <img class="wep${localStorage.getItem("Rapid Blaster")}" src="Weapons s3/Rapid Blaster.png" />
        <img class="wep${localStorage.getItem("Rapid Blaster Deco")}" src="Weapons s3/Rapid Blaster Deco.png" />
        <img class="wep${localStorage.getItem("Rapid Blaster Pro")}" src="Weapons s3/Rapid Blaster Pro.png" />
        <img class="wep${localStorage.getItem("Rapid Blaster Pro Deco")}" src="Weapons s3/Rapid Blaster Pro Deco.png" />
        <img class="wep${localStorage.getItem("S-Blast '92")}" src="Weapons s3/S-Blast '92.png" />
        <img class="wep${localStorage.getItem("S-Blast '91")}" src="Weapons s3/S-Blast '91.png" />
        <img class="wep${localStorage.getItem("Bamboozler 14 Mk I")}" src="Weapons s3/Bamboozler 14 Mk I.png" />
        <img class="wep${localStorage.getItem("Bamboozler 14 Mk II")}" src="Weapons s3/Bamboozler 14 Mk II.png" />
        <img class="wep${localStorage.getItem("Classic Squiffer")}" src="Weapons s3/Classic Squiffer.png" />
        <img class="wep${localStorage.getItem("New Squiffer")}" src="Weapons s3/New Squiffer.png" />
        <img class="wep${localStorage.getItem("Goo Tuber")}" src="Weapons s3/Goo Tuber.png" />
        <img class="wep${localStorage.getItem("Custom Goo Tuber")}" src="Weapons s3/Custom Goo Tuber.png" />
        <img class="wep${localStorage.getItem("E-Liter 4K")}" src="Weapons s3/E-Liter 4K.png" />
        <img class="wep${localStorage.getItem("E-Liter 4K Scope")}" src="Weapons s3/E-Liter 4K Scope.png" />
        <img class="wep${localStorage.getItem("Custom E-Liter 4K")}" src="Weapons s3/Custom E-Liter 4K.png" />
        <img class="wep${localStorage.getItem("Custom E-Liter 4K Scope")}" src="Weapons s3/Custom E-Liter 4K Scope.png" />
        <img class="wep${localStorage.getItem("Snipewriter 5H")}" src="Weapons s3/Snipewriter 5H.png" />
        <img class="wep${localStorage.getItem("Snipewriter 5B")}" src="Weapons s3/Snipewriter 5B.png" />
        <img class="wep${localStorage.getItem("Splat Charger")}" src="Weapons s3/Splat Charger.png" />
        <img class="wep${localStorage.getItem("Splatterscope")}" src="Weapons s3/Splatterscope.png" />
        <img class="wep${localStorage.getItem("Z+F Splat Charger")}" src="Weapons s3/Z+F Splat Charger.png" />
        <img class="wep${localStorage.getItem("Z+F Splatterscope")}" src="Weapons s3/Z+F Splatterscope.png" />
    `
}

function barTre(){
    document.getElementById("sidebar").style.backgroundColor = "#469c2c"
    document.getElementById("sidebar").innerHTML = `
        <img class="wep${localStorage.getItem("Ballpoint Splatling")}" src="Weapons s3/Ballpoint Splatling.png" />
        <img class="wep${localStorage.getItem("Ballpoint Splatling Nouveau")}" src="Weapons s3/Ballpoint Splatling Nouveau.png" />
        <img class="wep${localStorage.getItem("Heavy Splatling")}" src="Weapons s3/Heavy Splatling.png" />
        <img class="wep${localStorage.getItem("Heavy Splatling Deco")}" src="Weapons s3/Heavy Splatling Deco.png" />
        <img class="wep${localStorage.getItem("Heavy Edit Splatling")}" src="Weapons s3/Heavy Edit Splatling.png" />
        <img class="wep${localStorage.getItem("Heavy Edit Splatling Nouveau")}" src="Weapons s3/Heavy Edit Splatling Nouveau.png" />
        <img class="wep${localStorage.getItem("Hydra Splatling")}" src="Weapons s3/Hydra Splatling.png" />
        <img class="wep${localStorage.getItem("Custom Hydra Splatling")}" src="Weapons s3/Custom Hydra Splatling.png" />
        <img class="wep${localStorage.getItem("Mini Splatling")}" src="Weapons s3/Mini Splatling.png" />
        <img class="wep${localStorage.getItem("Zink Mini Splatling")}" src="Weapons s3/Zink Mini Splatling.png" />
        <img class="wep${localStorage.getItem("Nautilus 47")}" src="Weapons s3/Nautilus 47.png" />
        <img class="wep${localStorage.getItem("Nautilus 79")}" src="Weapons s3/Nautilus 79.png" />
        <img class="wep${localStorage.getItem("REEF-LUX 450")}" src="Weapons s3/REEF-LUX 450.png" />
        <img class="wep${localStorage.getItem("REEF-LUX 450 Deco")}" src="Weapons s3/REEF-LUX 450 Deco.png" />
        <img class="wep${localStorage.getItem("Tri-Stringer")}" src="Weapons s3/Tri-Stringer.png" />
        <img class="wep${localStorage.getItem("Inkline Tri-Stringer")}" src="Weapons s3/Inkline Tri-Stringer.png" />
        <img class="wep${localStorage.getItem("Wellstring V")}" src="Weapons s3/Wellstring V.png" />
        <img class="wep${localStorage.getItem("Custom Wellstring V")}" src="Weapons s3/Custom Wellstring V.png" />
        <img class="wep${localStorage.getItem("Bloblobber")}" src="Weapons s3/Bloblobber.png" />
        <img class="wep${localStorage.getItem("Bloblobber Deco")}" src="Weapons s3/Bloblobber Deco.png" />
        <img class="wep${localStorage.getItem("Dread Wringer")}" src="Weapons s3/Dread Wringer.png" />
        <img class="wep${localStorage.getItem("Dread Wringer D")}" src="Weapons s3/Dread Wringer D.png" />
        <img class="wep${localStorage.getItem("Explosher")}" src="Weapons s3/Explosher.png" />
        <img class="wep${localStorage.getItem("Custom Explosher")}" src="Weapons s3/Custom Explosher.png" />
        <img class="wep${localStorage.getItem("Slosher")}" src="Weapons s3/Slosher.png" />
        <img class="wep${localStorage.getItem("Slosher Deco")}" src="Weapons s3/Slosher Deco.png" />
        <img class="wep${localStorage.getItem("Sloshing Machine")}" src="Weapons s3/Sloshing Machine.png" />
        <img class="wep${localStorage.getItem("Sloshing Machine Neo")}" src="Weapons s3/Sloshing Machine Neo.png" />
        <img class="wep${localStorage.getItem("Tri-Slosher")}" src="Weapons s3/Tri-Slosher.png" />
        <img class="wep${localStorage.getItem("Tri-Slosher Nouveau")}" src="Weapons s3/Tri-Slosher Nouveau.png" />
        <img class="wep${localStorage.getItem("Inkbrush")}" src="Weapons s3/Inkbrush.png" />
        <img class="wep${localStorage.getItem("Inkbrush Nouveau")}" src="Weapons s3/Inkbrush Nouveau.png" />
        <img class="wep${localStorage.getItem("Octobrush")}" src="Weapons s3/Octobrush.png" />
        <img class="wep${localStorage.getItem("Octobrush Nouveau")}" src="Weapons s3/Octobrush Nouveau.png" />
        <img class="wep${localStorage.getItem("Painbrush")}" src="Weapons s3/Painbrush.png" />
        <img class="wep${localStorage.getItem("Painbrush Nouveau")}" src="Weapons s3/Painbrush Nouveau.png" />
    `
}

function barFor(){
    document.getElementById("sidebar").style.backgroundColor = "#2c6b9c"
    document.getElementById("sidebar").innerHTML = `
        <img class="wep${localStorage.getItem("Dapple Dualies")}" src="Weapons s3/Dapple Dualies.png" />
        <img class="wep${localStorage.getItem("Dapple Dualies Nouveau")}" src="Weapons s3/Dapple Dualies Nouveau.png" />
        <img class="wep${localStorage.getItem("Dark Tetra Dualies")}" src="Weapons s3/Dark Tetra Dualies.png" />
        <img class="wep${localStorage.getItem("Light Tetra Dualies")}" src="Weapons s3/Light Tetra Dualies.png" />
        <img class="wep${localStorage.getItem("Douser Dualies FF")}" src="Weapons s3/Douser Dualies FF.png" />
        <img class="wep${localStorage.getItem("Custom Douser Dualies FF")}" src="Weapons s3/Custom Douser Dualies FF.png" />
        <img class="wep${localStorage.getItem("Glooga Dualies")}" src="Weapons s3/Glooga Dualies.png" />
        <img class="wep${localStorage.getItem("Glooga Dualies Deco")}" src="Weapons s3/Glooga Dualies Deco.png" />
        <img class="wep${localStorage.getItem("Splat Dualies")}" src="Weapons s3/Splat Dualies.png" />
        <img class="wep${localStorage.getItem("Enperry Splat Dualies")}" src="Weapons s3/Enperry Splat Dualies.png" />
        <img class="wep${localStorage.getItem("Dualie Squelchers")}" src="Weapons s3/Dualie Squelchers.png" />
        <img class="wep${localStorage.getItem("Custom Dualie Squelchers")}" src="Weapons s3/Custom Dualie Squelchers.png" />
        <img class="wep${localStorage.getItem("Splat Brella")}" src="Weapons s3/Splat Brella.png" />
        <img class="wep${localStorage.getItem("Sorella Brella")}" src="Weapons s3/Sorella Brella.png" />
        <img class="wep${localStorage.getItem("Tenta Brella")}" src="Weapons s3/Tenta Brella.png" />
        <img class="wep${localStorage.getItem("Tenta Sorella Brella")}" src="Weapons s3/Tenta Sorella Brella.png" />
        <img class="wep${localStorage.getItem("Recycled Brella 24 Mk I")}" src="Weapons s3/Recycled Brella 24 Mk I.png" />
        <img class="wep${localStorage.getItem("Recycled Brella 24 Mk II")}" src="Weapons s3/Recycled Brella 24 Mk II.png" />
        <img class="wep${localStorage.getItem("Undercover Brella")}" src="Weapons s3/Undercover Brella.png" />
        <img class="wep${localStorage.getItem("Undercover Sorella Brella")}" src="Weapons s3/Undercover Sorella Brella.png" />
        <img class="wep${localStorage.getItem("Big Swig Roller")}" src="Weapons s3/Big Swig Roller.png" />
        <img class="wep${localStorage.getItem("Big Swig Roller Express")}" src="Weapons s3/Big Swig Roller Express.png" />
        <img class="wep${localStorage.getItem("Carbon Roller")}" src="Weapons s3/Carbon Roller.png" />
        <img class="wep${localStorage.getItem("Carbon Roller Deco")}" src="Weapons s3/Carbon Roller Deco.png" />
        <img class="wep${localStorage.getItem("Dynamo Roller")}" src="Weapons s3/Dynamo Roller.png" />
        <img class="wep${localStorage.getItem("Gold Dynamo Roller")}" src="Weapons s3/Gold Dynamo Roller.png" />
        <img class="wep${localStorage.getItem("Splat Roller")}" src="Weapons s3/Splat Roller.png" />
        <img class="wep${localStorage.getItem("Krak-On Splat Roller")}" src="Weapons s3/Krak-On Splat Roller.png" />
        <img class="wep${localStorage.getItem("Flingza Roller")}" src="Weapons s3/Flingza Roller.png" />
        <img class="wep${localStorage.getItem("Foil Flingza Roller")}" src="Weapons s3/Foil Flingza Roller.png" />
    `
}

function updateWep(type){
    if(type == 1){
        var Weapon = document.getElementById('boxWep').value
        document.getElementById("currwep").innerHTML = `<img style="width:360px;height:auto;position:absolute;top:10px;left:470px" src="Weapons s3/${Weapon}.png" />`
    }
    else if(type == 2){
        var Weapons = JSON.parse(localStorage.getItem("weaponjoy"))
        var Weapon = Math.floor(Math.random() * Weapons.length)
        localStorage.setItem("randomjoy", Weapon)
        document.getElementById("boxwep").innerHTML = `${Weapons[Weapon]}`
        document.getElementById("currwep").innerHTML = `<img style="width:360px;height:auto;position:absolute;top:10px;left:470px" src="Weapons s3/${Weapons[Weapon]}.png" />`    
    }
    else if(type == 3){
        var Weapons = JSON.parse(localStorage.getItem("weaponjoy"))
        var Weapon = localStorage.getItem("randomjoy")
        document.getElementById("boxwep").innerHTML = `${Weapons[Weapon]}`
        document.getElementById("currwep").innerHTML = `<img style="width:360px;height:auto;position:absolute;top:10px;left:470px" src="Weapons s3/${Weapons[Weapon]}.png" />`
    }
}

function loss(){
    document.getElementById("loss").style.width = "1920px";
}

function resetTrack(){
    localStorage.setItem("WEAPON", "1")
    localStorage.setItem("Custom Hydra Splatling", "1")
    localStorage.setItem("Bamboozler 14 Mk II", "1")
    localStorage.setItem("Heavy Edit Splatling Nouveau", "1")
    localStorage.setItem("Custom Douser Dualies FF", "1")
    localStorage.setItem("Recycled Brella 24 Mk II", "1")
    localStorage.setItem("Wellstring V", "1")
    localStorage.setItem("Custom Wellstring V", "1")
    localStorage.setItem("Mint Decavitator", "1")
    localStorage.setItem("Charcoal Decavitator", "1")
    localStorage.setItem("Custom Range Blaster", "1")
    localStorage.setItem("52 Gal Deco", "1")
    localStorage.setItem("52 Gal", "1")
    localStorage.setItem("96 Gal Deco", "1")
    localStorage.setItem("96 Gal", "1")
    localStorage.setItem("Aerospray MG", "1")
    localStorage.setItem("Aerospray RG", "1")
    localStorage.setItem("Annaki Splattershot Nova", "1")
    localStorage.setItem("Ballpoint Splatling Nouveau", "1")
    localStorage.setItem("Ballpoint Splatling", "1")
    localStorage.setItem("Bamboozler 14 Mk I", "1")
    localStorage.setItem("Big Swig Roller Express", "1")
    localStorage.setItem("Big Swig Roller", "1")
    localStorage.setItem("Blaster", "1")
    localStorage.setItem("Bloblobber Deco", "1")
    localStorage.setItem("Bloblobber", "1")
    localStorage.setItem("Carbon Roller Deco", "1")
    localStorage.setItem("Carbon Roller", "1")
    localStorage.setItem("Clash Blaster Neo", "1")
    localStorage.setItem("Clash Blaster", "1")
    localStorage.setItem("Classic Squiffer", "1")
    localStorage.setItem("Custom Blaster", "1")
    localStorage.setItem("Custom Dualie Squelchers", "1")
    localStorage.setItem("Custom E-Liter 4K Scope", "1")
    localStorage.setItem("Custom E-Liter 4K", "1")
    localStorage.setItem("Custom Explosher", "1")
    localStorage.setItem("Custom Goo Tuber", "1")
    localStorage.setItem("Custom Jet Squelcher", "1")
    localStorage.setItem("Custom Splattershot Jr.", "1")
    localStorage.setItem("Dapple Dualies Nouveau", "1")
    localStorage.setItem("Dapple Dualies", "1")
    localStorage.setItem("Dark Tetra Dualies", "1")
    localStorage.setItem("Douser Dualies FF", "1")
    localStorage.setItem("Dread Wringer D", "1")
    localStorage.setItem("Dread Wringer", "1")
    localStorage.setItem("Dualie Squelchers", "1")
    localStorage.setItem("Dynamo Roller", "1")
    localStorage.setItem("E-Liter 4K Scope", "1")
    localStorage.setItem("E-Liter 4K", "1")
    localStorage.setItem("Enperry Splat Dualies", "1")
    localStorage.setItem("Explosher", "1")
    localStorage.setItem("Flingza Roller", "1")
    localStorage.setItem("Foil Flingza Roller", "1")
    localStorage.setItem("Foil Squeezer", "1")
    localStorage.setItem("Forge Splattershot Pro", "1")
    localStorage.setItem("Glooga Dualies Deco", "1")
    localStorage.setItem("Glooga Dualies", "1")
    localStorage.setItem("Gold Dynamo Roller", "1")
    localStorage.setItem("Goo Tuber", "1")
    localStorage.setItem("H-3 Nozzlenose D", "1")
    localStorage.setItem("H-3 Nozzlenose", "1")
    localStorage.setItem("Heavy Edit Splatling", "1")
    localStorage.setItem("Heavy Splatling Deco", "1")
    localStorage.setItem("Heavy Splatling", "1")
    localStorage.setItem("Hydra Splatling", "1")
    localStorage.setItem("Inkbrush Nouveau", "1")
    localStorage.setItem("Inkbrush", "1")
    localStorage.setItem("Inkline Tri-Stringer", "1")
    localStorage.setItem("Jet Squelcher", "1")
    localStorage.setItem("Krak-On Splat Roller", "1")
    localStorage.setItem("L-3 Nozzlenose D", "1")
    localStorage.setItem("L-3 Nozzlenose", "1")
    localStorage.setItem("Light Tetra Dualies", "1")
    localStorage.setItem("Luna Blaster Neo", "1")
    localStorage.setItem("Luna Blaster", "1")
    localStorage.setItem("Mini Splatling", "1")
    localStorage.setItem("N-ZAP 85", "1")
    localStorage.setItem("N-ZAP 89", "1")
    localStorage.setItem("Nautilus 47", "1")
    localStorage.setItem("Nautilus 79", "1")
    localStorage.setItem("Neo Splash-O-Matic", "1")
    localStorage.setItem("Neo Sploosh-O-Matic", "1")
    localStorage.setItem("New Squiffer", "1")
    localStorage.setItem("Octobrush Nouveau", "1")
    localStorage.setItem("Octobrush", "1")
    localStorage.setItem("Painbrush Nouveau", "1")
    localStorage.setItem("Painbrush", "1")
    localStorage.setItem("Range Blaster", "1")
    localStorage.setItem("Rapid Blaster Deco", "1")
    localStorage.setItem("Rapid Blaster Pro Deco", "1")
    localStorage.setItem("Rapid Blaster Pro", "1")
    localStorage.setItem("Rapid Blaster", "1")
    localStorage.setItem("Recycled Brella 24 Mk I", "1")
    localStorage.setItem("REEF-LUX 450", "1")
    localStorage.setItem("REEF-LUX 450 Deco", "1")
    localStorage.setItem("S-Blast '91", "1")
    localStorage.setItem("S-Blast '92", "1")
    localStorage.setItem("Slosher Deco", "1")
    localStorage.setItem("Slosher", "1")
    localStorage.setItem("Sloshing Machine Neo", "1")
    localStorage.setItem("Sloshing Machine", "1")
    localStorage.setItem("Snipewriter 5B", "1")
    localStorage.setItem("Snipewriter 5H", "1")
    localStorage.setItem("Sorella Brella", "1")
    localStorage.setItem("Splash-O-Matic", "1")
    localStorage.setItem("Splat Brella", "1")
    localStorage.setItem("Splat Charger", "1")
    localStorage.setItem("Splat Dualies", "1")
    localStorage.setItem("Splat Roller", "1")
    localStorage.setItem("Splatana Stamper Nouveau", "1")
    localStorage.setItem("Splatana Stamper", "1")
    localStorage.setItem("Splatana Wiper Deco", "1")
    localStorage.setItem("Splatana Wiper", "1")
    localStorage.setItem("Splatterscope", "1")
    localStorage.setItem("Splattershot Jr.", "1")
    localStorage.setItem("Splattershot Nova", "1")
    localStorage.setItem("Splattershot Pro", "1")
    localStorage.setItem("Splattershot", "1")
    localStorage.setItem("Sploosh-O-Matic", "1")
    localStorage.setItem("Squeezer", "1")
    localStorage.setItem("Tenta Brella", "1")
    localStorage.setItem("Tenta Sorella Brella", "1")
    localStorage.setItem("Tentatek Splattershot", "1")
    localStorage.setItem("Tri-Slosher Nouveau", "1")
    localStorage.setItem("Tri-Slosher", "1")
    localStorage.setItem("Tri-Stringer", "1")
    localStorage.setItem("Undercover Brella", "1")
    localStorage.setItem("Undercover Sorella Brella", "1")
    localStorage.setItem("Z+F Splat Charger", "1")
    localStorage.setItem("Z+F Splatterscope", "1")
    localStorage.setItem("Zink Mini Splatling", "1")
    var Weapons = [
        "52 Gal Deco",
        "52 Gal",
        "96 Gal Deco",
        "96 Gal",
        "Aerospray MG",
        "Aerospray RG",
        "Annaki Splattershot Nova",
        "Ballpoint Splatling Nouveau",
        "Ballpoint Splatling",
        "Bamboozler 14 Mk I",
        "Bamboozler 14 Mk II",
        "Big Swig Roller Express",
        "Big Swig Roller",
        "Blaster",
        "Bloblobber Deco",
        "Bloblobber",
        "Carbon Roller Deco",
        "Carbon Roller",
        "Charcoal Decavitator",
        "Clash Blaster Neo",
        "Clash Blaster",
        "Classic Squiffer",
        "Custom Blaster",
        "Custom Douser Dualies FF",
        "Custom Dualie Squelchers",
        "Custom E-Liter 4K Scope",
        "Custom E-Liter 4K",
        "Custom Explosher",
        "Custom Goo Tuber",
        "Custom Hydra Splatling",
        "Custom Jet Squelcher",
        "Custom Range Blaster",
        "Custom Splattershot Jr.",
        "Custom Wellstring V",
        "Dapple Dualies Nouveau",
        "Dapple Dualies",
        "Dark Tetra Dualies",
        "Douser Dualies FF",
        "Dread Wringer D",
        "Dread Wringer",
        "Dualie Squelchers",
        "Dynamo Roller",
        "E-Liter 4K Scope",
        "E-Liter 4K",
        "Enperry Splat Dualies",
        "Explosher",
        "Flingza Roller",
        "Foil Flingza Roller",
        "Foil Squeezer",
        "Forge Splattershot Pro",
        "Glooga Dualies Deco",
        "Glooga Dualies",
        "Gold Dynamo Roller",
        "Goo Tuber",
        "H-3 Nozzlenose D",
        "H-3 Nozzlenose",
        "Heavy Edit Splatling Nouveau",
        "Heavy Edit Splatling",
        "Heavy Splatling Deco",
        "Heavy Splatling",
        "Hydra Splatling",
        "Inkbrush Nouveau",
        "Inkbrush",
        "Inkline Tri-Stringer",
        "Jet Squelcher",
        "Krak-On Splat Roller",
        "L-3 Nozzlenose D",
        "L-3 Nozzlenose",
        "Light Tetra Dualies",
        "Luna Blaster Neo",
        "Luna Blaster",
        "Mini Splatling",
        "Mint Decavitator",
        "N-ZAP 85",
        "N-ZAP 89",
        "Nautilus 47",
        "Nautilus 79",
        "Neo Splash-O-Matic",
        "Neo Sploosh-O-Matic",
        "New Squiffer",
        "Octobrush Nouveau",
        "Octobrush",
        "Painbrush Nouveau",
        "Painbrush",
        "Range Blaster",
        "Rapid Blaster Deco",
        "Rapid Blaster Pro Deco",
        "Rapid Blaster Pro",
        "Rapid Blaster",
        "Recycled Brella 24 Mk I",
        "Recycled Brella 24 Mk II",
        "REEF-LUX 450 Deco",
        "REEF-LUX 450",
        "S-Blast '91",
        "S-Blast '92",
        "Slosher Deco",
        "Slosher",
        "Sloshing Machine Neo",
        "Sloshing Machine",
        "Snipewriter 5B",
        "Snipewriter 5H",
        "Sorella Brella",
        "Splash-O-Matic",
        "Splat Brella",
        "Splat Charger",
        "Splat Dualies",
        "Splat Roller",
        "Splatana Stamper Nouveau",
        "Splatana Stamper",
        "Splatana Wiper Deco",
        "Splatana Wiper",
        "Splatterscope",
        "Splattershot Jr.",
        "Splattershot Nova",
        "Splattershot Pro",
        "Splattershot",
        "Sploosh-O-Matic",
        "Squeezer",
        "Tenta Brella",
        "Tenta Sorella Brella",
        "Tentatek Splattershot",
        "Tri-Slosher Nouveau",
        "Tri-Slosher",
        "Tri-Stringer",
        "Undercover Brella",
        "Undercover Sorella Brella",
        "Wellstring V",
        "Z+F Splat Charger",
        "Z+F Splatterscope",
        "Zink Mini Splatling",
    ]
    localStorage.setItem("weaponjoy", JSON.stringify(Weapons));
}

function openbar() {
    document.getElementById("sidebar").style.width = "500px";
}
  
function closebar() {
    document.getElementById("sidebar").style.width = "0";
}