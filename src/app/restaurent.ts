import { Dish } from './dish'

export class Restaurent {
    restaurentName:string
    isActive: boolean
    restaurentAdress: string
    restaurentRating: number
    dishes: Dish[]

    constructor(restaurentName:string, restaurentAdress: string,restaurentRating: number){
        this.restaurentName=restaurentName
        this.restaurentAdress=restaurentAdress
        this.restaurentRating=restaurentRating

    }

    addDish(dish:Dish){
        console.log(dish)
        this.dishes=[dish]
    }
    setisActive(isActive: boolean){
        this.isActive=isActive
    }

}
