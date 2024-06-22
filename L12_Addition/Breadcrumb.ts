namespace L09_EntenteichClasses {
    export class Breadcrumb {
        private position: Vector;

        constructor(position: Vector) {
            this.position = position;
        }

        public draw(): void {
            crc2.fillStyle = "red";  // Erdbeerfarbe
            crc2.beginPath();
            crc2.arc(this.position.x, this.position.y, 10, 0, Math.PI * 2);  // Größere Kreis für die Erdbeerform
            crc2.closePath();
            crc2.fill();
        
            // Zeichne kleine Vertiefung (Stiel der Erdbeere)
            crc2.fillStyle = "green";  // Stielfarbe
            crc2.beginPath();
            crc2.arc(this.position.x, this.position.y - 10, 3, 0, Math.PI * 2);  // Kleinerer Kreis für den Stiel
            crc2.closePath();
            crc2.fill();
        }
        
        
        
        
    }
}