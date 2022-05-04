import { Alert, Snackbar } from '@material-ui/core'

const Snack = ({open, setOpen}) => {
  const handleClose = () => {
    setOpen(false)
  }
  return (
    <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
    >
        <Alert 
            onClose={handleClose} 
            severity="success" 
            sx={{ width: '100%' }}
        >
            Добавлено в корзину
        </Alert>
    </Snackbar>

  )
}

export default Snack