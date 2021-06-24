import { makeStyles, Typography, Button, List, ListItem , Modal} from '@material-ui/core'
import { Twitter, Search, Message, PeopleOutlined } from '@material-ui/icons'
import { useState } from 'react'
import twitterBg from '../twit.png'
import Login from './Login'



const useClasses = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        height: '100vh'
    },
    blueSide: {
        display: 'flex',
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#71c9f8',
        color: '#fff',
        flex: '0 0 50%',
        overflow: 'hidden',


        '& ul': {
            position: 'relative',
            height: 380,

            '& li': {

                listStyle: 'none',
            }
        },

        '& h5': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 10,
            fontWeight: 700,
            fontSize: 20
        }


    },
    bigLogo: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        height: '100%',
        width: '100%',
        color: '#1da1f2'
    },
    littleIcon: {
        marginRight: 10
    },
    loginSide: {
        display: 'flex',
        fontWeight: 900,
        height: 480,
        alignItems: 'center',
        justifyContent: 'center',
        flex: '0 0 50%',
        '& h4': {
            fontWeight: 700,
        }
    },
    leftContent: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btn: {
        // backgroundColor: '#1da1f2',
        borderRadius: 20,
        borderColor: '#1da1f2',
        color: '#fff',
        textTransform: 'capitalize',
        fontSize: 15

    }

}))

function SignIn() {
    // @ts-ignore
    const classes = useClasses()
    const [modal, setModal] = useState(false)

    const openModal = () => {
        setModal(true)
    }

    const closeModal = () =>{
        setModal(false)
        console.log('close')
    }
    return (
        <div className={classes.wrapper}>
            <section className={classes.blueSide}>
                <Twitter className={classes.bigLogo} />
                <img src={twitterBg} alt="" />

            </section>
            <section className={classes.loginSide}>
                <div className="coontent">
                    <Twitter fontSize="large" style={{ color: '#1da1f2' }} color="primary" />
                    <Typography variant="h4">

                        В курсе происходящего
                    </Typography>
                    <Typography style={{ marginBottom: 40 }}>Присоединяйтесь к Твиттеру прямо сейчас!</Typography>
                    <Button style={{ marginBottom: 10, backgroundColor: '#1da1f2' }} size="large" className={classes.btn} variant="contained" fullWidth>
                        <b>Registration</b>
                    </Button>
                    <Button onClick={openModal} style={{ color: '#1da1f2' }} className={classes.btn} variant="outlined" fullWidth>
                        Log in
                    </Button>
                </div>
                <Modal open={modal}>
                    <Login modal={closeModal}/>
                </Modal>
                {/* <TwitterIcon /> */}
            </section>
        </div>
    )
}

export default SignIn



{/* <div className={classes.leftContent}>
                    <List>
                        <ListItem>
                            <Typography variant="h5">
                                <Search className={classes.littleIcon}/>
                                ass
                            </Typography> 
                        </ListItem>
                        <ListItem>
                            <Typography variant="h5">
                                <Message className={classes.littleIcon}/>
                                pass
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography variant="h5">
                                <PeopleOutlined className={classes.littleIcon}/>
                                pass
                            </Typography>
                        </ListItem>
                    </List>
                </div> */}