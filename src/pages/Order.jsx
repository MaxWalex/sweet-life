import React, {useState} from 'react'
import keksMenu from '../assets/images/menuKeks.webp'
import Modal from '../components/Modal/Modal'
import Cart from '../components/Cart/Cart'
import CartSideBar from '../components/Cart/CartSideBar'

function Order() {
  const [opened, setOpened] = useState(false)
  const [contentOrderItem, setContentOrderItem] = useState({})
  const [buttunWatchCart, setButtunWatchCart] = useState(false)
  const [cartSideBar, setCartSideBar] = useState(false)
  const [addedCart, setAddedCart] = useState([])

  const handleClick = keks => {
    setOpened(true)

    setContentOrderItem({
      id: keks.id,
      img: keks.img,
      title: keks.title,
      description: keks.description,
      price: keks.price,
    })

    return contentOrderItem
  }

  const menuKeks = [
    {
      id: Math.floor(Math.random() * 10000),
      img: keksMenu,
      title: 'КЛАССИЧЕСКИЙ КРАСНЫЙ БАРХАТ',
      description: 'Это пункт меню. Опишите то, что вы предлагаете',
      price: '100 грн'
    },
    {
      id: Math.floor(Math.random() * 10000),
      img: keksMenu,
      title: 'ШОКОЛАДНАЯ ВАНИЛЬ',
      description: 'Это пункт меню. Опишите то, что вы предлагаете',
      price: '120 грн'
    },
    {
      id: Math.floor(Math.random() * 10000),
      img: keksMenu,
      title: 'ДВОЙНОЙ ШОКОЛАД',
      description: 'Это пункт меню. Опишите то, что вы предлагаете',
      price: '90 грн'
    },
    {
      id: Math.floor(Math.random() * 10000),
      img: keksMenu,
      title: 'КРАСНЫЙ БАРХАТ (БЕЗ ГЛЮТЕНА)',
      description: 'Это пункт меню. Опишите то, что вы предлагаете',
      price: '67 грн',
      noGlut: true
    },
    {
      id: Math.floor(Math.random() * 10000),
      img: keksMenu,
      title: 'ШОКОЛАДНАЯ ВАНИЛЬ (БЕЗ САХАРА)',
      description: 'Это пункт меню. Опишите то, что вы предлагаете',
      price: '190 грн'
    },
    {
      id: Math.floor(Math.random() * 10000),
      img: keksMenu,
      title: 'ДВОЙНОЙ ШОКОЛАД (БЕЗ САХАРА)',
      description: 'Это пункт меню. Опишите то, что вы предлагаете',
      price: '164 грн'
    }
  ]
  
  return (
    <div className='container'>

      <Cart sideBar={setCartSideBar} buttunWatchCart={buttunWatchCart} addedCart={addedCart} />

      <div className="order">

      {menuKeks.map(keks => {
        return <div className="order_item" id={keks.id} key={keks.id} onClick={() => handleClick(keks)}>
        <div className="order_item-left">
          <div className="order_item-left-top">
            <h2>{keks.title}</h2>
            <p>{keks.description}</p>
          </div>
          <p className='price'>{keks.price}</p>
        </div>
        <div className="order_item-right">
          <img src={keks.img} alt="" />
        </div>
      </div>
      })}
      </div>

      {opened && <Modal 
        opened={opened} 
        setOpened={setOpened} 
        inner={contentOrderItem} 
        buttunWatchCart={setButtunWatchCart}
        setAddedCart={setAddedCart}
        addedCart={addedCart}
      />}

      {cartSideBar && <CartSideBar sideBar={setCartSideBar} addedCart={addedCart} />}
    </div>
  )
}

export default Order