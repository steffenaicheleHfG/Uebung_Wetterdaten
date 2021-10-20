const data = [5, 7, 3, 8, 3, 6, 4];
const barWidth = 32;

for (let i = 0; i < data.length; i++) {
    let barHeight = data[i] * 32;
    var bar = document.createElement("div");
    bar.className = "bar";
    bar.style.width = barWidth + "px";
    bar.style.height = barHeight + "px";
    document.getElementById("container").appendChild(bar);
}