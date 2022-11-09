import { toast } from 'react-toastify'

/**
 * Notify the user with a toast
 * @param {string} message
 * @param {string} type
 */
export const notify = (message, type) => {
  toast[type](message, {
    position: toast.POSITION.TOP_RIGHT,
  })
}
