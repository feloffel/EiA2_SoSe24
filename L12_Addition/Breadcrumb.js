"use strict";
var L09_EntenteichClasses;
(function (L09_EntenteichClasses) {
    class Breadcrumb {
        position;
        constructor(position) {
            this.position = position;
        }
        draw() {
            L09_EntenteichClasses.crc2.fillStyle = "red"; // Erdbeerfarbe
            L09_EntenteichClasses.crc2.beginPath();
            L09_EntenteichClasses.crc2.arc(this.position.x, this.position.y, 10, 0, Math.PI * 2); // Größere Kreis für die Erdbeerform
            L09_EntenteichClasses.crc2.closePath();
            L09_EntenteichClasses.crc2.fill();
            // Zeichne kleine Vertiefung (Stiel der Erdbeere)
            L09_EntenteichClasses.crc2.fillStyle = "green"; // Stielfarbe
            L09_EntenteichClasses.crc2.beginPath();
            L09_EntenteichClasses.crc2.arc(this.position.x, this.position.y - 10, 3, 0, Math.PI * 2); // Kleinerer Kreis für den Stiel
            L09_EntenteichClasses.crc2.closePath();
            L09_EntenteichClasses.crc2.fill();
        }
    }
    L09_EntenteichClasses.Breadcrumb = Breadcrumb;
})(L09_EntenteichClasses || (L09_EntenteichClasses = {}));
//# sourceMappingURL=Breadcrumb.js.map