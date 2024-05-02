import { GateStatus } from "../enum/gateStatus";
export class Gate {
    private gateNumber: string;
    private status: GateStatus;

    constructor(gateNumber: string, status: GateStatus) {
        this.gateNumber = gateNumber;
        this.status = status;
    }
}