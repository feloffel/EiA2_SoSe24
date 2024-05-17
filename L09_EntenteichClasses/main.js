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
    let line = 0.46;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L09_EntenteichClasses.crc2 = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        let horizon = L09_EntenteichClasses.crc2.canvas.height * line;
        function drawBackground() {
            console.log("Background");
            // Hintergrund unterhalb der Berge (Grün)
            L09_EntenteichClasses.crc2.fillStyle = "#93d444";
            L09_EntenteichClasses.crc2.fillRect(0, horizon, L09_EntenteichClasses.crc2.canvas.width, L09_EntenteichClasses.crc2.canvas.height - horizon);
            // Hintergrund über den Bergen (Blau)
            L09_EntenteichClasses.crc2.fillStyle = "#7ecaf5";
            L09_EntenteichClasses.crc2.fillRect(0, 0, L09_EntenteichClasses.crc2.canvas.width, horizon);
        }
        function drawMountains() {
            console.log("Mountains");
            // Linke Bergspitze (kleinster Berg)
            let leftMountainHeight = 150;
            L09_EntenteichClasses.crc2.beginPath();
            L09_EntenteichClasses.crc2.moveTo(0, horizon);
            L09_EntenteichClasses.crc2.lineTo(L09_EntenteichClasses.crc2.canvas.width * 0.2, horizon - leftMountainHeight);
            L09_EntenteichClasses.crc2.quadraticCurveTo(L09_EntenteichClasses.crc2.canvas.width * 0.25, horizon - leftMountainHeight - 50, L09_EntenteichClasses.crc2.canvas.width * 0.3, horizon - leftMountainHeight);
            L09_EntenteichClasses.crc2.lineTo(L09_EntenteichClasses.crc2.canvas.width * 0.4, horizon);
            L09_EntenteichClasses.crc2.closePath();
            L09_EntenteichClasses.crc2.fillStyle = "#91c06c"; // Grünton für den linken Berg
            L09_EntenteichClasses.crc2.fill();
            // Mittlere Bergspitze (mittlerer Berg)
            let middleMountainHeight = 250;
            L09_EntenteichClasses.crc2.beginPath();
            L09_EntenteichClasses.crc2.moveTo(L09_EntenteichClasses.crc2.canvas.width * 0.3, horizon);
            L09_EntenteichClasses.crc2.lineTo(L09_EntenteichClasses.crc2.canvas.width * 0.5, horizon - middleMountainHeight);
            L09_EntenteichClasses.crc2.quadraticCurveTo(L09_EntenteichClasses.crc2.canvas.width * 0.55, horizon - middleMountainHeight - 50, L09_EntenteichClasses.crc2.canvas.width * 0.6, horizon - middleMountainHeight);
            L09_EntenteichClasses.crc2.lineTo(L09_EntenteichClasses.crc2.canvas.width * 0.9, horizon);
            L09_EntenteichClasses.crc2.closePath();
            L09_EntenteichClasses.crc2.fillStyle = "#60a22c"; // Grünton für den mittleren Berg
            L09_EntenteichClasses.crc2.fill();
            // Rechte Bergspitze (größter Berg)
            L09_EntenteichClasses.crc2.beginPath();
            L09_EntenteichClasses.crc2.moveTo(L09_EntenteichClasses.crc2.canvas.width * 0.7, horizon);
            L09_EntenteichClasses.crc2.lineTo(L09_EntenteichClasses.crc2.canvas.width * 0.95, 50);
            L09_EntenteichClasses.crc2.quadraticCurveTo(L09_EntenteichClasses.crc2.canvas.width * 1.025, 20, L09_EntenteichClasses.crc2.canvas.width * 1.1, horizon);
            L09_EntenteichClasses.crc2.closePath();
            L09_EntenteichClasses.crc2.fillStyle = "#357305"; // Grünton für den rechten Berg
            L09_EntenteichClasses.crc2.fill();
        }
        function drawPond() {
            console.log("Pond");
            let pondWidth = 700; // Breite des Teichs
            let pondHeight = 200; // Höhe des Teichs
            let pondX = (L09_EntenteichClasses.crc2.canvas.width - pondWidth) / 2; // X-Position des Teichs (in der Mitte)
            let pondY = L09_EntenteichClasses.crc2.canvas.height * 0.7 - pondHeight / 2; // Y-Position des Teichs (etwas höher als zuvor)
            // Braune Umrandung um den Teich
            L09_EntenteichClasses.crc2.beginPath();
            L09_EntenteichClasses.crc2.ellipse(pondX + pondWidth / 2, pondY + pondHeight / 2, pondWidth / 2 + 10, pondHeight / 2 + 10, 0, 0, Math.PI * 2);
            L09_EntenteichClasses.crc2.closePath();
            L09_EntenteichClasses.crc2.fillStyle = "#8B4513"; // Brauner Farbton für die Umrandung
            L09_EntenteichClasses.crc2.fill();
            // Teich
            L09_EntenteichClasses.crc2.beginPath();
            L09_EntenteichClasses.crc2.ellipse(pondX + pondWidth / 2, pondY + pondHeight / 2, pondWidth / 2, pondHeight / 2, 0, 0, Math.PI * 2);
            L09_EntenteichClasses.crc2.closePath();
            L09_EntenteichClasses.crc2.fillStyle = "#48CAE4"; // Blauton für den Teich
            L09_EntenteichClasses.crc2.fill();
        }
        drawBackground();
        drawMountains();
        drawPond();
        // Verwendung
        const context = canvas.getContext('2d');
        const pondX = (canvas.width - 700) / 2; // Position X des Teichs (Mitte des Canvas - Hälfte der Teichbreite)
        const pondY = canvas.height * 0.7 - 200 / 2; // Position Y des Teichs (etwas höher als zuvor)
        const ducks = [];
        ducks.push(new L09_EntenteichClasses.Duck(canvas, context, { x: pondX + 20, y: pondY + 20 }));
        ducks.push(new L09_EntenteichClasses.Duck(canvas, context, { x: pondX + 120, y: pondY + 80 }));
        ducks.push(new L09_EntenteichClasses.Duck(canvas, context, { x: pondX + 200, y: pondY + 40 }));
        // Alle Enten zeichnen
        ducks.forEach(duck => duck.draw());
        // Verwendung
        const clouds = [];
        clouds.push(new L09_EntenteichClasses.Cloud(new L09_EntenteichClasses.Vector(100, 150), new L09_EntenteichClasses.Vector(100, 0), 100));
        clouds.push(new L09_EntenteichClasses.Cloud(new L09_EntenteichClasses.Vector(300, 100), new L09_EntenteichClasses.Vector(30, 0), 100));
        clouds.push(new L09_EntenteichClasses.Cloud(new L09_EntenteichClasses.Vector(500, 130), new L09_EntenteichClasses.Vector(60, 0), 100));
        setInterval(animate, 40);
        function animate() {
            // Alle Wolken zeichnen
            drawBackground();
            drawMountains();
            drawPond();
            ducks.forEach(duck => duck.draw());
            clouds.forEach(cloud => cloud.move(40 / 1000));
            clouds.forEach(cloud => cloud.draw());
        }
    }
})(L09_EntenteichClasses || (L09_EntenteichClasses = {}));
//# sourceMappingURL=main.js.map