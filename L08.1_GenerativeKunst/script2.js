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
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // Clear canvas
    crc2.clearRect(0, 0, canvas.width, canvas.height);
    let pattern = document.createElement('canvas').getContext('2d');
    pattern.canvas.width = 40;
    pattern.canvas.height = 20;
    pattern.fillStyle = '#fec';
    pattern.fillRect(0, 0, pattern.canvas.width, pattern.canvas.height);
    pattern.moveTo(10, 10);
    pattern.lineTo(10, 10);
    pattern.lineTo(10, 0);
    pattern.lineTo(10, 0);
    pattern.lineTo(10, 10);
    pattern.lineTo(10, 20);
    pattern.lineTo(10, 20);
    pattern.lineTo(10, 10);
    pattern.stroke();
    crc2.fillStyle = crc2.createPattern(pattern.canvas, 'repeat');
    crc2.fillRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < 10; i++) {
        crc2.beginPath();
        crc2.arc(100, 100, 20, 0, 2.5 * Math.random());
        crc2.closePath();
        crc2.stroke();
        let path = new Path2D();
        path.arc(60, 60, 50, 0, 5 * Math.random());
        crc2.stroke(path);
        for (let i = 0; i < 10; i++) {
            function getRandomColor() {
                const letters = "0123456789ABCDEF";
                let color = "#";
                for (let i = 0; i < 6; i++) {
                    color += letters[Math.floor(Math.random() * 16)];
                }
                return color;
            }
            // Random position
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            // Random size
            const size = Math.random() * 50;
            // Random color
            const color = getRandomColor();
            // Random shape
            const shape = Math.random();
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
        }
        crc2.moveTo(2.1, 1);
        crc2.lineTo(2.1, 10);
        crc2.moveTo(4.5, 1);
        crc2.lineTo(4.5, 10);
        crc2.moveTo(7.5, 1);
        crc2.lineTo(10.5, 10);
        crc2.stroke();
    }
    ;
};
//# sourceMappingURL=script2.js.map