﻿/// <reference path="../_references.ts" />

module App {
    export class AntennaType {
        static omni: string = "0";
        static dish: string = "1";
    }

    export class Antenna {
        name: string;
        type: AntennaType;
        range: number;
        elcNeeded: number;

        constructor(name: string, type: AntennaType, range: number, elcNeeded: number) {
            this.name = name;
            this.type = type;
            this.range = range;
            this.elcNeeded = elcNeeded;
        }

        clone(): Antenna {
            return new Antenna(this.name, this.type, this.range, this.elcNeeded);
        }
    }

    export interface AntennaJSON {
        name: string;
        type: AntennaType;
        range: number;
        elcNeeded: number;
    }
}
