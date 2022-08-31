import React from 'react'

function Cart({buttunWatchCart, sideBar, addedCart}) {
    const handleClick = () => {

        sideBar(true)
    }

  return (
    <>
    <div className='cart'>
        Кошик: <div className="cart_number">{addedCart.length}</div>
    </div>
    {buttunWatchCart && <div className="cart_watch" onClick={handleClick}>Оглянути кошик</div>}
    </>
  )
}

export default Cart