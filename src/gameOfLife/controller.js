export class Controller {
  constructor(m) {
    this.model = m;
    this.startModel();
  }
  
  startModel = () => {
    this.model.run();
  };
  
  stopModel = () => {
    this.model.stop();
  };
  
  resetModel = () => {
    this.model.reset();
  };
};
