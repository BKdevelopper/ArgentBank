import { signinFailure } from '../redux/actions/userAction'
import { notify } from '../other/notification'

export function errorAPI(message, error, dispatch) {
  if (error.response.status >= 500)
    // Error 500
    return dispatch(
      signinFailure(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    )
  notify(message, 'error')
  if (error.response.status >= 400)
    // Error 400
    return dispatch(
      signinFailure(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    )
  notify(message, 'error')
}
