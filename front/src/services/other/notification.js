import { toast } from 'react-toastify'

export const notify = (message, type) => {
  toast[type](message, {
    position: toast.POSITION.TOP_RIGHT,
  })
}
