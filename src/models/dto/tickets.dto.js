import  crypto from 'crypto'

export class SaveTicketDTO {
    constructor(payload) {
        this.purchase_datetime = new Date().toLocaleString()
        this.amount = payload.amount
        this.purchaser = payload.purchaser
        this.code = crypto.createHash('md5').update(payload.toString() + this.purchase_datetime)
    }
}

