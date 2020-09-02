class Airport {

  constructor() {
    this._hanger = [];
  }
  
  planes() {
    return this._hanger;
  }

  clearForLanding(plane) {
    return this._hanger.push(plane);
  }
};