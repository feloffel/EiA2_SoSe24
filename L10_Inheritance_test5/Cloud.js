"use strict";
var L09_EntenteichClasses;
(function (L09_EntenteichClasses) {
    class Cloud extends L09_EntenteichClasses.Moveable {
        size;
        constructor(position, velocity, size) {
            super(position); // Aufruf des Constructors der Superklasse mit einer Position
            this.velocity = velocity; // Geschwindigkeit setzen
            this.size = size; // Größe setzen
        }
        clouds = [];
        clouds;
        push(, Cloud) { }
    }
    L09_EntenteichClasses.Cloud = Cloud;
    (new L09_EntenteichClasses.Vector(100, 150), new L09_EntenteichClasses.Vector(100, 0), 100);
    ;
    clouds.push(new Cloud(new L09_EntenteichClasses.Vector(300, 100), new L09_EntenteichClasses.Vector(30, 0), 100));
    clouds.push(new Cloud(new L09_EntenteichClasses.Vector(500, 130), new L09_EntenteichClasses.Vector(60, 0), 100));
    draw();
    void {
        crc2: L09_EntenteichClasses.crc2, : .beginPath(),
        crc2: L09_EntenteichClasses.crc2, : .fillStyle = 'white',
        // Zeichne drei überlappende Ellipsen für die Wolke
        this: .drawEllipse(this.position.x - this.size * 0.6, this.position.y, this.size * 0.8, this.size * 0.6),
        this: .drawEllipse(this.position.x, this.position.y, this.size, this.size * 0.7),
        this: .drawEllipse(this.position.x + this.size * 0.6, this.position.y, this.size * 0.8, this.size * 0.6),
        crc2: L09_EntenteichClasses.crc2, : .closePath(),
        crc2: L09_EntenteichClasses.crc2, : .fill()
    };
    drawEllipse(x, number, y, number, width, number, height, number);
    {
        L09_EntenteichClasses.crc2.save();
        L09_EntenteichClasses.crc2.beginPath();
        L09_EntenteichClasses.crc2.translate(x + width / 2, y + height / 2);
        L09_EntenteichClasses.crc2.scale(1, height / width);
        L09_EntenteichClasses.crc2.arc(0, 0, width / 2, 0, Math.PI * 2);
        L09_EntenteichClasses.crc2.restore();
        L09_EntenteichClasses.crc2.fill(); // Füllen der Ellipse
    }
})(L09_EntenteichClasses || (L09_EntenteichClasses = {}));
//# sourceMappingURL=Cloud.js.map