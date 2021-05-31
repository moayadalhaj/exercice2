var userName = prompt("Please enter your name:");
document.write("<h3>Welcome "+userName+"</h3>");



function showMe(){
  var car = prompt("Please enter your favorite car:");
  while (car !== "mercedes"){
    car = prompt("please enter your favorite car (mercedes):");
    }
    var num = prompt("Choose the number btween 1-9:")
    for (i=0; i < num; i++){
      var j=1+i;
      document.write("<p>The number of this image:" + j + "</p>");document.write('<img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-mercedes-benz-cls-class-1591735006.jpg?crop=0.643xw:0.543xh;0.0994xw,0.416xh&resize=600:*">');
    }
}