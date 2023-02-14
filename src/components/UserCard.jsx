import React from 'react'
import './styles/UsersList.css'

const UserCard = ({ user, deleteUser, setUpdatingUser, handleClickShowModal }) => {
  
  const handleClickEdit = () => {
    setUpdatingUser(user)
    handleClickShowModal()
  }
  
  return (
    <article className='userCard'>
      <h3 className='userCard__name'>{user.first_name} {user.last_name}</h3>
      <hr className='userCard__hr'/>
      <ul className='userCard__info'>
        <li className='userCard__data'><span>Email</span> {user.email}</li>
        <li className='userCard__data'><span>Birthday</span> {user.birthday}</li>
      </ul>
      <hr className='userCard__hr'/>
      <footer className='userCard__btns'>
        <button className='userCard__btn1' onClick={() => deleteUser(user.id)}><i className='bx bx-trash'></i></button>
        <button className='userCard__btn2' onClick={handleClickEdit}><i className='bx bx-edit-alt'></i></button>
      </footer>
    </article>
  )
}

export default UserCard