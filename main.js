const stage = $("#container");
const stageWidth = stage.innerWidth();
const stageHeight = stage.innerHeight();

const data = [5, 7, 3, 8, 3, 6, 4, 5];

const barWidthMax = stage / data.length;

const varBarWidth = 20;

const barWidth = Math.min(varBarWidth, barWidthMax);
let maxData = 0;

for (let j = 0; j < data.length; j++) {
    maxData = Math.max(maxData, data[j]);
}

for (let i = 0; i < data.length; i++) {
    let barHeight = data[i] / maxData * stageHeight;

    let xPos = i / (data.length - 1) * (stageWidth - barWidth);
    const myBar = $('<div class="bar"></div>');
    const yPos = stageHeight - barHeight;
    myBar.css({
        width: barWidth,
        height: barHeight,
        left: xPos,
        top: yPos
    })

    stage.append(myBar);
}