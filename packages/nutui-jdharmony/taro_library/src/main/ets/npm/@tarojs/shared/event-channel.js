import { Events } from './event-emitter.js';

class PageEvts extends Events {
    constructor() {
        super(...arguments);
        this.exeList = [];
    }
    on(eventName, callback) {
        super.on(eventName, callback, this);
        this.exeList = this.exeList.reduce((prev, item) => {
            if (item.eventName === eventName) {
                super.trigger(item.eventName, item.data);
            }
            else {
                prev.push(item);
            }
            return prev;
        }, []);
        return this;
    }
    emit(events, data) {
        // eslint-disable-next-line
        routeChannel.trigger(events, data);
    }
}
const pageChannel = new PageEvts();
class RouteEvts extends Events {
    emit(events, data) {
        pageChannel.off(events);
        pageChannel.exeList.push({
            eventName: events,
            data
        });
    }
    addEvents(events) {
        if (!events || typeof events !== 'object')
            return;
        Object.keys(events).forEach(key => {
            this.off(key);
            this.on(key, events[key], this);
        });
    }
}
const routeChannel = new RouteEvts();
const EventChannel = { pageChannel, routeChannel };

export { EventChannel };
//# sourceMappingURL=event-channel.js.map
