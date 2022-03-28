import { LitElement } from 'lit';
/**
 * An example element.
 *
 * @slot - This element has a slot
 */
export declare class MyInfoCard extends LitElement {
    /**
     * Define reactive properties
     */
    icon: string;
    title: string;
    description: string;
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'my-info-card': MyInfoCard;
    }
}
