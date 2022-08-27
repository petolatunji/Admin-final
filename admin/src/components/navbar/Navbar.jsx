import './navbar.scss'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import LanguageIcon from '@mui/icons-material/Language'
import ModeNightIcon from '@mui/icons-material/ModeNight'
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import ListIcon from '@mui/icons-material/List'
import { DarkModeContext } from '../../context/darkModeContext'
import { useContext } from 'react'

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext)
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='search'>
          <input type='text' placeholder='search...' />
          <SearchRoundedIcon className='icon' />
        </div>
        <div className='items'>
          <div className='item'>
            <LanguageIcon className='icon' />
            English
          </div>
          <div className='item'>
            <ModeNightIcon
              className='icon'
              onClick={() => dispatch({ type: 'TOGGLE' })}
            />
          </div>
          <div className='item'>
            <FullscreenExitIcon className='icon' />
          </div>
          <div className='item'>
            <NotificationsNoneIcon className='icon' />
            <div className='counter'>1</div>
          </div>
          <div className='item'>
            <ChatBubbleOutlineIcon className='icon' />
            <div className='counter'>1</div>
          </div>
          <div className='item'>
            <ListIcon className='icon' />
          </div>
          <div className='item'>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXVTGNII2X32y6TCaeHPOTfoXDS05V7QKmiA&usqp=CAU'
              alt=''
              className='avatar'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
