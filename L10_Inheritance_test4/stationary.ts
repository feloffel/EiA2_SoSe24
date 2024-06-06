namespace L09_EntenteichClasses {
    export abstract class Stationary {
        protected position: Vector;

        constructor(position: Vector) {
            this.position = position;
        }

        abstract draw(): void; 
    }
}
