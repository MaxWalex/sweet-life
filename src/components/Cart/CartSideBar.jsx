import React from 'react'
import CartSideBaritem from './CartSideBaritem'

function CartSideBar({sideBar, addedCart}) {
    const handleClose = () => {
        sideBar(false)
    }

    const handleCloseOutside = () => {
        sideBar(false)
    }

  return (
    <div className='side_bar' onClick={handleCloseOutside}>
        <div className="side_bar-inner" onClick={e => e.stopPropagation()}>
            <div className="side_bar-top">
                <p>Мої замовлення <span>({addedCart.length})</span></p>
                <svg onClick={handleClose} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fillRule="evenodd" d="M18.77 4L20 5.23 13.23 12 20 18.77 18.77 20 12 13.23 5.23 20 4 18.77 10.769 12 4 5.23 5.23 4 12 10.769 18.77 4z"></path></svg>
            </div>

            <div className="side_bar-content">

                {addedCart.map(item => {
                    return <CartSideBaritem item={item} key={item.id} />
                })}

            </div>

            <div className="side_bar-addition">
                <p>Додати доповнення до замовлення</p>
                <textarea placeholder='Додати доповнення до замовлення'></textarea>
            </div>

            <div className="side_bar-tootal_sum">
                <span>Замовлення на суму</span>
                <span>100 грн</span>
            </div>
        </div>
    </div>
  )
}

export default CartSideBar