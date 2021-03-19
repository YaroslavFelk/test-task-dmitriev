import React from 'react'

class ValidateComponent extends React.Component {
    constructor(props) {
        super(props);
        this.validate = this.validate.bind(this);
    }

    render() {
        return (<div ref={this.ref}>
            <button onClick={() => this.validate()}>Вызов функции validate</button>
            {this.props.children}
         </div>
        )
    }
}

ValidateComponent.prototype.validate = function () {
    function childrenValidate(children) {
        if (children) {
            if ( Array.isArray(children)) {
                children.map(child => {
                    childValidate(child)
                    return child
                })
            } else {
                childValidate(children)
            }
        }
    }

    function childValidate(child) {
        if (child.type.name === 'ValidateComponent') {
            child.type.prototype.validate()
        } else  {
            childrenValidate(child.props?.children)
        }
    }

    console.log('Вызов функции validate')

    childrenValidate(this.props?.children)
}



export default ValidateComponent;
