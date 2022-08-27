//temorary data

export const userColumns = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'user',
    headerName: 'User',
    width: 230,
    renderCell: (params) => {
      return (
        <div className='cellWithImg'>
          <img className='cellImg' src={params.row.img} alt='' />
          {params.row.username}
        </div>
      )
    },
  },
  { field: 'email', headerName: 'Email', width: 230 },
  { field: 'age', headerName: 'Age', width: 100 },
  {
    field: 'status',
    headerName: 'Status',
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      )
    },
  },
]

export const userRows = [
  {
    id: 1,
    username: 'Peter',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ0EXFuGSe0H96VBhoxWMSN_RRatyEWbMBbQ&usqp=CAU',
    status: 'active',
    email: 'peterolatunji1@gmail.com',
    age: 30,
  },
  {
    id: 2,
    username: 'Peter',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ0EXFuGSe0H96VBhoxWMSN_RRatyEWbMBbQ&usqp=CAU',
    status: 'pending',
    email: 'peterolatunji1@gmail.com',
    age: 30,
  },
  {
    id: 3,
    username: 'James',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ0EXFuGSe0H96VBhoxWMSN_RRatyEWbMBbQ&usqp=CAU',
    status: 'failed',
    email: 'peterolatunji1@gmail.com',
    age: 25,
  },
  {
    id: 4,
    username: 'Peter',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ0EXFuGSe0H96VBhoxWMSN_RRatyEWbMBbQ&usqp=CAU',
    status: 'active',
    email: 'peterolatunji1@gmail.com',
    age: 30,
  },
  {
    id: 5,
    username: 'Peter',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ0EXFuGSe0H96VBhoxWMSN_RRatyEWbMBbQ&usqp=CAU',
    status: 'active',
    email: 'peterolatunji1@gmail.com',
    age: 30,
  },
  {
    id: 6,
    username: 'Peter',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ0EXFuGSe0H96VBhoxWMSN_RRatyEWbMBbQ&usqp=CAU',
    status: 'active',
    email: 'peterolatunji1@gmail.com',
    age: 30,
  },
  {
    id: 7,
    username: 'Peter',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ0EXFuGSe0H96VBhoxWMSN_RRatyEWbMBbQ&usqp=CAU',
    status: 'active',
    email: 'peterolatunji1@gmail.com',
    age: 30,
  },
  {
    id: 8,
    username: 'Peter',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ0EXFuGSe0H96VBhoxWMSN_RRatyEWbMBbQ&usqp=CAU',
    status: 'active',
    email: 'peterolatunji1@gmail.com',
    age: 30,
  },
  {
    id: 9,
    username: 'Peter',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ0EXFuGSe0H96VBhoxWMSN_RRatyEWbMBbQ&usqp=CAU',
    status: 'active',
    email: 'peterolatunji1@gmail.com',
    age: 30,
  },
  {
    id: 10,
    username: 'Peter',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ0EXFuGSe0H96VBhoxWMSN_RRatyEWbMBbQ&usqp=CAU',
    status: 'active',
    email: 'peterolatunji1@gmail.com',
    age: 30,
  },
]
