import './widget.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import PersonIcon from '@mui/icons-material/Person'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'
import BalanceIcon from '@mui/icons-material/Balance'

const Widget = ({ type }) => {
  let data

  //temporary
  const amount = 100
  const diff = 20

  switch (type) {
    case 'user':
      data = {
        title: 'USERS',
        isMoney: false,
        link: 'See all users',
        icon: (
          <PersonIcon
            className='icon'
            style={{ color: 'crimson', backgroundColor: 'rgba(255,0,0,0.2)' }}
          />
        ),
      }
      break
    case 'order':
      data = {
        title: 'ORDERS',
        isMoney: false,
        link: 'View all orders',
        icon: (
          <ShoppingCartCheckoutIcon
            className='icon'
            style={{ color: 'crimson', backgroundColor: 'rgba(0,0,128,0.2)' }}
          />
        ),
      }
      break
    case 'earning':
      data = {
        title: 'EARNINGS',
        isMoney: true,
        link: 'View net earnings',
        icon: (
          <MonetizationOnIcon
            className='icon'
            style={{ color: 'crimson', backgroundColor: '#00806033' }}
          />
        ),
      }
      break
    case 'balance':
      data = {
        title: 'BALANCE',
        isMoney: true,
        link: 'See Details',
        icon: (
          <BalanceIcon
            className='icon'
            style={{ color: 'crimson', backgroundColor: '#c800ff33' }}
          />
        ),
      }
      break
    default:
      break
  }

  return (
    <div className='widget'>
      <div className='left'>
        <span className='title'>{data.title}</span>
        <span className='counter'>
          {data.isMoney && '$'} {amount}
        </span>
        <span className='link'>{data.link}</span>
      </div>
      <div className='right'>
        <div className='percentage positive'>
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        <div>{data.icon}</div>
      </div>
    </div>
  )
}

export default Widget
