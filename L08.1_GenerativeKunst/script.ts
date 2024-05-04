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

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    
        // Clear canvas
        crc2.clearRect(0, 0, canvas.width, canvas.height);
    
        // Generate random colors
        function getRandomColor(): string {
            const letters: string = "0123456789ABCDEF";
            let color: string = "#";
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
    
        // Generate random shapes
        for (let i = 0; i < 50; i++) {
            // Random position
            const x: number = Math.random() * canvas.width;
            const y: number = Math.random() * canvas.height;
            
            // Random size
            const size: number = Math.random() * 50;
    
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
    };
    

