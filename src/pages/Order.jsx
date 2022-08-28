import React, {useState} from 'react'
import keksMenu from '../assets/images/menuKeks.webp'
import Modal from '../components/Modal/Modal'

function Order() {
  const [opened, setOpened] = useState(false)
  const [contentOrderItem, setContentOrderItem] = useState({})

  const handleClick = e => {
    setOpened(true)
    
    const orderItem = e.target.closest('.order_item')

    setContentOrderItem({
      id: orderItem.id,
      img: orderItem.querySelector('img').src,
      title: orderItem.querySelector('h2').innerText,
      description: orderItem.querySelector('.order_item-left-top p').innerText,
      price: orderItem.querySelector('.price').innerText,
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
      price: '100 грн'
    },
    {
      id: Math.floor(Math.random() * 10000),
      img: keksMenu,
      title: 'ДВОЙНОЙ ШОКОЛАД',
      description: 'Это пункт меню. Опишите то, что вы предлагаете',
      price: '100 грн'
    },
    {
      id: Math.floor(Math.random() * 10000),
      img: keksMenu,
      title: 'КРАСНЫЙ БАРХАТ (БЕЗ ГЛЮТЕНА)',
      description: 'Это пункт меню. Опишите то, что вы предлагаете',
      price: '100 грн',
      noGlut: true
    },
    {
      id: Math.floor(Math.random() * 10000),
      img: keksMenu,
      title: 'ШОКОЛАДНАЯ ВАНИЛЬ (БЕЗ САХАРА)',
      description: 'Это пункт меню. Опишите то, что вы предлагаете',
      price: '100 грн'
    },
    {
      id: Math.floor(Math.random() * 10000),
      img: keksMenu,
      title: 'ДВОЙНОЙ ШОКОЛАД (БЕЗ САХАРА)',
      description: 'Это пункт меню. Опишите то, что вы предлагаете',
      price: '100 грн'
    }
  ]
  
  


  return (
    <div className='container'>
      <div className="order">

      {menuKeks.map(keks => {
        return <div className="order_item" id={keks.id} key={keks.id} onClick={e => handleClick(e)}>
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

      <Modal opened={opened} setOpened={setOpened} inner={contentOrderItem} />
    </div>
  )
}

export default Order