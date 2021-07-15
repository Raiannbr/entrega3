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

                <h3>Hola { this.props.rol } { this.props.name } # { this.props.id } de la camada { this.props.camada }</h3>


            </div>

        )

    }
}


export default ClassComponent