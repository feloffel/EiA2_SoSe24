namespace L09_EntenteichClasses {
    export class Bee extends Moveable {
        size: number;
        crc2: CanvasRenderingContext2D;
        private buzzSound: HTMLAudioElement;

        constructor(crc2: CanvasRenderingContext2D, position: Vector, size: number, velocity: Vector) {
            super(position);
            this.crc2 = crc2;
            this.velocity = velocity;
            this.size = size;
            this.buzzSound = new Audio('sounds/biene.mp3'); // Hier wird der Pfad zur Sound-Datei angegeben
            this.addClickListener();
        }

        private addClickListener(): void {
            this.crc2.canvas.addEventListener("click", this.handleClick.bind(this));
        }

        private handleClick(event: MouseEvent): void {
            let rect = this.crc2.canvas.getBoundingClientRect();
            let x = event.clientX - rect.left;
            let y = event.clientY - rect.top;

            if (this.isClicked(x, y)) {
                this.buzzSound.play();
            }
        }

        private isClicked(x: number, y: number): boolean {
            let dx = x - this.position.x;
            let dy = y - this.position.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            return distance <= this.size * 1.5; // Approximate radius of the bee
        }

        public move(timeslice: number): void {
            // Berechne die Verschiebung basierend auf der Geschwindigkeit und der Zeit
            const offsetX = this.velocity.x * timeslice;
            const offsetY = this.velocity.y * timeslice;

            // Aktualisiere die Position der Biene
            this.position.add(new Vector(offsetX, offsetY));

            // Überprüfe, ob die Biene den rechten Rand des Canvas erreicht hat
            // Wenn ja, setze die Position auf den linken Rand zurück
            if (this.position.x > this.crc2.canvas.width + this.size) {
                this.position.x = -this.size;
            }
        }

        public draw(): void {
            const crc2 = this.crc2;

            // Draw body (yellow oval)
            crc2.beginPath();
            crc2.fillStyle = 'yellow';
            crc2.ellipse(this.position.x, this.position.y, this.size * 1.5, this.size, 0, 0, Math.PI * 2);
            crc2.fill();
            crc2.closePath();

            // Draw stripes (three black stripes)
            crc2.beginPath();
            crc2.fillStyle = 'black';
            crc2.fillRect(this.position.x - this.size * 0.4, this.position.y - this.size, this.size * 0.3, this.size * 2);
            crc2.fillRect(this.position.x, this.position.y - this.size, this.size * 0.3, this.size * 2);
            crc2.fillRect(this.position.x + this.size * 0.4, this.position.y - this.size, this.size * 0.3, this.size * 2);
            crc2.closePath();

            // Draw wings (white ellipses)
            crc2.beginPath();
            crc2.fillStyle = 'white';
            crc2.ellipse(this.position.x - this.size * 0.4, this.position.y - this.size * 0.8, this.size * 0.8, this.size * 0.4, Math.PI * 0.25, 0, Math.PI * 2);
            crc2.fill();
            crc2.closePath();

            crc2.beginPath();
            crc2.ellipse(this.position.x + this.size * 0.4, this.position.y - this.size * 0.8, this.size * 0.8, this.size * 0.4, -Math.PI * 0.25, 0, Math.PI * 2);
            crc2.fill();
            crc2.closePath();

            // Draw eye (black circle)
            crc2.beginPath();
            crc2.fillStyle = 'black';
            crc2.arc(this.position.x - this.size * 0.3, this.position.y - this.size * 0.4, this.size * 0.1, 0, Math.PI * 2);
            crc2.fill();
            crc2.closePath();

            // Draw stinger (black triangle)
            crc2.beginPath();
            crc2.moveTo(this.position.x + this.size * 1.2, this.position.y);
            crc2.lineTo(this.position.x + this.size * 1.4, this.position.y + this.size * 0.2);
            crc2.lineTo(this.position.x + this.size * 1.4, this.position.y - this.size * 0.2);
            crc2.fill();
            crc2.closePath();
        }
    }
}
