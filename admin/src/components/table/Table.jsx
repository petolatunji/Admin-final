import './table.scss'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

const TableList = () => {
  const rows = [
    {
      id: 1143155,
      product: 'Dell e450',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_onal4vJYbRsvySEuheZj30wPzc5oTIfhfg&usqp=CAU',
      customer: 'Peter Paul',
      date: '1 June',
      amount: 500,
      method: 'Online Payment',
      status: 'Approved',
    },
    {
      id: 2342353,
      product: 'HP laptop',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9YG1FObyMjXyhDTXoUr68LGRCo-0-r2Oifg&usqp=CAU',
      customer: 'Moses ',
      date: '1 June',
      amount: 300,
      method: 'Online Payment',
      status: 'Failed',
    },
    {
      id: 2357741,
      product: 'Razer Blade ',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBZVTmO2hKIWCIK0516r5clGcZ5H5hppAqbw&usqp=CAU',
      customer: 'John Smilga',
      date: '1 June',
      amount: 1000,
      method: 'Online ',
      status: 'Approved',
    },
    {
      id: 2342355,
      product: 'Mac Laptop',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjqOuk4REWe_QOy2NU42kC5vmlm021CuENtA&usqp=CAU',
      customer: 'Emmanuel',
      date: '1 June',
      amount: 2000,
      method: 'Online Payment',
      status: 'Pending',
    },
    {
      id: 2235235,
      product: 'Playstation 5 Sony',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ0EXFuGSe0H96VBhoxWMSN_RRatyEWbMBbQ&usqp=CAU',
      customer: 'Peter Dury',
      date: '1 June',
      amount: 900,
      method: 'Cash on Delivery',
      status: 'Pending',
    },
  ]
  return (
    <TableContainer component={Paper} className='table'>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell className='tableCell'>Tracking ID</TableCell>
            <TableCell className='tableCell'>Product</TableCell>
            <TableCell className='tableCell'>Customer</TableCell>
            <TableCell className='tableCell'>Data</TableCell>
            <TableCell className='tableCell'>Amount</TableCell>
            <TableCell className='tableCell'>Payment Method</TableCell>
            <TableCell className='tableCell'>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className='tableCell'>{row.id}</TableCell>
              <TableCell className='tableCell'>
                <div className='cellWrapper'>
                  <img src={row.img} alt='' className='image' />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className='tableCell'>{row.customer}</TableCell>
              <TableCell className='tableCell'>{row.date}</TableCell>
              <TableCell className='tableCell'>{row.amount}</TableCell>
              <TableCell className='tableCell'>{row.method}</TableCell>
              <TableCell className='tableCell'>
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableList
