namespace L09_EntenteichClasses {
    export class Cloud extends Moveable {
        size: number;
        isRaining: boolean = false;
        raindrops: Raindrop[] = [];

        constructor(position: Vector, velocity: Vector, size: number) {
            super(position);
            this.velocity = velocity;
            this.size = size;
            this.addEventListeners();
        }
    
        private addEventListeners(): void {
            crc2.canvas.addEventListener("click", this.handleClick.bind(this));
        }

        private handleClick(event: MouseEvent): void {
            const rect = crc2.canvas.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            if (this.isInside(x, y)) {
                this.startRain();
            }
        }

        private isInside(x: number, y: number): boolean {
            const distance = Math.sqrt((x - this.position.x) ** 2 + (y - this.position.y) ** 2);
            return distance < this.size;
        }

        private startRain(): void {
            this.isRaining = true;
            for (let i = 0; i < 3; i++) { //Anzahl der Regentropfen
                const raindropX = this.position.x - this.size / 2 + Math.random() * this.size;
                this.raindrops.push(new Raindrop(new Vector(raindropX, this.position.y)));
            }
        }

        public move(timeslice: number): void {
            const offsetX = this.velocity.x * timeslice;
            const offsetY = this.velocity.y * timeslice;
            this.position.add(new Vector(offsetX, offsetY));

            if (this.position.x > crc2.canvas.width + this.size) {
                this.position.x = -this.size;
            }

            if (this.isRaining) {
                for (let i = this.raindrops.length - 1; i >= 0; i--) {
                    const raindrop = this.raindrops[i];
                    raindrop.move(timeslice);
                    if (raindrop.position.y > crc2.canvas.height) {
                        this.raindrops.splice(i, 1);
                    }
                }
            }
        }

        public draw(): void {
            crc2.beginPath();
            crc2.fillStyle = 'white';

            this.drawEllipse(this.position.x - this.size * 0.6, this.position.y, this.size * 0.8, this.size * 0.6);
            this.drawEllipse(this.position.x, this.position.y, this.size, this.size * 0.7);
            this.drawEllipse(this.position.x + this.size * 0.6, this.position.y, this.size * 0.8, this.size * 0.6);

            crc2.closePath();
            crc2.fill();

            if (this.isRaining) {
                for (let raindrop of this.raindrops) {
                    raindrop.draw();
                }
            }
        }

        private drawEllipse(x: number, y: number, width: number, height: number) {
            crc2.save();
            crc2.beginPath();
            crc2.translate(x + width / 2, y + height / 2);
            crc2.scale(1, height / width);
            crc2.arc(0, 0, width / 2, 0, Math.PI * 2);
            crc2.restore();
            crc2.fill();
        }
    }

    export class Raindrop {
        position: Vector;
        velocity: Vector;

        constructor(position: Vector) {
            this.position = position;
            this.velocity = new Vector(0, 200); // Geschwindigkeit der Regentropfen
        }

        public move(timeslice: number): void {
            const offsetY = this.velocity.y * timeslice;
            this.position.add(new Vector(0, offsetY));
        }

        public draw(): void {
            crc2.beginPath();
            crc2.strokeStyle = 'blue';
            crc2.moveTo(this.position.x, this.position.y);
            crc2.lineTo(this.position.x, this.position.y + 10); // Länge des Regentropfens
            crc2.stroke();
        }
    }
}
