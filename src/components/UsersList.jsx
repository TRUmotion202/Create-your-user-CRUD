import React from 'react'
import UserCard from './UserCard'
import './styles/UsersList.css'

const UsersList = ({ users, deleteUser, setUpdatingUser, handleClickShowModal}) => {
  return (
    <section className='userlist'>
      {
        users.map(user => <UserCard 
          key={user.id} 
          user={user} 
          deleteUser={deleteUser} 
          setUpdatingUser={setUpdatingUser} 
          handleClickShowModal={handleClickShowModal}
          />)
      }
    </section>
  )
}

export default UsersList