const stage = $("#container");
const stageWidth = stage.innerWidth();
const stageHeight = stage.innerHeight();
const data = [5, 7, 3, 8, 30, 6, 4, 5];
const dataMax = Math.max(...data);


// barDiagram();
stackedDiagram();

function barDiagram() {
    for (let i = 0; i < data.length; i++) {

        let heightCoefficient = stageHeight / dataMax;
        let barHeight = data[i] * heightCoefficient;

        let xPos = i * 2 * baseSize;
        const myBar = $('<div class="bar"></div>');
        const yPos = stageHeight - barHeight;
        myBar.css({
            width: baseSize,
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

    for (let i = 0; i < data.length; i++) {
        // console.log("i = " + i);
        const radiusCountX = ((data.length * 2) + (data.length - 1));
        const radiusCountY = ((dataMax * 2) + (dataMax - 1));

        const radiusCount = Math.max(radiusCountX, radiusCountY);
        // Alternative Schreibweise:
        // const radiusCount = radiusCountX > radiusCountY ? radiusCountX : radiusCountY;

        const radius = stageWidth / radiusCount;
        const baseSize = radius * 2;

        for (let j = 0; j < data[i]; j++) {
            // console.log("j = " + j);
            let xPos = i * (radius * 3);
            const myCircle = $('<div class="circle"></div>');
            const yPos = j * (radius * 3);
            myCircle.css({
                width: baseSize,
                height: baseSize,
                left: xPos,
                top: yPos
            })

            stage.append(myCircle);
        }
    }
}