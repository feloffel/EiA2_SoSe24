/*
Aufgabe: L09_EntenteichClasses
Name: Marius Dauner
Matrikel: 275813
Datum: 11.05.24
Quellen: -
*/

namespace L09_EntenteichClasses {
  window.addEventListener("load", handleLoad);
  export let crc2: CanvasRenderingContext2D;
  let line: number = 0.46;

  function handleLoad(_event: Event): void {
      let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
      if (!canvas) return;
      crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

      canvas.width = 1440;
    canvas.height = 780;

      let horizon: number = crc2.canvas.height * line;

      drawBackground(horizon);
      drawMountains(horizon);
      drawPond();

      let pondArea = {
          x: (crc2.canvas.width - 700) / 2,
          y: crc2.canvas.height * 0.7 - 200 / 2,
          width: 700,
          height: 200
      };

      const ducks: Duck[] = [];
      ducks.push(new Duck({ x: pondArea.x + 50, y: pondArea.y + 50 }, pondArea));
      ducks.push(new Duck({ x: pondArea.x + 150, y: pondArea.y + 150 }, pondArea));
      ducks.push(new Duck({ x: pondArea.x + 250, y: pondArea.y + 100 }, pondArea));

      ducks.forEach(duck => duck.draw());

      const clouds: Cloud[] = [];
      clouds.push(new Cloud(new Vector(100, 150), new Vector(100, 0), 100));
      clouds.push(new Cloud(new Vector(300, 100), new Vector(30, 0), 100));
      clouds.push(new Cloud(new Vector(500, 130), new Vector(60, 0), 100));

      setInterval(() => animate(horizon, ducks, clouds), 40);
  }

  function drawBackground(horizon: number): void {
      console.log("Background");

      crc2.fillStyle = "#93d444";
      crc2.fillRect(0, horizon, crc2.canvas.width, crc2.canvas.height - horizon);

      crc2.fillStyle = "#7ecaf5";
      crc2.fillRect(0, 0, crc2.canvas.width, horizon);
  }

  function drawMountains(horizon: number): void {
      console.log("Mountains");

      let leftMountainHeight: number = 150;
      crc2.beginPath();
      crc2.moveTo(0, horizon);
      crc2.lineTo(crc2.canvas.width * 0.2, horizon - leftMountainHeight);
      crc2.quadraticCurveTo(crc2.canvas.width * 0.25, horizon - leftMountainHeight - 50, crc2.canvas.width * 0.3, horizon - leftMountainHeight);
      crc2.lineTo(crc2.canvas.width * 0.4, horizon);
      crc2.closePath();
      crc2.fillStyle = "#91c06c";
      crc2.fill();

      let middleMountainHeight: number = 250;
      crc2.beginPath();
      crc2.moveTo(crc2.canvas.width * 0.3, horizon);
      crc2.lineTo(crc2.canvas.width * 0.5, horizon - middleMountainHeight);
      crc2.quadraticCurveTo(crc2.canvas.width * 0.55, horizon - middleMountainHeight - 50, crc2.canvas.width * 0.6, horizon - middleMountainHeight);
      crc2.lineTo(crc2.canvas.width * 0.9, horizon);
      crc2.closePath();
      crc2.fillStyle = "#60a22c";
      crc2.fill();

      crc2.beginPath();
      crc2.moveTo(crc2.canvas.width * 0.7, horizon);
      crc2.lineTo(crc2.canvas.width * 0.95, 50);
      crc2.quadraticCurveTo(crc2.canvas.width * 1.025, 20, crc2.canvas.width * 1.1, horizon);
      crc2.closePath();
      crc2.fillStyle = "#357305";
      crc2.fill();
  }

  function drawPond(): void {
      console.log("Pond");

      let pondWidth: number = 700;
      let pondHeight: number = 200;
      let pondX: number = (crc2.canvas.width - pondWidth) / 2;
      let pondY: number = crc2.canvas.height * 0.7 - pondHeight / 2;

      crc2.beginPath();
      crc2.ellipse(pondX + pondWidth / 2, pondY + pondHeight / 2, pondWidth / 2 + 10, pondHeight / 2 + 10, 0, 0, Math.PI * 2);
      crc2.closePath();
      crc2.fillStyle = "#8B4513";
      crc2.fill();

      crc2.beginPath();
      crc2.ellipse(pondX + pondWidth / 2, pondY + pondHeight / 2, pondWidth / 2, pondHeight / 2, 0, 0, Math.PI * 2);
      crc2.closePath();
      crc2.fillStyle = "#48CAE4";
      crc2.fill();
  }


