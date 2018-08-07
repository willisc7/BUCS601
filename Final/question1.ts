export class Coffee {
    optimal_temp: number;
    flavor: string;
    avg_steep_time_sec: number;
    error_messages: string[] = [
        "error one",
        "error two",
        "error three"
    ]

    constructor(optimal_temp: number, flavor: string, avg_steep_time_sec: number) {
        this.optimal_temp = optimal_temp
        this.flavor = flavor
        this.avg_steep_time_sec = avg_steep_time_sec
    }

    isScalding(): boolean {
        if (this.optimal_temp > 90) {
            return true
        }
        else {
            return false
        }
    }

    throwError(error: number): string {

        // check for bad error number
        if (error < 0) {
            return "0"
        }
        if (error > this.error_messages.length) {
            return this.error_messages[this.error_messages.length]
        }

        return this.error_messages[error]
    }
}