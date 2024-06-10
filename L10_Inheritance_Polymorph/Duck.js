"use strict";
var L09_EntenteichClasses;
(function (L09_EntenteichClasses) {
    class Duck extends L09_EntenteichClasses.Moveable {
        pondArea;
        state;
        mirror;
        underWater;
        constructor(initialPosition, pondArea, _state, _mirror) {
            super(initialPosition);
            this.velocity = new L09_EntenteichClasses.Vector((Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2);
            this.pondArea = pondArea;
            this.state = _state;
            this.mirror = _mirror;
            this.underWater = -1;
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
            this.move();
            this.updatePosition();
        }
        drawTail() {
            L09_EntenteichClasses.crc2.fillStyle = "yellow";
            L09_EntenteichClasses.crc2.beginPath();
            L09_EntenteichClasses.crc2.arc(this.position.x, this.position.y, 20, Math.PI, 2 * Math.PI); // Halber Kreis
            L09_EntenteichClasses.crc2.closePath();
            L09_EntenteichClasses.crc2.fill();
            this.move();
            this.updatePosition();
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
            this.move();
            this.updatePosition();
        }
        move() {
            // Horizontalen und vertikalen Versatz initialisieren
            let offsetX = 2; // Geschwindigkeit der Enten
            // Definiere die Breite und Höhe des Bereichs, in dem sich die Enten bewegen sollen
            let movementAreaWidth = 600; // Breite des Bewegungsbereichs
            let movementAreaHeight = 180; // Höhe des Bewegungsbereichs
            // Wenn die Ente sich im Schwimmzustand befindet
            if (this.state === "swim") {
                // Wenn die Ente zum Tauchzustand wechseln soll
                if (Math.random() <= 0.001) {
                    this.state = "dive";
                }
            }
            // Wenn die Ente sich im Tauchzustand befindet
            else if (this.state === "dive") {
                // Zähler für die Unterwasserzeit erhöhen
                this.underWater++;
                // Wenn die Ente genug Zeit unter Wasser verbracht hat
                if (this.underWater >= 50 && Math.random() >= 0.001) {
                    this.state = "swim";
                    this.underWater = -1; // Zähler zurücksetzen
                }
            }
            // // Wenn die Ente den linken Rand des Bewegungsbereichs erreicht hat
            // if (this.position.x <= this.pondArea.x) {
            //     this.mirror = false; // Richtung umkehren
            // }
            // // Wenn die Ente den rechten Rand des Bewegungsbereichs erreicht hat
            // else if (this.position.x >= this.pondArea.x + movementAreaWidth - 100) {
            //     this.mirror = true; // Richtung umkehren
            // }
            // // Abhängig von der Richtung bewegen
            // if (this.mirror === true) {
            //     // Ente nach links bewegen
            //     this.position.x -= offsetX;
            // } else {
            //     // Ente nach rechts bewegen
            //     this.position.x += offsetX;
            // }
            // Vertikale Bewegung im Bewegungsbereich einschränken
            if (this.position.y <= this.pondArea.y) {
                this.position.y = this.pondArea.y;
            }
            else if (this.position.y >= this.pondArea.y + movementAreaHeight) {
                this.position.y = this.pondArea.y + movementAreaHeight;
            }
        }
    }
    L09_EntenteichClasses.Duck = Duck;
})(L09_EntenteichClasses || (L09_EntenteichClasses = {}));
//# sourceMappingURL=Duck.js.map