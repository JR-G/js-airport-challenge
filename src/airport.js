class Airport {

  constructor() {
    this._hanger = [];
  }
  
  planes() {
    return this._hanger;
  }

  clearForLanding(plane) {
    if(this.isStormy()) {
      throw new Error('cannot land during storm');
    }
    return this._hanger.push(plane);
  }

  clearForTakeOff(plane) {
    if(this.isStormy()) {
      throw new Error('cannot takeoff during storm');
    }
   this._hanger =[];
  }

  isStormy() {
    return false;
  }
};