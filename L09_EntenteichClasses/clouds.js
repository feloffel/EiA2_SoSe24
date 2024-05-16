"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cloud = void 0;
console.log("clouds.js wurde geladen");
class Cloud {
    position;
    velocity;
    size;
    constructor(position, size) {
        this.position = position;
        this.size = size;
        this.velocity = new Vector(Math.random() * 0.1 + 0.1, 0); // Zufällige horizontale Geschwindigkeit
    }
    move() {
        // Bewegung basierend auf der Geschwindigkeit
        this.position.x += this.velocity.x;
        // Wenn die Wolke das Canvas verlässt, wird sie auf der linken Seite neu platziert
        if (this.position.x > canvas.width + this.size) {
            this.position.x = -this.size;
        }
    }
    draw(context) {
        context.beginPath();
        context.fillStyle = 'white';
        // Zeichne drei überlappende Ellipsen für die Wolke
        this.drawEllipse(context, this.position.x - this.size * 0.6, this.position.y, this.size * 0.8, this.size * 0.6);
        this.drawEllipse(context, this.position.x, this.position.y, this.size, this.size * 0.7);
        this.drawEllipse(context, this.position.x + this.size * 0.6, this.position.y, this.size * 0.8, this.size * 0.6);
        context.closePath();
        context.fill();
    }
    drawEllipse(context, x, y, width, height) {
        context.save();
        context.beginPath();
        context.translate(x + width / 2, y + height / 2);
        context.scale(1, height / width);
        context.arc(0, 0, width / 2, 0, Math.PI * 2);
        context.restore();
        context.fill(); // Füllen der Ellipse
    }
}
exports.Cloud = Cloud;
//# sourceMappingURL=clouds.js.map