const stage = $("#container");
const stageWidth = stage.innerWidth();
const stageHeight = stage.innerHeight();
const data = [5, 7, 3, 8, 3, 6, 4, 5];
const barWidth = stageWidth / ((data.length * 2) - 1);
const dataMax = Math.max(...data);


// barDiagram();
stackedDiagram();

function barDiagram() {
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
}

function stackedDiagram() {
    const verticalOffset = 5;
    const verticalDistance = barWidth + verticalOffset
    
    for (let i = 0; i < data.length; i++) {
        console.log("i = " + i);
        const dayContainer = $('<div class="day-container"></div>');
        let xPosContainer = i * 2 * barWidth;

        dayContainer.css({
            width: barWidth,
            left: xPosContainer,
            top: 0
        })

        stage.append(dayContainer);
        
        for (let j = 0; j < data[i]; j++) {
            console.log("j = " + j);
            const myCircle = $('<div class="circle"></div>');
            const yPos = j * verticalDistance;
            myCircle.css({
                width: barWidth,
                height: barWidth,
                left: 0 ,
                top: yPos
            })

            dayContainer.append(myCircle);
        }
    }
}