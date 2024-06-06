"use strict";
// bee.ts
var L09_EntenteichClasses;
(function (L09_EntenteichClasses) {
    class Bee extends L09_EntenteichClasses.Moveable {
        size;
        crc2;
        constructor(crc2, position, size) {
            super(position);
            this.crc2 = crc2;
            this.size = size;
        }
        draw() {
            const crc2 = this.crc2;
            // Draw body (yellow oval)
            crc2.beginPath();
            crc2.fillStyle = 'yellow';
            crc2.ellipse(this.position.x, this.position.y, this.size * 1.5, this.size, 0, 0, Math.PI * 2);
            crc2.fill();
            crc2.closePath();
            // Draw stripes (three black stripes)
            crc2.beginPath();
            crc2.fillStyle = 'black';
            crc2.fillRect(this.position.x - this.size * 0.4, this.position.y - this.size, this.size * 0.3, this.size * 2);
            crc2.fillRect(this.position.x, this.position.y - this.size, this.size * 0.3, this.size * 2);
            crc2.fillRect(this.position.x + this.size * 0.4, this.position.y - this.size, this.size * 0.3, this.size * 2);
            crc2.closePath();
            // Draw wings (white ellipses)
            crc2.beginPath();
            crc2.fillStyle = 'white';
            crc2.ellipse(this.position.x - this.size * 0.4, this.position.y - this.size * 0.8, this.size * 0.8, this.size * 0.4, Math.PI * 0.25, 0, Math.PI * 2);
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.ellipse(this.position.x + this.size * 0.4, this.position.y - this.size * 0.8, this.size * 0.8, this.size * 0.4, -Math.PI * 0.25, 0, Math.PI * 2);
            crc2.fill();
            crc2.closePath();
            // Draw eye (black circle)
            crc2.beginPath();
            crc2.fillStyle = 'black';
            crc2.arc(this.position.x - this.size * 0.3, this.position.y - this.size * 0.4, this.size * 0.1, 0, Math.PI * 2);
            crc2.fill();
            crc2.closePath();
            // Draw stinger (black triangle)
            crc2.beginPath();
            crc2.moveTo(this.position.x + this.size * 1.2, this.position.y);
            crc2.lineTo(this.position.x + this.size * 1.4, this.position.y + this.size * 0.2);
            crc2.lineTo(this.position.x + this.size * 1.4, this.position.y - this.size * 0.2);
            crc2.fill();
            crc2.closePath();
        }
    }
    L09_EntenteichClasses.Bee = Bee;
})(L09_EntenteichClasses || (L09_EntenteichClasses = {}));
//# sourceMappingURL=bee.js.map