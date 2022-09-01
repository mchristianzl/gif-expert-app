import React from 'react'

export const Loader = ( {isLoading} ) => {
  return (
    <div className='loader'>
        { isLoading && (<h2>Loading</h2>) }
    </div>
  )
}

