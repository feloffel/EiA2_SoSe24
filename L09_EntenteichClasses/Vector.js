"use strict";
// Vector.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector = void 0;
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
exports.Vector = Vector;
//# sourceMappingURL=Vector.js.map