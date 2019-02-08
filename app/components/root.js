import React from 'react'
import CandyList from './CandyList'
import {Route} from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import {withRouter} from 'react-router'


const Root = () => {
  return (
    <div>
      <nav>
        Goodie Bag
        <NavLink to='/' >
            <span>See NOTHING!</span>
        </NavLink>
        <NavLink to='/candy' >
            <span>See candy!</span>
        </NavLink>
      </nav>
      <main>
        <h1>Welcome to the Goodie Bag!</h1>
        
        <Route path="/candy" component={CandyList} />
        
      </main>
    </div>
  )
}

export default Root
