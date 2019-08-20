import TargetController from "../app/controller/targetcontroller.js";

//app defined and main entry point
class app {
  constructor() {
    console.log("app start")
    this.targetcontroller = {
      targetcontroller: new TargetController()
    }
  }
}





window['app'] = new app()