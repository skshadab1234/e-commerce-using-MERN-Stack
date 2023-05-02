import Cookies from 'js-cookie'
import React from 'react'
import { useNavigate } from 'react-router-dom'
const Logout = () => {
  const data = Cookies.remove('adminData')
    window.location.href= '/Admin/Login'
}

export default Logout