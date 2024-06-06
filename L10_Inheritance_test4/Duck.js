"use strict";
// Duck.ts
var L09_EntenteichClasses;
(function (L09_EntenteichClasses) {
    class Duck extends L09_EntenteichClasses.Moveable {
        pondArea;
        state;
        constructor(initialPosition, pondArea, _state) {
            super(initialPosition);
            this.velocity = new L09_EntenteichClasses.Vector((Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2);
            this.pondArea = pondArea;
            this.state = _state;
        }
        draw() {
            switch (this.state) {
                case "swim":
                    this.drawSwimming();
                    break;
                case "dive":
                    this.drawTail();
                    break;
                default:
                    this.drawStanding();
            }
        }
        drawSwimming() {
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
        drawTail() {
            L09_EntenteichClasses.crc2.fillStyle = "yellow";
            L09_EntenteichClasses.crc2.beginPath();
            L09_EntenteichClasses.crc2.arc(this.position.x, this.position.y, 20, Math.PI, 2 * Math.PI); // Halber Kreis
            L09_EntenteichClasses.crc2.closePath();
            L09_EntenteichClasses.crc2.fill();
        }
        drawStanding() {
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
            L09_EntenteichClasses.crc2.fillStyle = "orange";
            L09_EntenteichClasses.crc2.fillRect(this.position.x - 10, this.position.y + 10, 5, 20);
            L09_EntenteichClasses.crc2.fillRect(this.position.x + 5, this.position.y + 10, 5, 20);
            this.move(0.04);
            this.updatePosition();
        }
        move(_timeslice) {
            // Geschwindigkeitskomponenten berechnen
            let offsetX = this.velocity.x * _timeslice;
            let offsetY = this.velocity.y * _timeslice;
            // Neue Position berechnen
            let newX = this.position.x + offsetX;
            let newY = this.position.y + offsetY;
            // Überprüfen, ob die neue Position innerhalb der Teichgrenzen liegt
            if (newX >= this.pondArea.x &&
                newX <= this.pondArea.x + this.pondArea.width &&
                newY >= this.pondArea.y &&
                newY <= this.pondArea.y + this.pondArea.height) {
                // Position innerhalb der Grenzen, aktualisieren
                this.position.x = newX;
                this.position.y = newY;
            }
            else {
                // Wenn die Ente den Rand des Teichs erreicht hat, Richtung umkehren
                this.velocity.x *= -1; // Richtung horizontal umkehren
                this.velocity.y *= -1; // Richtung vertikal umkehren
            }
            this.updatePosition();
        }
    }
    L09_EntenteichClasses.Duck = Duck;
})(L09_EntenteichClasses || (L09_EntenteichClasses = {}));
//# sourceMappingURL=Duck.js.map