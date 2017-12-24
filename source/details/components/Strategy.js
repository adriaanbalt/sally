import React from 'react'
import classNames from 'classnames'
import Graph from '../../components/Graph'

const Strategy = (props) => (
  <section className='strategy'>
    <h2>Strategy</h2>
    <p>Your Risk Tolerance</p>
    <ul>
    	<button>1%</button>
    	<button>2%</button>
    	<button>3%</button>
    </ul>
    <Graph coin={ props.coin }/>
  </section>
)

export default Strategy