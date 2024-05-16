"use strict";
/*
Aufgabe: L09_EntenteichClasses
Name: Marius Dauner
Matrikel: 275813
Datum: 11.05.24
Quellen: mithilfe von ChatGPT erarbeitet da ich sonst verzweifelt wäre
*/
var L09_EntenteichClasses;
(function (L09_EntenteichClasses) {
    window.addEventListener("load", handleLoad);
    let crc2;
    let line = 0.46;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        let horizon = crc2.canvas.height * line;
        function drawBackground() {
            console.log("Background");
            // Hintergrund unterhalb der Berge (Grün)
            crc2.fillStyle = "#93d444";
            crc2.fillRect(0, horizon, crc2.canvas.width, crc2.canvas.height - horizon);
            // Hintergrund über den Bergen (Blau)
            crc2.fillStyle = "#7ecaf5";
            crc2.fillRect(0, 0, crc2.canvas.width, horizon);
        }
        function drawMountains() {
            console.log("Mountains");
            // Linke Bergspitze (kleinster Berg)
            let leftMountainHeight = 150;
            crc2.beginPath();
            crc2.moveTo(0, horizon);
            crc2.lineTo(crc2.canvas.width * 0.2, horizon - leftMountainHeight);
            crc2.quadraticCurveTo(crc2.canvas.width * 0.25, horizon - leftMountainHeight - 50, crc2.canvas.width * 0.3, horizon - leftMountainHeight);
            crc2.lineTo(crc2.canvas.width * 0.4, horizon);
            crc2.closePath();
            crc2.fillStyle = "#91c06c"; // Grünton für den linken Berg
            crc2.fill();
            // Mittlere Bergspitze (mittlerer Berg)
            let middleMountainHeight = 250;
            crc2.beginPath();
            crc2.moveTo(crc2.canvas.width * 0.3, horizon);
            crc2.lineTo(crc2.canvas.width * 0.5, horizon - middleMountainHeight);
            crc2.quadraticCurveTo(crc2.canvas.width * 0.55, horizon - middleMountainHeight - 50, crc2.canvas.width * 0.6, horizon - middleMountainHeight);
            crc2.lineTo(crc2.canvas.width * 0.9, horizon);
            crc2.closePath();
            crc2.fillStyle = "#60a22c"; // Grünton für den mittleren Berg
            crc2.fill();
            // Rechte Bergspitze (größter Berg)
            crc2.beginPath();
            crc2.moveTo(crc2.canvas.width * 0.7, horizon);
            crc2.lineTo(crc2.canvas.width * 0.95, 50);
            crc2.quadraticCurveTo(crc2.canvas.width * 1.025, 20, crc2.canvas.width * 1.1, horizon);
            crc2.closePath();
            crc2.fillStyle = "#357305"; // Grünton für den rechten Berg
            crc2.fill();
        }
        function drawPond() {
            console.log("Pond");
            let pondWidth = 700; // Breite des Teichs
            let pondHeight = 200; // Höhe des Teichs
            let pondX = (crc2.canvas.width - pondWidth) / 2; // X-Position des Teichs (in der Mitte)
            let pondY = crc2.canvas.height * 0.7 - pondHeight / 2; // Y-Position des Teichs (etwas höher als zuvor)
            // Braune Umrandung um den Teich
            crc2.beginPath();
            crc2.ellipse(pondX + pondWidth / 2, pondY + pondHeight / 2, pondWidth / 2 + 10, pondHeight / 2 + 10, 0, 0, Math.PI * 2);
            crc2.closePath();
            crc2.fillStyle = "#8B4513"; // Brauner Farbton für die Umrandung
            crc2.fill();
            // Teich
            crc2.beginPath();
            crc2.ellipse(pondX + pondWidth / 2, pondY + pondHeight / 2, pondWidth / 2, pondHeight / 2, 0, 0, Math.PI * 2);
            crc2.closePath();
            crc2.fillStyle = "#48CAE4"; // Blauton für den Teich
            crc2.fill();
        }
        class Duck {
            canvas;
            context;
            position;
            constructor(canvas, context, position) {
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
            drawHead() {
                this.context.beginPath();
                this.context.arc(this.position.x + 50, this.position.y + 30, 40, 0, Math.PI * 2);
                this.context.fillStyle = 'yellow';
                this.context.fill();
                this.context.closePath();
            }
            drawBody() {
                this.context.beginPath();
                this.context.ellipse(this.position.x + 50, this.position.y + 80, 50, 30, 0, 0, Math.PI * 2);
                this.context.fillStyle = 'yellow';
                this.context.fill();
                this.context.closePath();
            }
            drawEye() {
                this.context.beginPath();
                this.context.arc(this.position.x + 30, this.position.y + 20, 5, 0, Math.PI * 2);
                this.context.fillStyle = 'black';
                this.context.fill();
                this.context.closePath();
            }
            drawBeak() {
                this.context.beginPath();
                this.context.moveTo(this.position.x + 60, this.position.y + 30);
                this.context.lineTo(this.position.x + 80, this.position.y + 30);
                this.context.lineTo(this.position.x + 70, this.position.y + 40);
                this.context.fillStyle = 'red';
                this.context.fill();
                this.context.closePath();
            }
        }
        drawBackground();
        drawMountains();
        drawPond();
        // Verwendung
        const context = canvas.getContext('2d');
        const pondX = (canvas.width - 700) / 2; // Position X des Teichs (Mitte des Canvas - Hälfte der Teichbreite)
        const pondY = canvas.height * 0.7 - 200 / 2; // Position Y des Teichs (etwas höher als zuvor)
        const ducks = [];
        ducks.push(new Duck(canvas, context, { x: pondX + 20, y: pondY + 20 }));
        ducks.push(new Duck(canvas, context, { x: pondX + 120, y: pondY + 80 }));
        ducks.push(new Duck(canvas, context, { x: pondX + 200, y: pondY + 40 }));
        // Alle Enten zeichnen
        ducks.forEach(duck => duck.draw());
        class Cloud {
            canvas;
            context;
            position;
            size;
            constructor(canvas, context, position, size) {
                this.canvas = canvas;
                this.context = context;
                this.position = position;
                this.size = size;
            }
            draw() {
                this.context.beginPath();
                this.context.fillStyle = 'white';
                // Zeichne drei überlappende Ellipsen für die Wolke
                this.drawEllipse(this.position.x - this.size * 0.6, this.position.y, this.size * 0.8, this.size * 0.6);
                this.drawEllipse(this.position.x, this.position.y, this.size, this.size * 0.7);
                this.drawEllipse(this.position.x + this.size * 0.6, this.position.y, this.size * 0.8, this.size * 0.6);
                this.context.closePath();
                this.context.fill();
            }
            drawEllipse(x, y, width, height) {
                this.context.save();
                this.context.beginPath();
                this.context.translate(x + width / 2, y + height / 2);
                this.context.scale(1, height / width);
                this.context.arc(0, 0, width / 2, 0, Math.PI * 2);
                this.context.restore();
                this.context.fill(); // Füllen der Ellipse
            }
        }
        // Verwendung
        const clouds = [];
        clouds.push(new Cloud(canvas, context, { x: 100, y: 150 }, 50));
        clouds.push(new Cloud(canvas, context, { x: 300, y: 100 }, 70));
        clouds.push(new Cloud(canvas, context, { x: 500, y: 130 }, 90));
        // Alle Wolken zeichnen
        clouds.forEach(cloud => cloud.draw());
    }
})(L09_EntenteichClasses || (L09_EntenteichClasses = {}));
//# sourceMappingURL=main.js.map