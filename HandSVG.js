class HandSVG {
  static get NS() {
    return 'http://www.w3.org/2000/svg';
  }
  _center(bbox) {
    return {
      x: bbox[0] + bbox[2] * 0.5,
      y: bbox[1] + bbox[3] * 0.5,
    }
  }
  render(prediction) {
    const pos = this._center(prediction.bbox);
    this._hand.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
  }
  constructor({id, w, h}) {
    this._svg = document.querySelector(`#${id}`);
    this._svg.setAttribute("viewBox", `0 0 ${w} ${h}`);
    this._svg.setAttribute("width", `${w}px`);
    this._svg.setAttribute("height", `${h}px`);
    const r = Math.min(w, h) * 0.1;
    this._hand = document.createElementNS(HandSVG.NS, 'circle');
    this._hand.setAttribute('r', r);
    this._hand.setAttribute('cx', 0);
    this._hand.setAttribute('cy', 0);
    this._hand.setAttribute('fill', `hsl(30, 50%, 50%)`);
    this._hand.style.transformOrigin = '50% 50%';
    this._svg.appendChild(this._hand);
  }
}