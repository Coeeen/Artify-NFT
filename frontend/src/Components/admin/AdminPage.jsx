import React, { useState, useEffect } from 'react'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import IconButton from '@mui/material/IconButton'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import SearchIcon from '@mui/icons-material/Search'
import Avatar from '@mui/material/Avatar'
import { useMyContext } from '../../store/nfts/main'
import { Link } from 'react-router-dom'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontWeight: theme.typography.fontWeightBold,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 13,
  },
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: '#1B1E28',
  },
  '&:nth-of-type(even)': {
    backgroundColor: '#111317',
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}))

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.common.white,
  '&:hover': {
    color: theme.palette.primary.main,
  },
}))

function AdminPage() {
  const { data, fetchAllNfts, deleteNFT, updateNFT, addNFT } = useMyContext()
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      await fetchAllNfts()
    }
    fetchData()
  }, [])

  const handleEdit = (id) => {
    console.log('Edit', id)
    // Implement the edit functionality
  }

  const handleDelete = async (id) => {
    await deleteNFT(id)
    await fetchAllNfts()
  }

  const handleCheck = (id) => `/explore/${id}`

  const handleOpenDialog = () => {
    setOpen(true)
  }

  const handleCloseDialog = () => {
    setOpen(false)
  }

  const handleAddNFT = async () => {
    // Add logic to add new NFT
    await addNFT({ name, price, description })
    await fetchAllNfts()
    setOpen(false)
    // Reset form fields
    setName('')
    setPrice(0)
    setDescription('')
  }

  return (
    <>
      <TableContainer
        style={{ borderRadius: '5px', margin: '5px 10px' }}
        component={Paper}
      >
        <Table aria-label="NFTs table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Podgląd</StyledTableCell>
              <StyledTableCell>NFT</StyledTableCell>
              <StyledTableCell>Nazwa</StyledTableCell>
              <StyledTableCell>Cena</StyledTableCell>
              <StyledTableCell>Like</StyledTableCell>
              <StyledTableCell>Opis</StyledTableCell>
              <StyledTableCell>Akcje</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data &&
              data.map((nft) => (
                <StyledTableRow key={nft._id} style={{ color: 'white' }}>
                  <TableCell>
                    <Link
                      to={handleCheck(nft._id)}
                      style={{ textDecoration: 'none' }}
                    >
                      <StyledIconButton>
                        <SearchIcon />
                      </StyledIconButton>
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Avatar src={nft.img} alt={nft.name} />
                  </TableCell>
                  <TableCell>
                    <div
                      style={{
                        padding: '2px',
                        background: 'blue',
                        borderRadius: '10px',
                        textAlign: 'center',
                        color: 'white',
                        fontWeight: 'bold',
                      }}
                    >
                      {nft.name}
                    </div>
                  </TableCell>
                  <TableCell
                    style={{
                      color:
                        nft.price < 5
                          ? 'green'
                          : nft.price >= 12
                            ? 'red'
                            : 'white',
                    }}
                  >
                    {nft.price}$
                  </TableCell>
                  <TableCell style={{ color: 'white' }}>
                    {nft.numberLikes}
                  </TableCell>
                  <TableCell style={{ color: 'white' }}>
                    {nft.description}
                  </TableCell>
                  <TableCell>
                    <StyledIconButton onClick={() => handleEdit(nft._id)}>
                      <EditIcon />
                    </StyledIconButton>
                    <StyledIconButton onClick={() => handleDelete(nft._id)}>
                      <DeleteIcon />
                    </StyledIconButton>
                  </TableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '25px 0',
        }}
      >
        <Button variant="outlined" color="primary" onClick={handleOpenDialog}>
          Dodaj nowy NFT
        </Button>
      </div>

      <Dialog open={open} onClose={handleCloseDialog}>
        <DialogTitle>Dodaj nowy NFT</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nazwa"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            margin="dense"
            id="price"
            label="Cena"
            type="number"
            fullWidth
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
          <TextField
            margin="dense"
            id="description"
            label="Opis"
            fullWidth
            multiline
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Anuluj</Button>
          <Button onClick={handleAddNFT} color="primary">
            Dodaj
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default AdminPage
