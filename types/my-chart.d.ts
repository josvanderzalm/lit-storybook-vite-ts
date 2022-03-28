import { LitElement } from 'lit';
export declare class MyChart extends LitElement {
    src: string;
    private chartConfig;
    private chartStatus;
    chartElement: any;
    static styles: import("lit").CSSResult;
    render(): void;
    firstUpdated(): Promise<void>;
    fetchJson(): Promise<void>;
}
declare global {
    interface HTMLElementTagNameMap {
        'my-chart': MyChart;
    }
}
