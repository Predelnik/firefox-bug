num = 1
const iconLinkElement = document.querySelector("#dynamic-favicon")
function updateIcon() {
    const iconCanvas = document.createElement('canvas');
    iconCanvas.height = 128;
    iconCanvas.width = 128;
    const ctx = iconCanvas.getContext('2d');
    ctx.font = `${iconCanvas.width * 3 / 4}px monospace`;
    ctx.fillStyle = '#FFF'
    ctx.fillRect(0, 0, iconCanvas.width, iconCanvas.height);
    ctx.fillStyle = '#000'
    ctx.fillText(num.toString(), iconCanvas.height / 2 / 3, iconCanvas.width * 2 / 3);
    num++;
    iconLinkElement.href = iconCanvas.toDataURL ();
}
window.setInterval(updateIcon, 250);
