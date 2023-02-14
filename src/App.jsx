import axios from 'axios'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import './App.css'
import ModalForm from './components/ModalForm'
import Navbar from './components/Navbar'
import UsersList from './components/UsersList'

const BASE_URL = "https://users-crud.academlo.tech/"

const defaultValues = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  birthday: "",
}

function App() {
  const [users, setUsers] = useState([])
  const [isShowModal, setIsShowModal] = useState(false)
  const [updatingUser, setUpdatingUser] = useState()

  const handleClickShowModal = () => {
    setIsShowModal(isShowModal => !isShowModal)
  }

  const { register, handleSubmit, reset } = useForm()

  const handleClickClose = () => {
    handleClickShowModal()
    reset(defaultValues)
    setUpdatingUser()
  }


  const createUser = (data) => {
    axios
      .post(`${BASE_URL}users/`, data)
      .then(() => {
        getAllUsers()
        handleClickShowModal()
        reset(defaultValues)
      })
      .catch(err => console.log(err))
  }

  const getAllUsers = () => {
    axios
      .get(`${BASE_URL}users/`)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }

  const deleteUser = (id) => {
    axios
      .delete(`${BASE_URL}users/${id}/`)
      .then(() => getAllUsers())
      .catch(err => console.log(err))
  }

  const updateUser = (data, id) => {
    axios
      .patch(`${BASE_URL}users/${id}/`, data)
      .then(() => {
        getAllUsers()
        handleClickShowModal()
        reset(defaultValues)
        setUpdatingUser()
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getAllUsers()
  }, [])

  useEffect(() => {
    if (updatingUser) {
      reset(updatingUser)
    }
  }, [updatingUser])


  return (
    <div className="App">
      <Navbar handleClickShowModal={handleClickShowModal} />
      <ModalForm
        handleClickShowModal={handleClickShowModal}
        isShowModal={isShowModal}
        createUser={createUser}
        register={register}
        handleSubmit={handleSubmit}
        updatingUser={updatingUser}
        updateUser={updateUser}
        handleClickClose={handleClickClose}
      />
      <UsersList
        users={users}
        deleteUser={deleteUser}
        setUpdatingUser={setUpdatingUser}
        handleClickShowModal={handleClickShowModal}
        updatingUser={updatingUser}
      />
    </div>
  )
}

export default App
