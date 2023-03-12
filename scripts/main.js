firstHundredDecimalsPi = "1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679";
piAsArray = Array.from(firstHundredDecimalsPi).map(Number);
console.log(piAsArray);

frequenciesOfDigits = [0,0,0,0,0,0,0,0,0,0];
sumOfDigits = 0;
for (let i = 0; i < piAsArray.length; i++) {
  sumOfDigits += piAsArray[i];
  for (let j = 0; j < 10; j++) {
    if (piAsArray[i] === j) { frequenciesOfDigits[j]++; }
  }
}
mean = sumOfDigits / 100;

console.log(frequenciesOfDigits);
console.log(sumOfDigits);


xAxis = [0,1,2,3,4,5,6,7,8,9]
const meanDisplay = document.getElementById("meanLabel");
meanDisplay.innerText = mean;

const chart = document.getElementById("barChart");
new Chart(chart, {
  type: "bar",
  data: {
    labels: xAxis,
    datasets: [{
        label: '# of occurrences',
        data: frequenciesOfDigits,
        borderWidth: 1,
        backgroundColor: "hsl(170, 40%, 60%)"
      }]
  }
})


const switchButton = document.getElementById("switchView");
const piMosaic = document.getElementById("piMosaic")
const buttonText = document.getElementById("buttonText")
graphView = true;
function SwitchView() {
    graphView = !graphView
    if (graphView) {
        chart.style.width = "initial"
        piMosaic.style.width = "0"
        buttonText.innerText = "Mosaic"
    } else {
        chart.style.width = "0"
        piMosaic.style.width = "initial"
        buttonText.innerText = "Graph"

    }
}