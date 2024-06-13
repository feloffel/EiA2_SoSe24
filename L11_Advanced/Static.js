"use strict";
var L09_EntenteichClasses;
(function (L09_EntenteichClasses) {
    class Static {
        position;
        constructor(_position) {
            this.position = _position;
        }
        static drawBackground(horizon) {
            console.log("Background");
            L09_EntenteichClasses.crc2.fillStyle = "#93d444";
            L09_EntenteichClasses.crc2.fillRect(0, horizon, L09_EntenteichClasses.crc2.canvas.width, L09_EntenteichClasses.crc2.canvas.height - horizon);
            L09_EntenteichClasses.crc2.fillStyle = "#7ecaf5";
            L09_EntenteichClasses.crc2.fillRect(0, 0, L09_EntenteichClasses.crc2.canvas.width, horizon);
        }
        static drawMountains(horizon) {
            console.log("Mountains");
            let leftMountainHeight = 150;
            L09_EntenteichClasses.crc2.beginPath();
            L09_EntenteichClasses.crc2.moveTo(0, horizon);
            L09_EntenteichClasses.crc2.lineTo(L09_EntenteichClasses.crc2.canvas.width * 0.2, horizon - leftMountainHeight);
            L09_EntenteichClasses.crc2.quadraticCurveTo(L09_EntenteichClasses.crc2.canvas.width * 0.25, horizon - leftMountainHeight - 50, L09_EntenteichClasses.crc2.canvas.width * 0.3, horizon - leftMountainHeight);
            L09_EntenteichClasses.crc2.lineTo(L09_EntenteichClasses.crc2.canvas.width * 0.4, horizon);
            L09_EntenteichClasses.crc2.closePath();
            L09_EntenteichClasses.crc2.fillStyle = "#91c06c";
            L09_EntenteichClasses.crc2.fill();
            let middleMountainHeight = 250;
            L09_EntenteichClasses.crc2.beginPath();
            L09_EntenteichClasses.crc2.moveTo(L09_EntenteichClasses.crc2.canvas.width * 0.3, horizon);
            L09_EntenteichClasses.crc2.lineTo(L09_EntenteichClasses.crc2.canvas.width * 0.5, horizon - middleMountainHeight);
            L09_EntenteichClasses.crc2.quadraticCurveTo(L09_EntenteichClasses.crc2.canvas.width * 0.55, horizon - middleMountainHeight - 50, L09_EntenteichClasses.crc2.canvas.width * 0.6, horizon - middleMountainHeight);
            L09_EntenteichClasses.crc2.lineTo(L09_EntenteichClasses.crc2.canvas.width * 0.9, horizon);
            L09_EntenteichClasses.crc2.closePath();
            L09_EntenteichClasses.crc2.fillStyle = "#60a22c";
            L09_EntenteichClasses.crc2.fill();
            L09_EntenteichClasses.crc2.beginPath();
            L09_EntenteichClasses.crc2.moveTo(L09_EntenteichClasses.crc2.canvas.width * 0.7, horizon);
            L09_EntenteichClasses.crc2.lineTo(L09_EntenteichClasses.crc2.canvas.width * 0.95, 50);
            L09_EntenteichClasses.crc2.quadraticCurveTo(L09_EntenteichClasses.crc2.canvas.width * 1.025, 20, L09_EntenteichClasses.crc2.canvas.width * 1.1, horizon);
            L09_EntenteichClasses.crc2.closePath();
            L09_EntenteichClasses.crc2.fillStyle = "#357305";
            L09_EntenteichClasses.crc2.fill();
        }
        static drawPond() {
            console.log("Pond");
            let pondWidth = 700;
            let pondHeight = 200;
            let pondX = (L09_EntenteichClasses.crc2.canvas.width - pondWidth) / 2;
            let pondY = L09_EntenteichClasses.crc2.canvas.height * 0.7 - pondHeight / 2;
            L09_EntenteichClasses.crc2.beginPath();
            L09_EntenteichClasses.crc2.ellipse(pondX + pondWidth / 2, pondY + pondHeight / 2, pondWidth / 2 + 10, pondHeight / 2 + 10, 0, 0, Math.PI * 2);
            L09_EntenteichClasses.crc2.closePath();
            L09_EntenteichClasses.crc2.fillStyle = "#8B4513";
            L09_EntenteichClasses.crc2.fill();
            L09_EntenteichClasses.crc2.beginPath();
            L09_EntenteichClasses.crc2.ellipse(pondX + pondWidth / 2, pondY + pondHeight / 2, pondWidth / 2, pondHeight / 2, 0, 0, Math.PI * 2);
            L09_EntenteichClasses.crc2.closePath();
            L09_EntenteichClasses.crc2.fillStyle = "#48CAE4";
            L09_EntenteichClasses.crc2.fill();
        }
        static drawTrees(treePositions) {
            console.log("Bäume zeichnen");
            // Baumstämme und Kronen zeichnen
            treePositions.forEach(pos => {
                Static.drawSingleTree(pos.x, pos.y);
            });
        }
        static drawSingleTree(x, y) {
            // Baumkrone
            let treeTopX = x + 10; // X-Position der Baumkrone
            let treeTopY = y - 50; // Y-Position der Baumkrone
            let treeTopRadius = 50; // Radius der Baumkrone
            let colors = ["#356b34", "#4a793a", "#5c8642"]; // Verschiedene Grüntöne
            // Baumstamm
            L09_EntenteichClasses.crc2.fillStyle = "#8B4513"; // Braune Farbe für den Stamm
            L09_EntenteichClasses.crc2.fillRect(x, y, 20, 100);
            // Baumkrone
            for (let i = 0; i < colors.length; i++) {
                L09_EntenteichClasses.crc2.beginPath();
                L09_EntenteichClasses.crc2.fillStyle = colors[i];
                L09_EntenteichClasses.crc2.arc(treeTopX, treeTopY, treeTopRadius, 0, Math.PI * 2);
                L09_EntenteichClasses.crc2.closePath();
                L09_EntenteichClasses.crc2.fill();
                treeTopY -= 30; // Verschiebung für den nächsten Kreis nach oben
                treeTopRadius -= 10; // Verringere den Radius für den nächsten Kreis
            }
        }
        static drawSun() {
            console.log("Sun");
            // Sonne zeichnen
            L09_EntenteichClasses.crc2.fillStyle = "yellow";
            L09_EntenteichClasses.crc2.beginPath();
            L09_EntenteichClasses.crc2.arc(100, 100, 50, 0, Math.PI * 2);
            L09_EntenteichClasses.crc2.closePath();
            L09_EntenteichClasses.crc2.fill();
            // Sonnenstrahlen zeichnen
            L09_EntenteichClasses.crc2.strokeStyle = "yellow";
            L09_EntenteichClasses.crc2.lineWidth = 2;
            for (let i = 0; i < 16; i++) {
                let angle = (Math.PI / 8) * i;
                let x1 = 100 + Math.cos(angle) * 50;
                let y1 = 100 + Math.sin(angle) * 50;
                let x2 = 100 + Math.cos(angle) * 70;
                let y2 = 100 + Math.sin(angle) * 70;
                L09_EntenteichClasses.crc2.beginPath();
                L09_EntenteichClasses.crc2.moveTo(x1, y1);
                L09_EntenteichClasses.crc2.lineTo(x2, y2);
                L09_EntenteichClasses.crc2.closePath();
                L09_EntenteichClasses.crc2.stroke();
            }
        }
        static drawFlowers(flowerPositions) {
            console.log("Blumen zeichnen");
            flowerPositions.forEach(pos => {
                Static.drawSingleFlower(pos.x, pos.y);
            });
        }
        static drawSingleFlower(x, y) {
            // Stiel der Blume
            L09_EntenteichClasses.crc2.fillStyle = "#228B22"; // Grün für den Stiel
            L09_EntenteichClasses.crc2.fillRect(x, y, 2, 40);
            // Blüte der Blume
            L09_EntenteichClasses.crc2.fillStyle = "#FFC0CB"; // Rosa für die Blüte
            L09_EntenteichClasses.crc2.beginPath();
            L09_EntenteichClasses.crc2.arc(x + 1, y - 6, 10, 0, Math.PI * 2); // Mittlere Blüte
            L09_EntenteichClasses.crc2.fill();
            L09_EntenteichClasses.crc2.beginPath();
            L09_EntenteichClasses.crc2.arc(x - 7, y - 5, 10, 0, Math.PI * 2); // Linke obere Blüte
            L09_EntenteichClasses.crc2.fill();
            L09_EntenteichClasses.crc2.beginPath();
            L09_EntenteichClasses.crc2.arc(x + 9, y - 5, 10, 0, Math.PI * 2); // Rechte obere Blüte
            L09_EntenteichClasses.crc2.fill();
            L09_EntenteichClasses.crc2.beginPath();
            L09_EntenteichClasses.crc2.arc(x - 7, y + 4, 10, 0, Math.PI * 2); // Linke untere Blüte
            L09_EntenteichClasses.crc2.fill();
            L09_EntenteichClasses.crc2.beginPath();
            L09_EntenteichClasses.crc2.arc(x + 9, y + 4, 10, 0, Math.PI * 2); // Rechte untere Blüte
            L09_EntenteichClasses.crc2.fill();
        }
        static drawSeaLeaf(x, y, width, height) {
            // Dunkelgrüne Farbe für das Seeblatt
            L09_EntenteichClasses.crc2.fillStyle = "#006400";
            // Seeblatt zeichnen
            L09_EntenteichClasses.crc2.beginPath();
            L09_EntenteichClasses.crc2.moveTo(x, y);
            L09_EntenteichClasses.crc2.quadraticCurveTo(x + width / 2, y - height / 2, x + width, y);
            L09_EntenteichClasses.crc2.quadraticCurveTo(x + width / 2, y + height / 2, x, y);
            L09_EntenteichClasses.crc2.closePath();
            L09_EntenteichClasses.crc2.fill();
        }
    }
    L09_EntenteichClasses.Static = Static;
})(L09_EntenteichClasses || (L09_EntenteichClasses = {}));
//# sourceMappingURL=Static.js.map