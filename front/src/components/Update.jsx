import React from 'react'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { signInUpdate } from '../services/API/callAPI'
export default function Update() {
  const [updateProfile, setUpdateProfile] = useState(false)
  const [updateProfileForm, setUpdateProfileForm] = useState({
    firstName: '',
    lastName: '',
  })
  const user = useSelector((state) => state.infoUser)
  const dispatch = useDispatch()

  const saveUpdateProfile = (e) => {
    e.preventDefault()
    dispatch(signInUpdate(updateProfileForm))
    setUpdateProfile(false)
  }

  const cancelUpdateProfile = () => setUpdateProfile(false)

  const showUpdateProfile = () => {
    setUpdateProfileForm({
      firstName: user.firstName,
      lastName: user.lastName,
    })
    setUpdateProfile(true)
  }
  return (
    <>
      {!updateProfile ? (
        <div className="header">
          <h1>
            Welcome back
            <br />
            {user.infoUser.firstName} {user.infoUser.lastName} !
          </h1>
          <button className="edit-button" onClick={showUpdateProfile}>
            Edit Name
          </button>
        </div>
      ) : (
        <div className="dashboard-header">
          <h1>Edit your profile information</h1>
          <form onSubmit={saveUpdateProfile} className="dashboard-form">
            <div className="dashboard-form-wrapper">
              <input
                type="text"
                className="form-control"
                value={updateProfileForm.firstName}
                onChange={(e) =>
                  setUpdateProfileForm({
                    ...updateProfileForm,
                    firstName: e.target.value,
                  })
                }
              />
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </div>
            <div className="dashboard-form-wrapper">
              <input
                type="text"
                className="form-control"
                value={updateProfileForm.lastName}
                onChange={(e) =>
                  setUpdateProfileForm({
                    ...updateProfileForm,
                    lastName: e.target.value,
                  })
                }
              />
              <button
                className="btn"
                type="button"
                onClick={cancelUpdateProfile}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}
