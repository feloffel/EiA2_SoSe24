"use strict";
var L09_EntenteichClasses;
(function (L09_EntenteichClasses) {
    let canvas = document.querySelector("canvas");
    let crc2 = canvas.getContext('2d');
    class Cloud {
        position;
        velocity;
        size;
        constructor(position, velocity, size) {
            this.position = position;
            this.velocity = velocity;
            this.size = size;
        }
        move(timeslice) {
            // Berechne die Verschiebung basierend auf der Geschwindigkeit und der Zeit
            const offsetX = this.velocity.x * timeslice;
            const offsetY = this.velocity.y * timeslice;
            // Aktualisiere die Position der Wolke
            this.position.x += offsetX;
            this.position.y += offsetY;
            // Überprüfe, ob die Wolke den rechten Rand des Canvas erreicht hat
            // Wenn ja, setze die Position auf den linken Rand zurück
            if (this.position.x > crc2.canvas.width + this.size) {
                this.position.x = -this.size;
            }
        }
        draw() {
            // Zeichne die Wolke wie zuvor
            crc2.beginPath();
            crc2.fillStyle = 'white';
            // Zeichne drei überlappende Ellipsen für die Wolke
            this.drawEllipse(this.position.x - this.size * 0.6, this.position.y, this.size * 0.8, this.size * 0.6);
            this.drawEllipse(this.position.x, this.position.y, this.size, this.size * 0.7);
            this.drawEllipse(this.position.x + this.size * 0.6, this.position.y, this.size * 0.8, this.size * 0.6);
            crc2.closePath();
            crc2.fill();
        }
        drawEllipse(x, y, width, height) {
            crc2.save();
            crc2.beginPath();
            crc2.translate(x + width / 2, y + height / 2);
            crc2.scale(1, height / width);
            crc2.arc(0, 0, width / 2, 0, Math.PI * 2);
            crc2.restore();
            crc2.fill(); // Füllen der Ellipse
        }
    }
    L09_EntenteichClasses.Cloud = Cloud;
})(L09_EntenteichClasses || (L09_EntenteichClasses = {}));
//# sourceMappingURL=Cloud.js.map