"use strict";
var L09_EntenteichClasses;
(function (L09_EntenteichClasses) {
    class Cloud extends L09_EntenteichClasses.Moveable {
        size;
        isRaining = false;
        raindrops = [];
        constructor(position, velocity, size) {
            super(position);
            this.velocity = velocity;
            this.size = size;
            this.addEventListeners();
        }
        addEventListeners() {
            L09_EntenteichClasses.crc2.canvas.addEventListener("click", this.handleClick.bind(this));
        }
        handleClick(event) {
            const rect = L09_EntenteichClasses.crc2.canvas.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            if (this.isInside(x, y)) {
                this.startRain();
            }
        }
        isInside(x, y) {
            const distance = Math.sqrt((x - this.position.x) ** 2 + (y - this.position.y) ** 2);
            return distance < this.size;
        }
        startRain() {
            this.isRaining = true;
            for (let i = 0; i < 3; i++) { //Anzahl der Regentropfen
                const raindropX = this.position.x - this.size / 2 + Math.random() * this.size;
                this.raindrops.push(new Raindrop(new L09_EntenteichClasses.Vector(raindropX, this.position.y)));
            }
        }
        move(timeslice) {
            const offsetX = this.velocity.x * timeslice;
            const offsetY = this.velocity.y * timeslice;
            this.position.add(new L09_EntenteichClasses.Vector(offsetX, offsetY));
            if (this.position.x > L09_EntenteichClasses.crc2.canvas.width + this.size) {
                this.position.x = -this.size;
            }
            if (this.isRaining) {
                for (let i = this.raindrops.length - 1; i >= 0; i--) {
                    const raindrop = this.raindrops[i];
                    raindrop.move(timeslice);
                    if (raindrop.position.y > L09_EntenteichClasses.crc2.canvas.height) {
                        this.raindrops.splice(i, 1);
                    }
                }
            }
        }
        draw() {
            L09_EntenteichClasses.crc2.beginPath();
            L09_EntenteichClasses.crc2.fillStyle = 'white';
            this.drawEllipse(this.position.x - this.size * 0.6, this.position.y, this.size * 0.8, this.size * 0.6);
            this.drawEllipse(this.position.x, this.position.y, this.size, this.size * 0.7);
            this.drawEllipse(this.position.x + this.size * 0.6, this.position.y, this.size * 0.8, this.size * 0.6);
            L09_EntenteichClasses.crc2.closePath();
            L09_EntenteichClasses.crc2.fill();
            if (this.isRaining) {
                for (let raindrop of this.raindrops) {
                    raindrop.draw();
                }
            }
        }
        drawEllipse(x, y, width, height) {
            L09_EntenteichClasses.crc2.save();
            L09_EntenteichClasses.crc2.beginPath();
            L09_EntenteichClasses.crc2.translate(x + width / 2, y + height / 2);
            L09_EntenteichClasses.crc2.scale(1, height / width);
            L09_EntenteichClasses.crc2.arc(0, 0, width / 2, 0, Math.PI * 2);
            L09_EntenteichClasses.crc2.restore();
            L09_EntenteichClasses.crc2.fill();
        }
    }
    L09_EntenteichClasses.Cloud = Cloud;
    class Raindrop {
        position;
        velocity;
        constructor(position) {
            this.position = position;
            this.velocity = new L09_EntenteichClasses.Vector(0, 200); // Geschwindigkeit der Regentropfen
        }
        move(timeslice) {
            const offsetY = this.velocity.y * timeslice;
            this.position.add(new L09_EntenteichClasses.Vector(0, offsetY));
        }
        draw() {
            L09_EntenteichClasses.crc2.beginPath();
            L09_EntenteichClasses.crc2.strokeStyle = 'blue';
            L09_EntenteichClasses.crc2.moveTo(this.position.x, this.position.y);
            L09_EntenteichClasses.crc2.lineTo(this.position.x, this.position.y + 10); // Länge des Regentropfens
            L09_EntenteichClasses.crc2.stroke();
        }
    }
    L09_EntenteichClasses.Raindrop = Raindrop;
})(L09_EntenteichClasses || (L09_EntenteichClasses = {}));
//# sourceMappingURL=Cloud.js.map