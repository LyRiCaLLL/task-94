import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.emojis = [];
    this.banana = "🍌";
    this.emit(Application.events.READY);
  }
  setEmojis(emojis) {
    this.emojis = emojis;
  }

  addBananas() {
    const element = document.createElement("p");
  document.getElementsById("emojis").appendChild(element);
  let newArr = this.emojis.map((monkey) => monkey + this.banana);
  element.innerHTML=newArr;
  }
}
