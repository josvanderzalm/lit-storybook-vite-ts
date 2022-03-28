import { LitElement } from 'lit';
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export declare class MyGauge extends LitElement {
    static styles: import("lit").CSSResult;
    /**
     * Define reactive properties
     */
    unit: string;
    title: string;
    value: number;
    position: number;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'my-gauge': MyGauge;
    }
}
