namespace L09_EntenteichClasses {
    export class Duck extends Moveable {
        public pondArea: { x: number, y: number, width: number, height: number };
        state: string;
        mirror: boolean;
        underWater: number;

        constructor(initialPosition: Vector, pondArea: { x: number, y: number, width: number, height: number}, _state:string, _mirror: boolean) {
            super(initialPosition);
            this.velocity = new Vector((Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2);
            this.pondArea = pondArea;
            this.state = _state;
            this.mirror = _mirror;
            this.underWater = -1;
        }

        draw(): void {
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

        drawSwimming(): void {
            crc2.fillStyle = "yellow";
            crc2.beginPath();
            crc2.ellipse(this.position.x, this.position.y, 30, 20, 0, 0, Math.PI * 2);
            crc2.closePath();
            crc2.fill();

            crc2.beginPath();
            crc2.arc(this.position.x + 20, this.position.y - 10, 17, 0, Math.PI * 2);
            crc2.closePath();
            crc2.fill();

            crc2.fillStyle = "orange";
            crc2.beginPath();
            crc2.moveTo(this.position.x + 30, this.position.y - 10);
            crc2.lineTo(this.position.x + 40, this.position.y - 15);
            crc2.lineTo(this.position.x + 40, this.position.y - 5);
            crc2.closePath();
            crc2.fill();

            crc2.fillStyle = "black";
            crc2.beginPath();
            crc2.arc(this.position.x + 25, this.position.y - 15, 2, 0, Math.PI * 2);
            crc2.closePath();
            crc2.fill();

            this.move();
            this.updatePosition();
        }

        drawTail(): void {
            crc2.fillStyle = "yellow";
            crc2.beginPath();
            crc2.arc(this.position.x, this.position.y, 20, Math.PI, 2 * Math.PI); // Halber Kreis
            crc2.closePath();
            crc2.fill();

            this.move();
            this.updatePosition();
        }

        drawStanding(): void {
            crc2.fillStyle = "yellow";
            crc2.beginPath();
            crc2.ellipse(this.position.x, this.position.y, 30, 20, 0, 0, Math.PI * 2);
            crc2.closePath();
            crc2.fill();

            crc2.beginPath();
            crc2.arc(this.position.x + 20, this.position.y - 10, 17, 0, Math.PI * 2);
            crc2.closePath();
            crc2.fill();

            crc2.fillStyle = "orange";
            crc2.beginPath();
            crc2.moveTo(this.position.x + 30, this.position.y - 10);
            crc2.lineTo(this.position.x + 40, this.position.y - 15);
            crc2.lineTo(this.position.x + 40, this.position.y - 5);
            crc2.closePath();
            crc2.fill();

            crc2.fillStyle = "black";
            crc2.beginPath();
            crc2.arc(this.position.x + 25, this.position.y - 15, 2, 0, Math.PI * 2);
            crc2.closePath();
            crc2.fill();

            crc2.fillStyle = "orange";
            crc2.fillRect(this.position.x - 10, this.position.y + 10, 5, 20);
            crc2.fillRect(this.position.x + 5, this.position.y + 10, 5, 20);

            this.move();
            this.updatePosition();
        }

        move(): void {
    // Horizontalen und vertikalen Versatz initialisieren
    let offsetX: number = 2; // Geschwindigkeit der Enten
    
    // Definiere die Breite und Höhe des Bereichs, in dem sich die Enten bewegen sollen
    let movementAreaWidth: number = 600; // Breite des Bewegungsbereichs
    let movementAreaHeight: number = 180; // Höhe des Bewegungsbereichs

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

     // Wenn die Ente den linken Rand des Bewegungsbereichs erreicht hat
     if (this.position.x <= this.pondArea.x) {
         this.mirror = false; // Richtung umkehren
    }
     // Wenn die Ente den rechten Rand des Bewegungsbereichs erreicht hat
     else if (this.position.x >= this.pondArea.x + movementAreaWidth - 100) {
         this.mirror = true; // Richtung umkehren
     }

     // Abhängig von der Richtung bewegen
     if (this.mirror === true) {
     // Ente nach links bewegen
         this.position.x -= offsetX;
     } else {
         // Ente nach rechts bewegen
         this.position.x += offsetX;
     }

    // Vertikale Bewegung im Bewegungsbereich einschränken
    if (this.position.y <= this.pondArea.y) {
        this.position.y = this.pondArea.y;
    } else if (this.position.y >= this.pondArea.y + movementAreaHeight) {
        this.position.y = this.pondArea.y + movementAreaHeight;
    }
}

    }

}