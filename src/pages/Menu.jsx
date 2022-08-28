import React from 'react'
import keksMenu from '../assets/images/menuKeks.webp'
import noGlut from '../assets/images/noglut.svg'

function Menu() {
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
      <div className="menu_content">
      <h1>Смаки</h1>
      <p>Cмачні кекси</p>

      <div className="menu">

        {menuKeks.map(keks => {
          console.log(keks.glut)
          return <div className={keks.noGlut ? "menu_item noglut" : "menu_item"} key={keks.id}>
          <img src={keks.img}/>
          <h3 className='menu_item-title'>{keks.title}</h3>
          <p className='menu_item-desk'>{keks.description}</p>
          <p className='menu_item-price'>{keks.price}</p>
          <img src={noGlut} />
        </div>
        })}

        

      </div>
      </div>
    </div>
  )
}

export default Menu