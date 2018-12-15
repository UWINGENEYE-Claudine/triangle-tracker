 
function myFunction(){
    var firstSide= parseInt(document.getElementById("firstSide").value);
    var secondSide= parseInt(document.getElementById("secondSide").value);
    var thirdSide= parseInt(document.getElementById("thirdSide").value);

    
    if(firstSide+secondSide>=firstSide || firstSide+thirdSide>=secondSide || secondSide+thirdSide>=tSide){

    if(firstSide === secondSide && firstSide === thirdSide && secondSide === thirdSide){
        alert("this is Equilateral");
    }
    else if(firstSide === secondSide || firstSide === thirdSide || secondSide === thirdSide){
        alert("this is Isosceles");
    }
    else if(firstSide !== secondSide && firstSide !== thirdSide && secondSide !== thirdSide){
        alert("this is scalene");
    }
    else{alert("this is not triangle")};
     }
};   