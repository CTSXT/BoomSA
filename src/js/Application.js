import EventEmitter from "eventemitter3";
import Beat from "./Beat";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this._beat=new Beat();
//     this._create();
    this.count=0;
    
    this._beat.on(Beat.events.BIT,create())
    this.emit(Application.events.READY);
  }
  create(){
    const lyrics = ["Ah", "ha", "ha", "ha", "stayin' alive", "stayin' alive"];
    const message = document.createElement("div");
    message.classList.add("message");
    message.innerText = lyrics[this.count];
    counter();
    document.querySelector(".main").appendChild(message);
  }
  counter(){
  this.count++;
  }
}
