"use strict";
var L09_EntenteichClasses;
(function (L09_EntenteichClasses) {
    class Duck extends L09_EntenteichClasses.Moveable {
        pondArea;
        constructor(initialPosition, pondArea) {
            super(initialPosition);
            this.velocity = new L09_EntenteichClasses.Vector((Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2);
            this.pondArea = pondArea;
            this.pondArea = {
                x: pondArea.x + 50,
                y: pondArea.y + 50,
                width: pondArea.width - 100,
                height: pondArea.height - 100
            };
        }
        draw() {
            L09_EntenteichClasses.crc2.fillStyle = "yellow";
            L09_EntenteichClasses.crc2.beginPath();
            L09_EntenteichClasses.crc2.ellipse(this.position.x, this.position.y, 30, 20, 0, 0, Math.PI * 2);
            L09_EntenteichClasses.crc2.closePath();
            L09_EntenteichClasses.crc2.fill();
            L09_EntenteichClasses.crc2.beginPath();
            L09_EntenteichClasses.crc2.arc(this.position.x + 20, this.position.y - 10, 17, 0, Math.PI * 2);
            L09_EntenteichClasses.crc2.closePath();
            L09_EntenteichClasses.crc2.fill();
            L09_EntenteichClasses.crc2.fillStyle = "orange";
            L09_EntenteichClasses.crc2.beginPath();
            L09_EntenteichClasses.crc2.moveTo(this.position.x + 30, this.position.y - 10);
            L09_EntenteichClasses.crc2.lineTo(this.position.x + 40, this.position.y - 15);
            L09_EntenteichClasses.crc2.lineTo(this.position.x + 40, this.position.y - 5);
            L09_EntenteichClasses.crc2.closePath();
            L09_EntenteichClasses.crc2.fill();
            L09_EntenteichClasses.crc2.fillStyle = "black";
            L09_EntenteichClasses.crc2.beginPath();
            L09_EntenteichClasses.crc2.arc(this.position.x + 25, this.position.y - 15, 2, 0, Math.PI * 2);
            L09_EntenteichClasses.crc2.closePath();
            L09_EntenteichClasses.crc2.fill();
            this.move(0.04);
            this.updatePosition();
        }
        updatePosition() {
            super.updatePosition(); // Rufe die Methode der Superklasse auf
            // Füge hier die zusätzliche Logik für die Begrenzung der Bewegung im Teich hinzu
            if (this.position.x < this.pondArea.x || this.position.x > this.pondArea.x + this.pondArea.width) {
                this.velocity.x *= -1;
            }
            if (this.position.y < this.pondArea.y || this.position.y > this.pondArea.y + this.pondArea.height) {
                this.velocity.y *= -1;
            }
        }
    }
    L09_EntenteichClasses.Duck = Duck;
})(L09_EntenteichClasses || (L09_EntenteichClasses = {}));
//# sourceMappingURL=Duck.js.map