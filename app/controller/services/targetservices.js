import target from "../../models/target.js";


let _target = new target("Harold the Pig")



export default class targetservices {


  pet() {
    _target.petCount++
    //console.log(_target.petcount)
  }

  get target() {
    return _target
  }








  constructor() {
    console.log("services")
  }
}