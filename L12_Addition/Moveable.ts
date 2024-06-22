namespace L09_EntenteichClasses {
    export class Moveable {
        protected position: Vector;
        protected velocity: Vector;

        constructor(_position: Vector) {
            this.position = _position;
            this.velocity = new Vector(0, 0); //Geschwindigkeit mit Standardwert initialisieren
        }

        move(_timeslice: number): void {
            let offset: Vector = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
            this.updatePosition();
        }

        public updatePosition(): void {
            this.position.add(this.velocity);
        }

        draw(): void {
            //Methode wird von den abgeleiteten Klassen überschrieben
        }
    }
}

