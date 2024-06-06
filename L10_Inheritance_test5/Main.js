"use strict";
var L09_EntenteichClasses;
(function (L09_EntenteichClasses) {
    window.addEventListener("load", handleLoad);
    let line = 0.46;
    let ducks = [];
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L09_EntenteichClasses.crc2 = canvas.getContext("2d");
        L09_EntenteichClasses.crc2.fillRect(0, 0, L09_EntenteichClasses.crc2.canvas.width, L09_EntenteichClasses.crc2.canvas.height);
        canvas.width = 1440;
        canvas.height = 780;
        let horizon = L09_EntenteichClasses.crc2.canvas.height * line;
        drawBackground(horizon);
        drawMountains(horizon);
        drawPond();
        const clouds = [];
        clouds.push(new L09_EntenteichClasses.Cloud(new L09_EntenteichClasses.Vector(100, 150), new L09_EntenteichClasses.Vector(100, 0), 100));
        clouds.push(new L09_EntenteichClasses.Cloud(new L09_EntenteichClasses.Vector(300, 100), new L09_EntenteichClasses.Vector(30, 0), 100));
        clouds.push(new L09_EntenteichClasses.Cloud(new L09_EntenteichClasses.Vector(500, 130), new L09_EntenteichClasses.Vector(60, 0), 100));
        // Erstelle die Enten
        for (let i = 0; i < 5; i++) {
            ducks.push(createDuck());
        }
        setInterval(() => animate(horizon, clouds), 40);
    }
    function createDuck() {
        let r = Math.random();
        let state = "swim";
        let pondX = (L09_EntenteichClasses.crc2.canvas.width - 700) / 2;
        let pondY = L09_EntenteichClasses.crc2.canvas.height * 0.7 - 200 / 2;
        let x = pondX + Math.random() * 700;
        let y = pondY + Math.random() * 200;
        if (r < 0.3) {
            state = "stand";
            x = pondX + Math.random() * 700;
            y = pondY + Math.random() * 80;
        }
        else if (r > 0.8) {
            state = "dive";
            x = pondX + Math.random() * 700;
            y = pondY + Math.random() * 100;
        }
        let initialPosition = new L09_EntenteichClasses.Vector(x, y);
        let pondArea = { x: pondX, y: pondY, width: 700, height: 200 };
        let duck = new L09_EntenteichClasses.Duck(initialPosition, pondArea, state, false);
        return duck;
    }
    function drawBackground(horizon) {
        console.log("Background");
        L09_EntenteichClasses.crc2.fillStyle = "#93d444";
        L09_EntenteichClasses.crc2.fillRect(0, horizon, L09_EntenteichClasses.crc2.canvas.width, L09_EntenteichClasses.crc2.canvas.height - horizon);
        L09_EntenteichClasses.crc2.fillStyle = "#7ecaf5";
        L09_EntenteichClasses.crc2.fillRect(0, 0, L09_EntenteichClasses.crc2.canvas.width, horizon);
    }
    function drawMountains(horizon) {
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
    function drawPond() {
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
    function drawTrees(treePositions) {
        console.log("Bäume zeichnen");
        // Baumstämme und Kronen zeichnen
        treePositions.forEach(pos => {
            drawSingleTree(pos.x, pos.y);
        });
    }
    function drawSingleTree(x, y) {
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
    function drawSun() {
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
    function drawFlowers(flowerPositions) {
        console.log("Blumen zeichnen");
        flowerPositions.forEach(pos => {
            drawSingleFlower(pos.x, pos.y);
        });
    }
    function drawSingleFlower(x, y) {
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
    function drawSeaLeaf(x, y, width, height) {
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
    function animate(horizon, clouds) {
        L09_EntenteichClasses.crc2.clearRect(0, 0, L09_EntenteichClasses.crc2.canvas.width, L09_EntenteichClasses.crc2.canvas.height);
        drawBackground(horizon);
        drawPond();
        drawMountains(horizon);
        drawSun();
        drawFlowers([
            { x: 200, y: 400 },
            { x: 300, y: 450 },
            { x: 400, y: 380 },
            { x: 580, y: 350 },
            { x: 650, y: 380 },
            { x: 50, y: 400 },
            { x: 50, y: 500 },
            { x: 150, y: 650 },
            { x: 120, y: 550 },
            { x: 320, y: 550 },
            { x: 280, y: 630 },
            { x: 830, y: 360 },
            { x: 780, y: 390 },
            { x: 1000, y: 400 },
            { x: 1200, y: 370 },
            { x: 1250, y: 440 },
            { x: 1300, y: 540 },
            { x: 1120, y: 540 },
            { x: 1150, y: 600 },
            { x: 1050, y: 620 },
            { x: 1280, y: 650 },
            { x: 1400, y: 610 },
            { x: 1350, y: 680 },
            { x: 350, y: 690 },
            { x: 440, y: 420 },
            { x: 575, y: 710 },
            { x: 450, y: 710 },
            { x: 410, y: 640 },
            { x: 800, y: 720 },
            { x: 900, y: 670 },
            { x: 1000, y: 710 },
            { x: 1100, y: 690 },
            { x: 700, y: 695 },
            { x: 250, y: 710 },
            { x: 1250, y: 720 }
        ]);
        drawSeaLeaf(920, 530, 50, 70);
        clouds.forEach(cloud => cloud.move(40 / 1000));
        clouds.forEach(cloud => cloud.draw());
        drawTrees([
            { x: 100, y: 400 },
            { x: 300, y: 300 },
            { x: 500, y: 320 },
            { x: 700, y: 290 },
            { x: 900, y: 330 },
            { x: 1100, y: 380 },
            { x: 1300, y: 290 },
            { x: 50, y: 700 },
            { x: 200, y: 600 },
            { x: 1200, y: 600 },
            { x: 1350, y: 500 },
        ]);
        ducks.forEach(duck => duck.draw());
    }
})(L09_EntenteichClasses || (L09_EntenteichClasses = {}));
//# sourceMappingURL=Main.js.map