import { Airplane } from "../Airport/Airplane"
export class Flight{
    private flightName: string
    private flightID: number
    private flightPrice: number
    private departure: string
    private destination: string
    private schedule: string

    constructor (flightName: string, flightID: number, flightPrice: number, departure: string, destination: string, schedule: string){
        this.flightName = flightName
        this.flightID = flightID
        this.flightPrice = flightPrice
        this.departure = departure
        this.destination = destination
        this.schedule = schedule
    }

}