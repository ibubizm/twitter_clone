import { FormControl, Input, FormHelperText, InputLabel, Button, Typography, FormGroup } from '@material-ui/core'
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { Close } from '@material-ui/icons'
import {useState} from 'react'

const useStyles = makeStyles((theme) => ({
    // root: {
    //     flexGrow: 1
    // },
    menuButton: {
        marginRight: theme.spacing(1),
        marginTop: theme.spacing(1),
        borderRadius: 20,
        color: '#fff',
        textTransform: 'capitalize',
        fontSize: 15

    },
    form: {
        width: 600,
        height: 400,
        display: 'flex',
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    title: {
        flexGrow: 1
    }

}))

// @ts-ignore
function Login({modal}) {
    const [open, setOpen] = useState(false)

    const toggleOpen = () =>{
        setOpen(true)
    }

    const close = () =>{
        modal()
    }


    const tema = useStyles()
    return (
        // <Modal open={open} onClick={toggleOpen}>
            <FormControl className={tema.form}>
                <Typography >
                    <Close onClick={close} />
                    Войти в Твиттер
                </Typography>
                <FormGroup>
                    <div>
                        <InputLabel htmlFor="my-input">Email address</InputLabel>
                        <Input fullWidth id="my-input" aria-describedby="my-helper-text" />

                    </div>
                    <div>

                        <InputLabel htmlFor="my-input2">Password</InputLabel>
                        <Input fullWidth id="my-input2" aria-describedby="my-helper-text" />
                    </div>
                </FormGroup>
                <Button variant="contained" style={{ color: '#1da1f2' }} className={tema.menuButton}>jopa</Button>
            </FormControl>
        // </Modal>
    )
}

export default Login