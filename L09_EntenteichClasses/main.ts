/*
Aufgabe: L09_EntenteichClasses
Name: Marius Dauner
Matrikel: 275813
Datum: 11.05.24
Quellen: mithilfe von ChatGPT erarbeitet da ich sonst verzweifelt wäre
*/

namespace L09_EntenteichClasses {

    interface Vector {
        x: number;
        y: number;
      }
    
      window.addEventListener("load", handleLoad);
      let crc2: CanvasRenderingContext2D;
      let line: number = 0.46;
    
      function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
          return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
    
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    
        let horizon: number = crc2.canvas.height * line

        function drawBackground(): void {
            console.log("Background");
        
            // Hintergrund unterhalb der Berge (Grün)
            crc2.fillStyle = "#93d444";
            crc2.fillRect(0, horizon, crc2.canvas.width, crc2.canvas.height - horizon);
        
            // Hintergrund über den Bergen (Blau)
            crc2.fillStyle = "#7ecaf5";
            crc2.fillRect(0, 0, crc2.canvas.width, horizon);
        }
        


        function drawMountains(): void {
          console.log("Mountains");
      
          // Linke Bergspitze (kleinster Berg)
          let leftMountainHeight: number = 150;
          crc2.beginPath();
          crc2.moveTo(0, horizon);
          crc2.lineTo(crc2.canvas.width * 0.2, horizon - leftMountainHeight);
          crc2.quadraticCurveTo(crc2.canvas.width * 0.25, horizon - leftMountainHeight - 50, crc2.canvas.width * 0.3, horizon - leftMountainHeight);
          crc2.lineTo(crc2.canvas.width * 0.4, horizon);
          crc2.closePath();
          crc2.fillStyle = "#91c06c"; // Grünton für den linken Berg
          crc2.fill();
      
          // Mittlere Bergspitze (mittlerer Berg)
          let middleMountainHeight: number = 250;
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
      
      
      
    
    
     
          
        function drawPond(): void {
            console.log("Pond");
        
            let pondWidth: number = 700; // Breite des Teichs
            let pondHeight: number = 200; // Höhe des Teichs
            let pondX: number = (crc2.canvas.width - pondWidth) / 2; // X-Position des Teichs (in der Mitte)
            let pondY: number = crc2.canvas.height * 0.7 - pondHeight / 2; // Y-Position des Teichs (etwas höher als zuvor)
        
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
        
        
        
        
        
          



        drawBackground();
        drawMountains();
        drawPond();



  }
}