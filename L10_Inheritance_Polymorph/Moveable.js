"use strict";
var L09_EntenteichClasses;
(function (L09_EntenteichClasses) {
    class Moveable {
        position;
        velocity;
        constructor(_position) {
            this.position = _position;
            this.velocity = new L09_EntenteichClasses.Vector(0, 0); // Geschwindigkeit mit Standardwert initialisieren
        }
        move(_timeslice) {
            let offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
            this.updatePosition();
        }
        updatePosition() {
            this.position.add(this.velocity);
        }
    }
    L09_EntenteichClasses.Moveable = Moveable;
})(L09_EntenteichClasses || (L09_EntenteichClasses = {}));
//# sourceMappingURL=Moveable.js.map