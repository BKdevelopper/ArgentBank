import React from 'react'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { signInUpdate } from '../services/API/callAPI'
import { useRef } from 'react'
export default function Update() {
  const inputFirstname = useRef()
  const inputLastname = useRef()
  const [updateUser, setupdateUser] = useState(false)

  const user = useSelector((state) => state.infoUser)
  const dispatch = useDispatch()

  const cancelupdateUser = () => setupdateUser(false)
  const showupdateUser = () => {
    setupdateUser(true)
  }

  const saveupdateUser = (e) => {
    e.preventDefault()
    const userData = {
      firstName: inputFirstname.current.value,
      lastName: inputLastname.current.value,
    }
    dispatch(signInUpdate(userData))
    setupdateUser(false)
  }

  return (
    <>
      {!updateUser ? (
        <div className="header">
          <h1>
            Welcome back
            <br />
            {user.infoUser.firstName} {user.infoUser.lastName} !
          </h1>
          <button className="edit-button" onClick={showupdateUser}>
            Edit Name
          </button>
        </div>
      ) : (
        <div className="dashboard-header">
          <h1>Edit your profile information</h1>
          <form onSubmit={saveupdateUser} className="dashboard-form">
            <div className="dashboard-form-wrapper">
              <input
                type="text"
                className="form-control"
                id="firstName"
                placeholder="First Name"
                ref={inputFirstname}
              />
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </div>
            <div className="dashboard-form-wrapper">
              <input
                type="text"
                className="form-control"
                id="lastName"
                placeholder="Last Name"
                ref={inputLastname}
              />
              <button className="btn" type="button" onClick={cancelupdateUser}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}
