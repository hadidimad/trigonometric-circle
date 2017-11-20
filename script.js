var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var mousePos = {
    x: 0,
    y: 0
}
function offset(x) {
    return x + 300;
}

function clearPage(ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
}

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}
function drawBase() {
    ctx.strokeStyle = "#000000";
    ctx.arc(offset(0), offset(0), 299, 0, 2 * Math.PI);
    ctx.moveTo(0, 300);
    ctx.lineTo(600, 300);
    ctx.moveTo(300, 0);
    ctx.lineTo(300, 600);
    ctx.stroke();
}
function drawMouseLine() {
    mx = mousePos.x - 300;
    my = mousePos.y - 300;
    x = (mx * 299) / Math.sqrt((mx * mx) + (my * my))
    y = (my * 299) / Math.sqrt((mx * mx) + (my * my))
    ctx.strokeStyle = "#FF0000"
    ctx.moveTo(offset(0), offset(0));
    ctx.lineTo(offset(x), offset(y));


    ctx.stroke();
}
function getAngle() {
    mx = mousePos.x - 300;
    my = mousePos.y - 300;
    ctx.font = "20px Arial";
    angle = Math.atan2(mx, my) * 180 / Math.PI;
    angle -= 180;
    angle *= -1;
    angle = angle - 90;
    if (angle < 0) {
        angle += 360;
    }
    angle = 360 - angle;
    ctx.fillText("angle : " + angle, 0, 540);
    return angle
}
function getTan() {
    mx = mousePos.x - 300;
    my = mousePos.y - 300;
    tan = my / mx * -1;
    ctx.font = "20px Arial";
    ctx.fillText("tan : " + tan, 0, 560);
    return tan
}
function getCot() {
    mx = mousePos.x - 300;
    my = mousePos.y - 300;
    cot = mx / my * -1;
    ctx.font = "20px Arial";
    ctx.fillText("cot : " + cot, 0, 580);
    return cot
}
function getSin() {
    mx = mousePos.x - 300;
    my = mousePos.y - 300;
    x = (mx * 299) / Math.sqrt((mx * mx) + (my * my))
    y = (my * 299) / Math.sqrt((mx * mx) + (my * my))
    sin = y / 299 * -1;
    ctx.font = "20px Arial";
    ctx.fillText("sin : " + sin, 0, 600);
    return sin
}
function getCos() {
    mx = mousePos.x - 300;
    my = mousePos.y - 300;
    x = (mx * 299) / Math.sqrt((mx * mx) + (my * my))
    y = (my * 299) / Math.sqrt((mx * mx) + (my * my))
    cos = x / 299;
    ctx.font = "20px Arial";
    ctx.fillText("cos : " + cos, 0, 620);
    return cos
}
function main() {
    clearPage(ctx);
    drawBase();
    drawMouseLine();
    getAngle();
    getTan();
    getCot();
    getSin();
    getCos();
}
canvas.addEventListener('mousemove', function (evt) {
    mousePos = getMousePos(canvas, evt);
    //console.log(mousePos.x, mousePos.y);
}, false);
setInterval(main, 50);