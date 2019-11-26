var Sprite = function (src, x, y, w, h) {
    this.src = src;
    this.x = x;
    this.x = y;
    this.w = w;
    this.h = h;
}

function drawSprite (img, x, y){
    ctx.drawImage(img.src, x, y, img.w, img.h);
}