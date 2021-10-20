const stage = $("#container");
const stageWidth = stage.innerWidth();
const stageHeight = stage.innerHeight();

const data = [5, 7, 3, 8, 3, 6, 4, 5];

const barWidth = stageWidth / ((data.length * 2) - 1);

// let dataMax = data[0];

// for (let i = 1; i < data.length; i++) {
//     if (data[i] > dataMax) {
//         dataMax = data[i];
//     }
// }

// console.log(dataMax);

const dataMax = Math.max(...data);
console.log(barWidth);

for (let i = 0; i < data.length; i++) {

    let heightCoefficient = stageHeight / dataMax;
    let barHeight = data[i] * heightCoefficient;

    let xPos = i * 2 * barWidth;
    const myBar = $('<div class="bar"></div>');
    const yPos = stageHeight - barHeight;
    myBar.css({
        width: barWidth,
        height: barHeight,
        left: xPos,
        top: yPos
    })

    stage.append(myBar);
    myBar.animate({
        height: barHeight
    }, 1000)
}