import React from 'react'
import './styles/ModalForm.css'

const ModalForm = ({ 
  isShowModal,
  createUser, 
  register, 
  handleSubmit, 
  updatingUser, 
  updateUser,
  handleClickClose
}) => {
  
  const submit = (data) => {
    if (updatingUser) {
      updateUser(data, updatingUser.id)
    } else {
      createUser(data)
    }
  }
  

  return (
    <section className={`modalForm ${isShowModal ? 'activeForm' : ''}`}>
      <form onSubmit={handleSubmit(submit)} className='modalForm__form'>
        <h3 className='modalForm__title'>{updatingUser ? "Edit this user" : "New user"}</h3>
        <i onClick={handleClickClose} className='modalForm__x bx bx-x' ></i>
        <div className='modalForm__div'>
          <label className='modalForm__lavel'>First name</label>
          <input className='modalForm__input' type="text" { ... register("first_name")} />
        </div>
        <div className='modalForm__div'>
          <label className='modalForm__lavel'>Last name</label>
          <input className='modalForm__input' type="text" { ... register("last_name")} />
        </div>
        <div className='modalForm__div'>
          <label className='modalForm__lavel'>Email</label>
          <input className='modalForm__input' type="email" { ... register("email")} />
        </div>
        <div className='modalForm__div'>
          <label className='modalForm__lavel'>Password</label>
          <input className='modalForm__input' type="password" { ... register("password")} />
        </div>
        <div className='modalForm__div'>
          <label className='modalForm__lavel'>Birthday date</label>
          <input className='modalForm__input' type="date" { ... register("birthday")} />
        </div>
        <button className='modalForm__btn'>{updatingUser ? "Save changes" : "Add new user"}</button>
      </form>
    </section>
  )
}

export default ModalForm