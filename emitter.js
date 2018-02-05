function Emitter() {
    this.events = {};
}

//The listener here would usually be a function.
//When an event happens, this function will be invoked.
//Many Listeners Listening for the same event.

//When an event happens all the listeners will be invoked.
Emitter.prototype.on = function(type, listener) {
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
}

Emitter.prototype.emit = function(type) {
    if(this.events[type]){
        this.events[type].forEach(function(listener){
            listener();
        });
    }
}

module.exports = Emitter;