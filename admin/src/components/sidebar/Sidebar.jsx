import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded'
import Inventory2TwoToneIcon from '@mui/icons-material/Inventory2TwoTone'
import BorderAllSharpIcon from '@mui/icons-material/BorderAllSharp'
import LocalShippingSharpIcon from '@mui/icons-material/LocalShippingSharp'
import AssessmentIcon from '@mui/icons-material/Assessment'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream'
import BiotechIcon from '@mui/icons-material/Biotech'
import SettingsIcon from '@mui/icons-material/Settings'
import PersonIcon from '@mui/icons-material/Person'
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp'
import { Link } from 'react-router-dom'
import { DarkModeContext } from '../../context/darkModeContext'
import { useContext } from 'react'

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext)
  return (
    <div className='sidebar'>
      <div className='top'>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <span className='logo'>PeterAdmin</span>
        </Link>
      </div>
      <hr />
      <div className='center'>
        <ul>
          <p className='title'>MAIN</p>
          <li>
            <DashboardIcon className='icon' />
            <span>Dashboard</span>
          </li>
          <p className='title'>LISTS</p>
          <Link to='/users' style={{ textDecoration: 'none' }}>
            <li>
              <AccountCircleRoundedIcon className='icon' />

              <span>Users</span>
            </li>
          </Link>
          <Link to='/products' style={{ textDecoration: 'none' }}>
            <li>
              <Inventory2TwoToneIcon className='icon' />
              <span>Products</span>
            </li>
          </Link>
          <li>
            <BorderAllSharpIcon className='icon' />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingSharpIcon className='icon' />
            <span>Delivery</span>
          </li>
          <p className='title'>USEFUL</p>
          <li>
            <AssessmentIcon className='icon' />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsActiveIcon className='icon' />
            <span>Notifications</span>
          </li>
          <p className='title'>SERVICE</p>
          <li>
            <SettingsSystemDaydreamIcon className='icon' />
            <span>System Health</span>
          </li>
          <li>
            <BiotechIcon className='icon' />
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className='icon' />
            <span>Settings</span>
          </li>
          <p className='title'>USER</p>
          <li>
            <PersonIcon className='icon' />
            <span>Profile</span>
          </li>
          <li>
            <LogoutSharpIcon className='icon' />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className='bottom'>
        <div
          className='colorOption'
          onClick={() => dispatch({ type: 'LIGHT' })}
        ></div>
        <div
          className='colorOption'
          onClick={() => dispatch({ type: 'DARK' })}
        ></div>
      </div>
    </div>
  )
}

export default Sidebar
