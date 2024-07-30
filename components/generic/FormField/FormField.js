import {Component} from '../Component/Component.js';

class FormField extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const input = document.createElement('input');

        input.type = this.props.type || 'text';
        input.name = this.props.name || '';
        input.placeholder = this.props.placeholder || '';
        input.value = this.props.value || '';
        input.id = this.props.id;
        input.className = this.props.className || '';

        if (this.props.onclick) {
            input.addEventListener('click', this.props.onclick);
        }

        return input;
    }
}

export {FormField};