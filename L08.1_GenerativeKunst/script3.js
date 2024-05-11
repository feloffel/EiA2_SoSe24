"use strict";
/*
Aufgabe: L08.1_GenerativeKunst
Name: Marius Dauner
Matrikel: 275813
Datum: 01.05.24
Quellen: -
*/
console.log("Skript wurde geladen!");
window.onload = () => {
    const canvas = document.querySelector("#myCanvas");
    const crc2 = canvas.getContext("2d");
    //make Canvas fill up whole viewport
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // Clear canvas
    crc2.clearRect(0, 0, canvas.width, canvas.height);
    function getRandomColor() {
        const hue = Math.random() * 1100 + Math.random() * 50; // Hue in einem Bereich von 200 bis 250 (Blauabstufungen)
        const saturation = Math.floor(Math.random() * 21) + 40; // Sättigung in einem Bereich von 40 bis 60
        const lightness = Math.floor(Math.random() * 21) + 40; // Helligkeit in einem Bereich von 40 bis 60
        return `hsl(${hue}, ${saturation}%, ${lightness}%)`; // HSL-Farbe konstruieren
    }
    // Generate random shapes
    const numShapesX = 10;
    const numShapesY = 5;
    const shapeSize = 50;
    for (let i = 0; i < numShapesX; i++) {
        for (let j = 0; j < numShapesY; j++) {
            // Random position
            const x = i * (canvas.width / numShapesX) + 70;
            const y = j * (canvas.height / numShapesY) + 70;
            // Random size
            const size = shapeSize * 0.5;
            // Random color
            const color = getRandomColor();
            // Random shape
            const shape = Math.random();
            // Draw shapes
            crc2.beginPath();
            if (shape < 0.3) {
                // Circle
                crc2.arc(x, y, size, 0, 2 * Math.PI);
            }
            else if (shape < 0.6) {
                // Rectangle
                crc2.rect(x, y, size, size);
            }
            else {
                // Triangle
                crc2.moveTo(x, y);
                crc2.lineTo(x + size, y);
                crc2.lineTo(x + size / 2, y + size);
                crc2.closePath();
            }
            crc2.fillStyle = color;
            crc2.fill();
        }
    }
};
//# sourceMappingURL=script3.js.map