import React from 'react'
import "./userList.css"
import { userRows } from '../../dummyData'
import {DataGrid} from "@mui/x-data-grid"
import { Link } from 'react-router-dom'
import { DeleteOutline } from '@mui/icons-material'

const UserList = () => {


  const columns =[
    {field:"id",headerName:"ID",width:90},
    {field:"user",headerName:"user",width:150,
       renderCell:(params)=>{
        return (
          <div className='userListUser'>
            <img src={params.row.avatar} alt="" className='userListImg' />
            {params.row.username}
          </div>
        )
       }
  },
  {
    field:'email',
    headerName:"Email",
    width:150,
    editable:true,
  },
  {
    field:"status",
    headerName:"Status",
    width:150,
  },
  {
    field:"transaction",
    headerName:'Transaction',
    width:160,
  },
  {
    field:"action",
    headerName:"Action",
    width:150,
    renderCell:(params)=>{
      return (
        <>
         <Link to={"/users/"+params.row.id}>
           <button className='userListEdit'>Edit</button>
         </Link>
         <DeleteOutline className='userListDelete'/>
        </>
      )
    }
  }
  ]



  return (
    <div className='userlist'>
      <DataGrid
      rows={userRows}
      columns={columns}
      initialState={{
        pagination:{
          paginationModel:{
            pageSize:5,
          }
        }
      }}
      pageSizeOptions={5}
      checkboxSelection
      disableRowSelectionOnClick
      disableSelectionOnClick
      />
    </div>
  )
}

export default UserList