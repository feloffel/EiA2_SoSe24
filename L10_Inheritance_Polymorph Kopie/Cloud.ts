namespace L09_EntenteichClasses {
    export class Cloud extends Moveable {
        size: number;

        constructor(position: Vector, velocity: Vector, size: number) {
            super(position);
            this.velocity = velocity;
            this.size = size;
        }
    
            public move(timeslice: number): void {
                // Berechne die Verschiebung basierend auf der Geschwindigkeit und der Zeit
                const offsetX = this.velocity.x * timeslice;
                const offsetY = this.velocity.y * timeslice;
    
                // Aktualisiere die Position der Wolke
                this.position.add(new Vector(offsetX, offsetY));
    
                // Überprüfe, ob die Wolke den rechten Rand des Canvas erreicht hat
                // Wenn ja, setze die Position auf den linken Rand zurück
                if (this.position.x > crc2.canvas.width + this.size) {
                    this.position.x = -this.size;
                }
            }
    
            public draw(): void {
                crc2.beginPath();
                crc2.fillStyle = 'white';
    
                // Zeichne drei überlappende Ellipsen für die Wolke
                this.drawEllipse(this.position.x - this.size * 0.6, this.position.y, this.size * 0.8, this.size * 0.6);
                this.drawEllipse(this.position.x, this.position.y, this.size, this.size * 0.7);
                this.drawEllipse(this.position.x + this.size * 0.6, this.position.y, this.size * 0.8, this.size * 0.6);
    
                crc2.closePath();
                crc2.fill();
            }
    
            private drawEllipse(x: number, y: number, width: number, height: number) {
                crc2.save();
                crc2.beginPath();
                crc2.translate(x + width / 2, y + height / 2);
                crc2.scale(1, height / width);
                crc2.arc(0, 0, width / 2, 0, Math.PI * 2);
                crc2.restore();
                crc2.fill(); // Füllen der Ellipse
            }
        }
    }
    