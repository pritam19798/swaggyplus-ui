export class Dish {
    dishName: string
    shortDescription: string
    imageUrl: string
    isVeg: boolean
    freeDelivery: boolean
    price: number

    constructor( dishName: string,shortDescription: string, imageUrl: string, 
    price: number){
        this.dishName=dishName
        this.shortDescription=shortDescription
        this.imageUrl=imageUrl
        this.price=price
    }
    setIsveg(isVeg:boolean){
        this.isVeg=isVeg
    }
    setfreeDelivery(freeDelivery:boolean){
        this.freeDelivery=freeDelivery
    }

}
