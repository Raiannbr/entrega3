import React from 'react'

class ClassComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {name: props.name}
        console.log(this.state.name)
    }

    render(){
        console.log(this)

        console.log(this.props)

        return(

            <div>
               
                {/* Ahora puedo renderizar el nombre con las props que me llegan */}

                <h3> { this.props.title } { this.props.description } # { this.props.id } { this.props.bottom }</h3>


            </div>

        )

    }
}


export default ClassComponent