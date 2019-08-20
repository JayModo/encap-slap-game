import targetservices from "./services/targetservices.js";
import target from "../models/target.js";



let _targetservices = new targetservices

//draw petcount and name on the screen
//access the elements in the html and replace value 
function _draw() {
  let targetNameElement = document.querySelector("#target-name")
  let petCountElement = document.querySelector("#pet-count")
  let target = _targetservices.target

  targetNameElement.textContent = target.name
  petCountElement.textContent = target.petCount.toString()
}


export default class TargetController {
  constructor() {
    console.log("hey from controller")
    _draw()
  }

  pet() {
    _targetservices.pet()
    _draw()
  }
}