import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('my-gauge')
export class MyGauge extends LitElement {
  static styles = css`
    :host {
      font-family: Arial, Helvetica, sans-serif;
      display: block;
      max-width: 200px;
      border: solid 1px #ddd;
      padding: 1em;
      border-radius: 0.5em;
      margin: 1em 0;
      text-align: center;
    }
  `

  /**
   * Define reactive properties
   */
  @property() unit = '%';
  @property() title = '';
  @property({ type: Number }) value = 0;
  @property({ type: Number }) position = 0;

  render() {

    const color = "rgb(0, 96, 206)";
    const gap = 60;
    const start = 90 + gap / 2;
    const end = 90 - gap / 2;
    const marker = start + (360 - gap) * 0.01 * this.position;
    const largeArc = marker - start > 180 ? 1 : 0;
  
    function point_on_circle(degrees:number, r:number, cx:number, cy:number) {
      const radians = degrees * (Math.PI / 180);
      return {
        x: cx + r * Math.cos(radians),
        y: cy + r * Math.sin(radians),
      };
    }
  
    let a = point_on_circle(start, 80, 100, 100); // 100
    let b = point_on_circle(marker, 80, 100, 100);
    let c = point_on_circle(end, 80, 100, 100); // 80

    return html`
      <div class="wrap">
        <svg width="200" height="180" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M ${a.x} ${a.y} A 80 80, 0, 1, 1, ${c.x} ${c.y}"
            fill="transparent"
            stroke="#000"
            stroke-width="2"
            stroke-linecap="round"
          />

          <text
            x="50%"
            y="60%"
            fill="#000"
            class="value-text"
            font-size="200%"
            font-family="sans-serif"
            font-weight="normal"
            text-anchor="middle"
          >
            ${this.value}${this.unit}
          </text>

          <path
            d="M ${a.x} ${a.y} A 80 80, 0, ${largeArc}, 1, ${b.x} ${b.y}"
            fill="transparent"
            stroke=${color}
            stroke-width="10"
            stroke-linecap="round"
          />
        </svg>

        <h2>${this.title}</h2>

        <slot></slot>
      </div>
    `
  };
}

declare global {
  interface HTMLElementTagNameMap {
    'my-gauge': MyGauge
  }
}
