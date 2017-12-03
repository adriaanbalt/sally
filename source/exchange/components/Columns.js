import React from 'react';
import classNames from 'classnames'

const Columns = (props) => {
     console.log('props', props)
     return (
          <div className='columns columns-header'>
               <span className='name'>Coin</span>
               <div className="quantities">
               {
                    props.views.options.map( (view,key) => <span key={`view-${key}`} onClick={ props.changeViews } className={`quantity ${view.id}${ props.views.current == view.id ? ' is-active' : '' }`}>{view.label}</span> )
               }
               </div>
          </div>
     )
}

export default Columns