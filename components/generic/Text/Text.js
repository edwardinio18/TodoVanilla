import {Component} from '../Component/Component.js';

class Text extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const text = document.createElement(this.props.type || 'p');

        text.id = this.props.id;
        text.textContent = this.props.content;

        if (this.props.type === 'label' && this.props.for_input) {
            text.htmlFor = this.props.for_input;
        }

        text.className = this.props.className || '';

        return text;
    }
}

export {Text};