namespace L09_EntenteichClasses {
    export class Duck {
        private canvas: HTMLCanvasElement;
        private context: CanvasRenderingContext2D;
        private position: { x: number, y: number };

        constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D, position: { x: number, y: number }) {
            this.canvas = canvas;
            this.context = context;
            this.position = position;
        }

        draw() {
            this.drawHead();
            this.drawBody();
            this.drawEye();
            this.drawBeak();
        }

        update(): void {
            // Hier könntest du die Bewegungslogik für die Enten implementieren
            // Zum Beispiel könntest du ihre x- und y-Positionen basierend auf ihren Bewegungsvektoren aktualisieren
            // Hier ist ein Beispiel, wie du die Enten einfach horizontal bewegen lassen kannst:
            this.position.x += 1; // Ändere die Geschwindigkeit nach Bedarf
            if (this.position.x > this.canvas.width) {
                this.position.x = -50; // Setze die Ente zurück, wenn sie den rechten Rand erreicht
            }
        }

        private drawHead() {
            this.context.beginPath();
            this.context.arc(this.position.x + 50, this.position.y + 30, 40, 0, Math.PI * 2);
            this.context.fillStyle = 'yellow';
            this.context.fill();
            this.context.closePath();
        }

        private drawBody() {
            this.context.beginPath();
            this.context.ellipse(this.position.x + 50, this.position.y + 80, 50, 30, 0, 0, Math.PI * 2);
            this.context.fillStyle = 'yellow';
            this.context.fill();
            this.context.closePath();
        }

        private drawEye() {
            this.context.beginPath();
            this.context.arc(this.position.x + 30, this.position.y + 20, 5, 0, Math.PI * 2);
            this.context.fillStyle = 'black';
            this.context.fill();
            this.context.closePath();
        }

        private drawBeak() {
            this.context.beginPath();
            this.context.moveTo(this.position.x + 60, this.position.y + 30);
            this.context.lineTo(this.position.x + 80, this.position.y + 30);
            this.context.lineTo(this.position.x + 70, this.position.y + 40);
            this.context.fillStyle = 'red';
            this.context.fill();
            this.context.closePath();
        }
    }
}