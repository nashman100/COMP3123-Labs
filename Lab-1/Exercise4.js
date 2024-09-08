// Write a JavaScript program to find the types of a given angle.

function angleType(deg){
    if(deg > 0 && deg < 90){
        return 'Acute Angle'
    }
    else if(deg == 90){
        return 'Right Angle'
    }
    else if(deg > 90 && deg < 180){
        return 'Obtuse Angle'
    }
    else if(deg == 180){
        return 'Straight Angle'
    }
    else{
        return "Invalid Angle"
    }
}

console.log(angleType(47))
console.log(angleType(90))
console.log(angleType(145))
console.log(angleType(180))
