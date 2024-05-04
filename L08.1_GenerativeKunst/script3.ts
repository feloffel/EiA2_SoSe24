/*
Aufgabe: L08.1_GenerativeKunst
Name: Marius Dauner
Matrikel: 275813
Datum: 01.05.24
Quellen: -
*/


    console.log("Skript wurde geladen!");

    window.onload = () => {
        const canvas: HTMLCanvasElement = document.querySelector("#myCanvas")!;
        const crc2: CanvasRenderingContext2D = canvas.getContext("2d")!;
    
        //make Canvas fill up whole viewport
        canvas.width = window.innerWidth; 
        canvas.height = window.innerHeight;

        // Clear canvas
        crc2.clearRect(0, 0, canvas.width, canvas.height);
    
        function getRandomColor(): string {
            const hue: number = Math.random()*1100 + Math.random() * 50; // Hue in einem Bereich von 200 bis 250 (Blauabstufungen)
            const saturation: number = Math.floor(Math.random() * 21) + 40; // Sättigung in einem Bereich von 40 bis 60
            const lightness: number = Math.floor(Math.random() * 21) + 40; // Helligkeit in einem Bereich von 40 bis 60
        
            return `hsl(${hue}, ${saturation}%, ${lightness}%)`; // HSL-Farbe konstruieren
        }
        
        
    
        // Generate random shapes
        const numShapesX: number = 10;
        const numShapesY: number = 5;
        const shapeSize: number = 50;
    
        for (let i = 0; i < numShapesX; i++) {
            for (let j = 0; j < numShapesY; j++) {

                // Random position
                const x: number = i * (canvas.width / numShapesX)+70;
                const y: number = j * (canvas.height / numShapesY)+70;
    
                // Random size
                const size: number = shapeSize * 0.5;
    
                // Random color
                const color: string = getRandomColor();
    
                // Random shape
                const shape: number = Math.random();
    
                // Draw shapes
                crc2.beginPath();
                if (shape < 0.3) {
                    // Circle
                    crc2.arc(x, y, size, 0, 2 * Math.PI);
                } else if (shape < 0.6) {
                    // Rectangle
                    crc2.rect(x, y, size, size);
                    
                } else {
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
    