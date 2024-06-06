// Duck.ts
namespace L09_EntenteichClasses {
    export class Duck extends Moveable {
        public pondArea: { x: number, y: number, width: number, height: number };
        state: string;

        constructor(initialPosition: Vector, pondArea: { x: number, y: number, width: number, height: number}, _state:string) {
            super(initialPosition);
            this.velocity = new Vector((Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2);
            this.pondArea = pondArea;
            this.state = _state;
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

            this.move(0.04);
            this.updatePosition();
        }

        drawTail(): void {
            crc2.fillStyle = "yellow";
            crc2.beginPath();
            crc2.arc(this.position.x, this.position.y, 20, Math.PI, 2 * Math.PI); // Halber Kreis
            crc2.closePath();
            crc2.fill();
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

            this.move(0.04);
            this.updatePosition();
        }

        move(_timeslice: number): void {
            // Geschwindigkeitskomponenten berechnen
            let offsetX: number = this.velocity.x * _timeslice;
            let offsetY: number = this.velocity.y * _timeslice;
        
            // Neue Position berechnen
            let newX: number = this.position.x + offsetX;
            let newY: number = this.position.y + offsetY;
        
            // Überprüfen, ob die neue Position innerhalb der Teichgrenzen liegt
            if (
                newX >= this.pondArea.x &&
                newX <= this.pondArea.x + this.pondArea.width &&
                newY >= this.pondArea.y &&
                newY <= this.pondArea.y + this.pondArea.height
            ) {
                // Position innerhalb der Grenzen, aktualisieren
                this.position.x = newX;
                this.position.y = newY;
            } else {
                // Wenn die Ente den Rand des Teichs erreicht hat, Richtung umkehren
                this.velocity.x *= -1; // Richtung horizontal umkehren
                this.velocity.y *= -1; // Richtung vertikal umkehren
            }
        
            this.updatePosition();
        }
        
        
        
        
        
        
        
        
        
        
    }
}
