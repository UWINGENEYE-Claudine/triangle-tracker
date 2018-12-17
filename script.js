 
function myFunction(){
    var firstSide= parseInt(document.getElementById("firstSide").value);
    var secondSide= parseInt(document.getElementById("secondSide").value);
    var thirdSide= parseInt(document.getElementById("thirdSide").value);

    var triangle = []

    triangle=parseInt(triangle.concat([firstSide,secondSide,thirdSide]));
    if(firstSide+secondSide<=thirdSide || firstSide+thirdSide<=secondSide || secondSide+thirdSide<=firstSide){  
        alert("this is not triangle")
        return
    }    
    if(firstSide === secondSide && firstSide === thirdSide && secondSide === thirdSide){
        alert("this is Equilateral");
    }
    else if(firstSide === secondSide || firstSide === thirdSide || secondSide === thirdSide){
        alert("this is Isosceles");
    }
    else if(firstSide !== secondSide && firstSide !== thirdSide && secondSide !== thirdSide){
        alert("this is scalene");
    }
   else("error");

};