import React from 'react'

function Modal({opened, setOpened, inner}) {

  return (
    <div className={opened ? 'modal opened' : 'modal'} onClick={() => setOpened(false)}>
      <div className="modal_inner" onClick={e => e.stopPropagation()}>
      <img src={inner.img} alt="" />
        <h2>{inner.title}</h2>
        <p>{inner.description}</p>

        <div className="modal_wish">
          <p>Порада до замовлення</p>
          <textarea placeholder='Напишіть поради до замовлення тут'></textarea>
        </div>

        <div className="modal_add-cart">
          <div className="modal_add-count">
            <button>-</button>
            <input type="text" value='1' />
            <button>+</button>
          </div>
          <a href="#">Додати до замовлення 100грн</a>
        </div>
        
      </div>
    </div>
  )
}

export default Modal