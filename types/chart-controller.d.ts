import { ReactiveController, ReactiveControllerHost } from 'lit';
export declare class ChartChart implements ReactiveController {
    host: ReactiveControllerHost;
    value: Date;
    timeout: number;
    private _timerID?;
    constructor(host: ReactiveControllerHost, timeout?: number);
    hostConnected(): void;
    hostDisconnected(): void;
}
