/*

let redDiv = document.getElementById('red');
let yellowDiv = document.getElementById('yellow');
let greenDiv = document.getElementById('green');

redDiv.onclick = () => console.log('red');
yellowDiv.onclick = () => console.log('yello');
greenDiv.onclick = () => console.log('green');
*/
const square = document.querySelectorAll('.squares');
console.log(square);

// console.log(square[0].value)
// console.log(square[1].value)
// console.log(square[2].value)
const TimeClick = {'red': 0, 'green':0,'yellow': 0}
square.forEach(nsquare => {
  nsquare.onclick = () => {
    
    TimeClick[nsquare.value]++;
    nsquare.innerText =TimeClick[nsquare.value];
    // console.log(nsquare.value);
  }
})

const cleargamebtn = document.getElementById('cleargame');
cleargamebtn.onclick = () => clearscore()
function clearscore(){
  TimeClick.red = 0;
  TimeClick.yellow = 0;
  TimeClick.green = 0;
  square.forEach(nsquare => {
    nsquare.innerText = '';
  })
}
