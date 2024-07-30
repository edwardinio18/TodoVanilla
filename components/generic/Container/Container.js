import {Component} from '../Component/Component.js';
import {render} from '../../../utils/render.js';

class Container extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const container = document.createElement('div');
        container.id = this.props.id;
        container.className = this.props.className || '';

        if (this.props.children && Array.isArray(this.props.children)) {
            this.props.children.forEach(child => {
                if (child instanceof Component) {
                    render(child, container);
                } else {
                    const textNode = document.createTextNode(child);
                    container.appendChild(textNode);
                }
            });
        }

        return container;
    }
}

export {Container};