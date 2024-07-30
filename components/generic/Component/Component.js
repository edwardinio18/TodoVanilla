class Component {
    constructor(props = {}) {
        this.props = props;
        this.state = {};
        this.element = null;
    }

    setState(newState) {
        this.state = {
            ...this.state, ...newState
        };

        this._render();
    }

    _render() {
        const newElement = this.render();
        if (this.element && this.element.parentNode) {
            this.element.parentNode.replaceChild(newElement, this.element);
        }
        this.element = newElement;
    }

    render() {
        throw new Error('Component subclasses must implement render()');
    }
}

export {Component};