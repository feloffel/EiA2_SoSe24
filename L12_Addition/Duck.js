"use strict";
var L09_EntenteichClasses;
(function (L09_EntenteichClasses) {
    class Duck extends L09_EntenteichClasses.Moveable {
        pondArea;
        state;
        mirror;
        underWater;
        quackSound;
        constructor(initialPosition, pondArea, _state, _mirror) {
            super(initialPosition);
            this.velocity = new L09_EntenteichClasses.Vector((Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2);
            this.pondArea = pondArea;
            this.state = _state;
            this.mirror = _mirror;
            this.underWater = -1;
            this.quackSound = new Audio('sounds/quack.mp3'); //Erstellung HTML Audio-Element
            this.addClickListener();
        }
        addClickListener() {
            L09_EntenteichClasses.crc2.canvas.addEventListener("click", this.handleClick.bind(this)); //sorgt dafür, dass der Kontext (this) in der handleClick Methode korrekt bleibt. Sonst wäre Ente nicht der Kontext für Click
        }
        handleClick(event) {
            let rect = L09_EntenteichClasses.crc2.canvas.getBoundingClientRect(); //Methode getBoundingClientRect auf dem Canvas, um die Position und Größe der Ente relativ zum Ansichtsfenster zu erhalten
            let x = event.clientX - rect.left; //Berechnet die x-Koordinate des Klicks relativ zum Canvas, indem die linke Position des Canvas von der x-Koordinate des Klicks abgezogen wird.
            let y = event.clientY - rect.top; //Berechnet die y-Koordinate des Klicks relativ zum Canvas, indem die obere Position des Canvas von der y-Koordinate des Klicks abgezogen wird.
            if (this.isClicked(x, y)) { //Überprüft, ob der Klick innerhalb der Ente war, indem die Methode isClicked aufgerufen wird.
                this.quackSound.play();
            }
        }
        isClicked(x, y) {
            let dx = x - this.position.x; //Berechnet die Differenz in der x-Koordinate zwischen der Klickposition und der Position der Ente.
            let dy = y - this.position.y; //Berechnet die Differenz in der y-Koordinate zwischen der Klickposition und der Position der Ente.
            let distance = Math.sqrt(dx * dx + dy * dy); //Berechnet die Entfernung zwischen der Klickposition und der Position der Ente.
            return distance <= 30; // Überprüft, ob diese Entfernung kleiner oder gleich 30 ist (ungefährer Radius der Ente)
        }
        draw() {
            switch (this.state) {
                case "swim":
                    this.drawSwimming();
                    break;
                case "dive":
                    this.drawTail();
                    break;
                default:
                    this.drawStanding();
            }
        }
        drawSwimming() {
            L09_EntenteichClasses.crc2.fillStyle = "yellow";
            L09_EntenteichClasses.crc2.beginPath();
            L09_EntenteichClasses.crc2.ellipse(this.position.x, this.position.y, 30, 20, 0, 0, Math.PI * 2);
            L09_EntenteichClasses.crc2.closePath();
            L09_EntenteichClasses.crc2.fill();
            L09_EntenteichClasses.crc2.beginPath();
            L09_EntenteichClasses.crc2.arc(this.position.x + 20, this.position.y - 10, 17, 0, Math.PI * 2);
            L09_EntenteichClasses.crc2.closePath();
            L09_EntenteichClasses.crc2.fill();
            L09_EntenteichClasses.crc2.fillStyle = "orange";
            L09_EntenteichClasses.crc2.beginPath();
            L09_EntenteichClasses.crc2.moveTo(this.position.x + 30, this.position.y - 10);
            L09_EntenteichClasses.crc2.lineTo(this.position.x + 40, this.position.y - 15);
            L09_EntenteichClasses.crc2.lineTo(this.position.x + 40, this.position.y - 5);
            L09_EntenteichClasses.crc2.closePath();
            L09_EntenteichClasses.crc2.fill();
            L09_EntenteichClasses.crc2.fillStyle = "black";
            L09_EntenteichClasses.crc2.beginPath();
            L09_EntenteichClasses.crc2.arc(this.position.x + 25, this.position.y - 15, 2, 0, Math.PI * 2);
            L09_EntenteichClasses.crc2.closePath();
            L09_EntenteichClasses.crc2.fill();
        }
        drawTail() {
            L09_EntenteichClasses.crc2.fillStyle = "yellow";
            L09_EntenteichClasses.crc2.beginPath();
            L09_EntenteichClasses.crc2.arc(this.position.x, this.position.y, 20, Math.PI, 2 * Math.PI); // Halber Kreis
            L09_EntenteichClasses.crc2.closePath();
            L09_EntenteichClasses.crc2.fill();
        }
        drawStanding() {
            L09_EntenteichClasses.crc2.fillStyle = "yellow";
            L09_EntenteichClasses.crc2.beginPath();
            L09_EntenteichClasses.crc2.ellipse(this.position.x, this.position.y, 30, 20, 0, 0, Math.PI * 2);
            L09_EntenteichClasses.crc2.closePath();
            L09_EntenteichClasses.crc2.fill();
            L09_EntenteichClasses.crc2.beginPath();
            L09_EntenteichClasses.crc2.arc(this.position.x + 20, this.position.y - 10, 17, 0, Math.PI * 2);
            L09_EntenteichClasses.crc2.closePath();
            L09_EntenteichClasses.crc2.fill();
            L09_EntenteichClasses.crc2.fillStyle = "orange";
            L09_EntenteichClasses.crc2.beginPath();
            L09_EntenteichClasses.crc2.moveTo(this.position.x + 30, this.position.y - 10);
            L09_EntenteichClasses.crc2.lineTo(this.position.x + 40, this.position.y - 15);
            L09_EntenteichClasses.crc2.lineTo(this.position.x + 40, this.position.y - 5);
            L09_EntenteichClasses.crc2.closePath();
            L09_EntenteichClasses.crc2.fill();
            L09_EntenteichClasses.crc2.fillStyle = "black";
            L09_EntenteichClasses.crc2.beginPath();
            L09_EntenteichClasses.crc2.arc(this.position.x + 25, this.position.y - 15, 2, 0, Math.PI * 2);
            L09_EntenteichClasses.crc2.closePath();
            L09_EntenteichClasses.crc2.fill();
            L09_EntenteichClasses.crc2.fillStyle = "orange";
            L09_EntenteichClasses.crc2.fillRect(this.position.x - 10, this.position.y + 10, 5, 20);
            L09_EntenteichClasses.crc2.fillRect(this.position.x + 5, this.position.y + 10, 5, 20);
        }
        move(_timeslice) {
            let offsetX = 2;
            let movementAreaWidth = 600;
            let movementAreaHeight = 180;
            if (this.state === "swim") {
                if (Math.random() <= 0.001) {
                    this.state = "dive";
                }
            }
            else if (this.state === "dive") {
                this.underWater++;
                if (this.underWater >= 50 && Math.random() >= 0.001) {
                    this.state = "swim";
                    this.underWater = -1;
                }
            }
            if (this.position.x <= this.pondArea.x) {
                this.mirror = false;
            }
            else if (this.position.x >= this.pondArea.x + movementAreaWidth - 100) {
                this.mirror = true;
            }
            if (this.mirror === true) {
                this.position.x -= offsetX;
            }
            else {
                this.position.x += offsetX;
            }
            if (this.position.y <= this.pondArea.y) {
                this.position.y = this.pondArea.y;
            }
            else if (this.position.y >= this.pondArea.y + movementAreaHeight) {
                this.position.y = this.pondArea.y + movementAreaHeight;
            }
        }
    }
    L09_EntenteichClasses.Duck = Duck;
})(L09_EntenteichClasses || (L09_EntenteichClasses = {}));
//# sourceMappingURL=Duck.js.map