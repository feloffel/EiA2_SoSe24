"use strict";
var L09_EntenteichClasses;
(function (L09_EntenteichClasses) {
    class Vector {
        x;
        y;
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
        add(vector) {
            this.x += vector.x;
            this.y += vector.y;
        }
        scale(scalar) {
            this.x *= scalar;
            this.y *= scalar;
        }
        copy() {
            return new Vector(this.x, this.y);
        }
    }
    L09_EntenteichClasses.Vector = Vector;
})(L09_EntenteichClasses || (L09_EntenteichClasses = {}));
//# sourceMappingURL=Vector.js.map