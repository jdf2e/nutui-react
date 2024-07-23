class Events {
    constructor(opts) {
        var _a;
        this.callbacks = (_a = opts === null || opts === void 0 ? void 0 : opts.callbacks) !== null && _a !== void 0 ? _a : {};
    }
    on(eventName, callback, context) {
        let event, tail, _eventName;
        if (!callback) {
            return this;
        }
        if (typeof eventName === 'symbol') {
            _eventName = [eventName];
        }
        else {
            _eventName = eventName.split(Events.eventSplitter);
        }
        this.callbacks || (this.callbacks = {});
        const calls = this.callbacks;
        while ((event = _eventName.shift())) {
            const list = calls[event];
            const node = list ? list.tail : {};
            node.next = tail = {};
            node.context = context;
            node.callback = callback;
            calls[event] = {
                tail,
                next: list ? list.next : node
            };
        }
        return this;
    }
    once(events, callback, context) {
        const wrapper = (...args) => {
            callback.apply(this, args);
            this.off(events, wrapper, context);
        };
        this.on(events, wrapper, context);
        return this;
    }
    off(events, callback, context) {
        let event, calls, _events;
        if (!(calls = this.callbacks)) {
            return this;
        }
        if (!(events || callback || context)) {
            delete this.callbacks;
            return this;
        }
        if (typeof events === 'symbol') {
            _events = [events];
        }
        else {
            _events = events ? events.split(Events.eventSplitter) : Object.keys(calls);
        }
        while ((event = _events.shift())) {
            let node = calls[event];
            delete calls[event];
            if (!node || !(callback || context)) {
                continue;
            }
            const tail = node.tail;
            while ((node = node.next) !== tail) {
                const cb = node.callback;
                const ctx = node.context;
                if ((callback && cb !== callback) || (context && ctx !== context)) {
                    this.on(event, cb, ctx);
                }
            }
        }
        return this;
    }
    trigger(events, ...args) {
        let event, node, calls, _events;
        if (!(calls = this.callbacks)) {
            return this;
        }
        if (typeof events === 'symbol') {
            _events = [events];
        }
        else {
            _events = events.split(Events.eventSplitter);
        }
        while ((event = _events.shift())) {
            if ((node = calls[event])) {
                const tail = node.tail;
                while ((node = node.next) !== tail) {
                    node.callback.apply(node.context || this, args);
                }
            }
        }
        return this;
    }
}
Events.eventSplitter = ','; // Note: Harmony ACE API 8 开发板不支持使用正则 split 字符串 /\s+/

export { Events };
//# sourceMappingURL=event-emitter.js.map
