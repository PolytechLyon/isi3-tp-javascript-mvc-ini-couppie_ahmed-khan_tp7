if (!document.getElementById) document.write('<link rel="stylesheet" type="text/css" href="./style.css">');
import { initView, drawGame } from "./gameOfLife/view.js";
import { Model } from "./gameOfLife/model.js";
import { Controller } from "./gameOfLife/controller.js";

initView();

const model = new Model();
model.init();
drawGame(model);
const controller = new Controller(model)


document.getElementById("start").addEventListener("click", () => controller.startModel());
document.getElementById("stop").addEventListener("click", () => controller.stopModel());
document.getElementById("reset").addEventListener("click", () => controller.resetModel());
