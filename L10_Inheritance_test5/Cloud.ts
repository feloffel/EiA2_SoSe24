namespace L09_EntenteichClasses {
        export class Cloud extends Moveable {
            size: number;
    
            constructor(position: Vector, velocity: Vector, size: number) {
                super(position); // Aufruf des Constructors der Superklasse mit einer Position
                this.velocity = velocity; // Geschwindigkeit setzen
                this.size = size; // Größe setzen
            }
    
            const clouds: Cloud[] = [];
      clouds.push(new Cloud(new Vector(100, 150), new Vector(100, 0), 100));
      clouds.push(new Cloud(new Vector(300, 100), new Vector(30, 0), 100));
      clouds.push(new Cloud(new Vector(500, 130), new Vector(60, 0), 100));
    
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
    