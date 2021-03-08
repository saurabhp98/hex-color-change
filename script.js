// targeting elements
const buttonE = document.querySelector('button');
// array of hex elements
const hexArr = ['0', '1', '2', '3', '4', '5', '6', '7', 
'8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
const h2 = document.querySelector('h2');
buttonE.addEventListener('click', colorChange); 

//function to change color
function colorChange() {
    let hex = '#';// Hex variable

    //for loop to generate random string
    for (let i = 0; i < 6; i++) {
    const intArr = parseInt(Math.random()*hexArr.length);
    hex += hexArr[intArr];
    console.log(hex);     
} 
//changing background color
document.body.style.backgroundColor = hex;
 h2.innerHTML = 'HEX Color' + ' ' + hex;
}
