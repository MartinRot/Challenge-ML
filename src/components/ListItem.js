import React from 'react'
import { Link } from 'react-router-dom'

const ListItem = ( item ) => {
  
    return (
        <Link to={`/items/${item.id}`}>
            <article className="flex border-0 border-b-2 border-solid border-gray-300 py-5 justify-between items-center">
            <div className="flex">
                <img
                className="h-auto rounded w-[150px] mr-5"
                src={item.thumbnail}
                alt="thumbnail"
                />
                <div className="flex flex-col">
                <header className="">$ {item.price}</header>
                <main className="mt-5">{item.title}</main>
                </div>
            </div>
            <div className="">
                {item.address.state_name}
            </div>
            </article>
        </Link>
    );
}

export default ListItem