import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

/**
 * An example element.
 *
 * @slot - This element has a slot
 */
@customElement('my-info-card')
export class MyInfoCard extends LitElement {

  /**
   * Define reactive properties
   */
   @property() icon = '';
   @property() title = '';
   @property() description = '';


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
      position: relative;
    }
    :host:before {
      content:'';
      position: absolute;
      position: absolute;
      left: 0;
      right: 0;
      margin: auto;
      display: block;
      background-color: rgba(0,0,0,0.2);
      height: 4em;
      width: 4em;
      -webkit-mask-size: contain;
      mask-size: contain;
      -webkit-mask-position: center;
      mask-position: center;
      -webkit-mask-repeat: no-repeat;
      mask-repeat: no-repeat;
    }
    h1,h2 {
      margin: 1em 0 0 0;
    }
    p {
      margin:0;
    }
  `



  render() {
    console.log(document);
    const iconUrl = `http://localhost:3000/assets/icons/solid/${this.icon}.svg`
    return html`
      <style>:host:before {
      mask-image: url(${iconUrl});
      -webkit-mask-image: url(${iconUrl});
      }
      </style>
      <div class="wrap">
        <h2>${this.title}</h2>
        <p>${this.description}</p>
      </div>
    `
  };
}

declare global {
  interface HTMLElementTagNameMap {
    'my-info-card': MyInfoCard
  }
}
