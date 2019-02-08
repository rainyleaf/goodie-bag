import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import Candy from './Candy'
import {getCandiesThunk} from '../reducers/candyReducer'

class CandyList extends Component {
    constructor(props){
        super(props)
    }
    async componentDidMount(){
        await this.props.getCandiesThunkDispatch()
    }
    render() {
      return (
        <ul>
            {this.props.candies.map(candy => (
                <Candy key={candy.id} candy={candy} />
            ))}
        </ul>
      )
            }
}

const mapStateToProps = (state) => {
    //console.log("STATE WITHIN CANDYLIST MAPSTATETOPROPS: ", state)
    return {
      candies: state.candy.candies
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getCandiesThunkDispatch: () => dispatch(getCandiesThunk())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CandyList)
