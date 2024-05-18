namespace L09_EntenteichClasses {
    export class Duck {
        private position: { x: number, y: number };
        private velocity: { x: number, y: number };
        private pondArea: { x: number, y: number, width: number, height: number };

        constructor(initialPosition: { x: number, y: number }, pondArea: { x: number, y: number, width: number, height: number }) {
            this.position = initialPosition;
            this.velocity = { x: (Math.random() - 0.5) * 2, y: (Math.random() - 0.5) * 2 }; // Zufällige Geschwindigkeit
            
            // Verkleinerte Teichfläche definieren
            this.pondArea = {
                x: pondArea.x + 50,
                y: pondArea.y + 50,
                width: pondArea.width - 100,
                height: pondArea.height - 100
            };
        }

        public draw(): void {
            // Körper der Ente
            crc2.fillStyle = "yellow";
            crc2.beginPath();
            crc2.ellipse(this.position.x, this.position.y, 30, 20, 0, 0, Math.PI * 2);
            crc2.closePath();
            crc2.fill();

            // Kopf der Ente
            crc2.beginPath();
            crc2.arc(this.position.x + 20, this.position.y - 10, 17, 0, Math.PI * 2);
            crc2.closePath();
            crc2.fill();

            // Schnabel der Ente
            crc2.fillStyle = "orange";
            crc2.beginPath();
            crc2.moveTo(this.position.x + 30, this.position.y - 10);
            crc2.lineTo(this.position.x + 40, this.position.y - 15);
            crc2.lineTo(this.position.x + 40, this.position.y - 5);
            crc2.closePath();
            crc2.fill();

            // Augen der Ente
            crc2.fillStyle = "black";
            crc2.beginPath();
            crc2.arc(this.position.x + 25, this.position.y - 15, 2, 0, Math.PI * 2);
            crc2.closePath();
            crc2.fill();

            this.updatePosition();
        }

        private updatePosition(): void {
            this.position.x += this.velocity.x;
            this.position.y += this.velocity.y;

            // Begrenzung der Bewegung innerhalb des Teichs
            if (this.position.x < this.pondArea.x || this.position.x > this.pondArea.x + this.pondArea.width) {
                this.velocity.x *= -1;
            }
            if (this.position.y < this.pondArea.y || this.position.y > this.pondArea.y + this.pondArea.height) {
                this.velocity.y *= -1;
            }
        }
    }
}
