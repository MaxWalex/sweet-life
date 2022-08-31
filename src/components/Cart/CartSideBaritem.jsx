import React from 'react'

function CartSideBaritem({item}) {
  return (
    <div className="side_bar-item">
                    <div className="side_bar-item_left">
                        <button>-</button>
                        <input type="text" value={item.count} onChange={() => console.log()} />
                        <button>+</button>
                    </div>
                    <img src={item.img} alt=""  />
                    <div className="side_bar-item_mid">
                        <h3>{item.title}</h3>
                        <button className='side_bar-item_delete'>Видалити</button>
                    </div>
                    <div className="side_bar-item_right">
                        {item.newPrice}
                    </div>
                </div>
  )
}

export default CartSideBaritem