import React, {useState, useEffect} from 'react'

function Modal({opened, setOpened, inner, buttunWatchCart, setAddedCart, addedCart}) {

  let [inputNum, setInputNum] = useState(1)
  let [updateTotalSum, setUpdateTotalSum] = useState(0)
  const [text, setText] = useState('')

  const removeUAH = price => {
    let lastIndex = price.lastIndexOf(" ")
    price = price.substring(0, lastIndex)

    return Number(price)
  }

  useEffect(() => {
    setUpdateTotalSum(removeUAH(inner.price))
  }, [opened])

  const increaseCount = e => {
    e.preventDefault()

    setInputNum(inputNum + 1)

    setUpdateTotalSum(updateTotalSum += removeUAH(inner.price))
  }

  const decreaseCount = e => {
    e.preventDefault()

    if (inputNum > 1)   {
      setInputNum(inputNum - 1)

      setUpdateTotalSum(updateTotalSum -= removeUAH(inner.price))
    }
  }

  const handleChange = e => {
    console.log(e.target.value)
    setText(e.target.value)
  }

  const addToCart = (e, inner) => {
    e.preventDefault()

    buttunWatchCart(true)

    setAddedCart([...addedCart, {
      id: inner.id,
      img: inner.img,
      title: inner.title,
      description: inner.description,
      price: inner.price,
      newPrice: updateTotalSum,
      count: inputNum,
      text
    }])

    setOpened(false)
  }

  return (
    <div className={opened ? 'modal opened' : 'modal'} onClick={() => setOpened(false)}>
      <div className="modal_inner" onClick={e => e.stopPropagation()}>
        <div className="modal_close" onClick={() => setOpened(false)}>X</div>
      <img src={inner.img} alt="" />
        <h2>{inner.title}</h2>
        <p>{inner.description}</p>

        <div className="modal_wish">
          <p>Порада до замовлення</p>
          <textarea placeholder='Напишіть поради до замовлення тут' onChange={e => handleChange(e)} value={text}></textarea>
        </div>

        <div className="modal_add-cart">
          <div className="modal_add-count">
            <button onClick={e => decreaseCount(e)}>-</button>
            <input type="text" value={inputNum} onChange={() => console.log()} />
            <button onClick={e => increaseCount(e)}>+</button>
          </div>
          <a href="#" onClick={e => addToCart(e, inner)}>Додати до замовлення <div className='total_sum'>{updateTotalSum} грн</div></a>
        </div>
        
      </div>
    </div>
  )
}

export default Modal