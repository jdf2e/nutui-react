// @ts-nocheck
type EventName = string | symbol;
type EventCallbacks = Record<EventName, Record<'next' | 'tail', unknown>>;
export declare class Events {
    protected callbacks?: EventCallbacks;
    static eventSplitter: string;
    constructor(opts?: any);
    on(eventName: EventName, callback: (...args: any[]) => void, context?: any): this;
    once(events: EventName, callback: (...r: any[]) => void, context?: any): this;
    off(events?: EventName, callback?: (...args: any[]) => void, context?: any): this;
    trigger(events: EventName, ...args: any[]): this;
}
export {};
