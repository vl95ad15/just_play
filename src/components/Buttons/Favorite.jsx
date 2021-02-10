import React, { useContext } from 'react'
import { Context } from '../../context/context'

function Favorite() {
  const { addFavorite } = useContext(Context)

  return (
    <i
      className="fa fa-heart"
      onClick={addFavorite}
    />
  )
  // ) : (
  //   <i
  //     className="fa fa-heart-o"
  //     onClick={removeFavorite}
  //   />
  // )
}

export default Favorite
