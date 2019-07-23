class EventEmitter {
    constructor() {
        this._events = {

        }
    }
    emit(type) {
        var funL = this._events[type];
        var args = Array.from(arguments).slice(1);
        funL.forEach(function(e) {
            e(...args);
        })
    }
    addListener(type, func) {
        this._events = this._events || {};
        if (!this._events[type]) {
            this._events[type] = [];
        }
        this._events[type].push(func);
    }
    removeListener(type,func){
        this._events[type].splice(this._events[type].indexOf(func),1);
    }
    on(type, func){
        this.addListener(type, func)
    }
}

module.exports={
    emitter:EventEmitter
}