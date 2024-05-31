namespace L09_EntenteichClasses {
    export class Duck extends Moveable {
        public pondArea: { x: number, y: number, width: number, height: number };

        constructor(initialPosition: Vector, pondArea: { x: number, y: number, width: number, height: number }) {
            super(initialPosition);
            this.velocity = new Vector((Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2);
            this.pondArea = pondArea;

            this.pondArea = {
                x: pondArea.x + 50,
                y: pondArea.y + 50,
                width: pondArea.width - 100,
                height: pondArea.height - 100
            };
        }

        
        draw(): void {
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

        public updatePosition(): void {
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
}