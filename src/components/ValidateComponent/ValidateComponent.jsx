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

ValidateComponent.prototype.validate = function() {
    function childrenValidate(children) {
        React.Children.map(children, (child, i)=>{
            if (child.type === ValidateComponent) {
                child.type.prototype.validate()
            } else  {
                childrenValidate(child.props.children)
            }
        })
    }

    console.log('Вызов функции validate')

    childrenValidate(this.props?.children)
}


export default ValidateComponent;
