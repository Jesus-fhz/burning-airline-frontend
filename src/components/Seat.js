import React from 'react'

class Seat extends React.Component{

    state = {
        selected:[]
    }

    selectSeat = () => {
        this.setState({selected: [this.props.row, this.props.columnKey]})
        this.props.onClick(this.props.row, this.props.columnKey);
    }

    render(){

        return(
            <div className={this.props.seat? "selected columns" : "columns"} onClick={this.selectSeat}>
                {this.props.column.toUpperCase()}{this.props.row}  
            </div>
        ) 
    }

}

export default Seat