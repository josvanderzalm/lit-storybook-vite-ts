import { html, css, LitElement } from 'lit'
import { customElement, property, state, query } from 'lit/decorators.js'
import Highcharts from 'highcharts';

@customElement('my-chart')
export class MyChart extends LitElement {
  @property()
  src = '';

  @state()
  private chartConfig: any;
  private chartStatus: 'initial' | 'pending' | 'complete' | 'error' = 'initial';

  @query('#chart')
  chartElement: any;

  static styles = css`
    :host {
      display: block;
      max-width: 200px;
      border: solid 1px #ddd;
      padding: 1em;
      border-radius: 0.5em;
      margin: 1em 0;
      text-align: center;
    }
  `
  render() {
    let result;
    if (this.chartStatus === 'complete') {
      result = html`<div id="chart"></div>`;
    } else if (this.chartStatus === ('initial' || 'pending')) {
      result = html`<p>De grafiek wordt geladen...</p>`;
    } else {
      result = html`<p>Er is iets fout gegaan bij het laden van de grafiek</p>`
    }
    return result;
  }

  async firstUpdated() {
    this.chartStatus = 'pending';
    await this.fetchJson();
  }

  async fetchJson() {
    const response = await fetch(this.src);
    if (response.ok) {
      try {
        this.chartConfig = await response.json();
        this.chartStatus = 'complete';
      } catch(error) {
        this.chartStatus = 'error';
      }
    } else {
      this.chartStatus = 'error';
    }

    this.requestUpdate();
    await this.updateComplete;
    Highcharts.chart(this.chartElement, this.chartConfig);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-chart': MyChart
  }
}
