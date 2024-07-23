// @ts-nocheck
import { Events } from './event-emitter';
interface RouteEvt extends Events {
    addEvents: (events: any) => void;
    emit?: (events: any, data: any) => void;
}
interface PageEvt extends Events {
    exeList: any[];
    emit?: (events: any, data: any) => void;
}
export declare const EventChannel: {
    pageChannel: PageEvt;
    routeChannel: RouteEvt;
};
export {};
