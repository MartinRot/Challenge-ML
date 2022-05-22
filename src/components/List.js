import React from 'react'
import ListItem from './ListItem'

const List = ( {data} ) => {
  return (

    <section className='bg-white p-5'>
        <div className='bg-white p-5'>
            {data.map(item => <ListItem { ...item } key={item.id} />)}
        </div>
    </section>
  )
}

export default List