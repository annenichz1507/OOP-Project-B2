export class FrequentFlyer {
    public status: string;
    public membershipNumber: string;
    public loyaltyLevel: string;
    public lastFlightDate: Date;

    constructor(status: string, membershipNumber: string, loyaltyLevel: string, lastFlightDate: Date) {
        this.status = status;
        this.membershipNumber = membershipNumber;
        this.loyaltyLevel = loyaltyLevel;
        this.lastFlightDate = lastFlightDate;
    }
}