  function drawTrees(treePositions: { x: number, y: number }[]): void {
    console.log("Bäume zeichnen");

    // Baumstämme und Kronen zeichnen
    treePositions.forEach(pos => {
        drawSingleTree(pos.x, pos.y);
    });
}

function drawSingleTree(x: number, y: number): void {
    // Baumkrone
    let treeTopX: number = x + 10; // X-Position der Baumkrone
    let treeTopY: number = y - 50; // Y-Position der Baumkrone
    let treeTopRadius: number = 50; // Radius der Baumkrone
    let colors: string[] = ["#356b34", "#4a793a", "#5c8642"]; // Verschiedene Grüntöne

    // Baumstamm
    crc2.fillStyle = "#8B4513"; // Braune Farbe für den Stamm
    crc2.fillRect(x, y, 20, 100);

    // Baumkrone
    for (let i = 0; i < colors.length; i++) {
        crc2.beginPath();
        crc2.fillStyle = colors[i];
        crc2.arc(treeTopX, treeTopY, treeTopRadius, 0, Math.PI * 2);
        crc2.closePath();
        crc2.fill();
        treeTopY -= 30; // Verschiebung für den nächsten Kreis nach oben
        treeTopRadius -= 10; // Verringere den Radius für den nächsten Kreis
    }
}


function drawSun(): void {
  console.log("Sun");

  // Sonne zeichnen
  crc2.fillStyle = "yellow";
  crc2.beginPath();
  crc2.arc(100, 100, 50, 0, Math.PI * 2);
  crc2.closePath();
  crc2.fill();

  // Sonnenstrahlen zeichnen
  crc2.strokeStyle = "yellow";
  crc2.lineWidth = 2;
  for (let i = 0; i < 16; i++) {
      let angle = (Math.PI / 8) * i;
      let x1 = 100 + Math.cos(angle) * 50;
      let y1 = 100 + Math.sin(angle) * 50;
      let x2 = 100 + Math.cos(angle) * 70;
      let y2 = 100 + Math.sin(angle) * 70;
      crc2.beginPath();
      crc2.moveTo(x1, y1);
      crc2.lineTo(x2, y2);
      crc2.closePath();
      crc2.stroke();
  }
}

function drawFlowers(flowerPositions: { x: number, y: number }[]): void {
  console.log("Blumen zeichnen");

  flowerPositions.forEach(pos => {
      drawSingleFlower(pos.x, pos.y);
  });
}

function drawSingleFlower(x: number, y: number): void {
  // Stiel der Blume
  crc2.fillStyle = "#228B22"; // Grün für den Stiel
  crc2.fillRect(x, y, 2, 40);

  // Blüte der Blume
  crc2.fillStyle = "#FFC0CB"; // Rosa für die Blüte
  crc2.beginPath();
  crc2.arc(x + 1, y - 6, 10, 0, Math.PI * 2); // Mittlere Blüte
  crc2.fill();
  crc2.beginPath();
  crc2.arc(x - 7, y - 5, 10, 0, Math.PI * 2); // Linke obere Blüte
  crc2.fill();
  crc2.beginPath();
  crc2.arc(x + 9, y - 5, 10, 0, Math.PI * 2); // Rechte obere Blüte
  crc2.fill();
  crc2.beginPath();
  crc2.arc(x - 7, y + 4, 10, 0, Math.PI * 2); // Linke untere Blüte
  crc2.fill();
  crc2.beginPath();
  crc2.arc(x + 9, y + 4, 10, 0, Math.PI * 2); // Rechte untere Blüte
  crc2.fill();
}

function drawSeaLeaf(x: number, y: number, width: number, height: number): void {
  // Dunkelgrüne Farbe für das Seeblatt
  crc2.fillStyle = "#006400";

  // Seeblatt zeichnen
  crc2.beginPath();
  crc2.moveTo(x, y);
  crc2.quadraticCurveTo(x + width / 2, y - height / 2, x + width, y);
  crc2.quadraticCurveTo(x + width / 2, y + height / 2, x, y);
  crc2.closePath();
  crc2.fill();
}





  function animate(horizon: number, ducks: Duck[], clouds: Cloud[]): void {
      drawBackground(horizon);
      drawPond();
      drawMountains(horizon);
      drawSun();
      drawFlowers([
        {x:200, y:400},
        {x:300, y:450},
        {x:400, y:380},
        {x:580, y:350},
        {x:650, y:380},
        {x:50, y:400},
        {x:50, y:500},
        {x:150, y:650},
        {x:120, y:550},
        {x:320, y:550},
        {x:280, y:630},
        {x:830, y:360},
        {x:780, y:390},
        {x:1000, y:400},
        {x:1200, y:370},
        {x:1250, y:440},
        {x:1300, y:540},
        {x:1120, y:540},
        {x:1150, y:600},
        {x:1050, y:620},
        {x:1280, y:650},
        {x:1400, y:610},
        {x:1350, y:680},
        {x:350, y:690},
        {x:440, y:420},
        {x:575, y:710},
        {x:450, y:710},
        {x:410, y:640},
        {x:800, y:720},
        {x:900, y:670},
        {x:1000, y:710},
        {x:1100, y:690},
        {x:700, y:695},
        {x:250, y:710},
        {x:1250, y:720},

      ]);

      drawSeaLeaf(920, 530, 50, 70);

      ducks.forEach(duck => duck.draw());
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
  }
  }

