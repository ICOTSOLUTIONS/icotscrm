import React from "react";
import backgroundimg from '../img/icot.png'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import KeyIcon from '@mui/icons-material/Key';
import Button from '@mui/material/Button';
export default function Login() {
    return (
        <section className="ftco-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12 col-lg-10">
                        <div className="wrap d-md-flex">
                            <div className="img" style={{ backgroundImage: `url(${backgroundimg})` }}>
                                
                            </div>
                            <div className="login-wrap p-4 p-md-5">
                                <div className="d-flex">
                                    <div className="w-100">
                                        <h3 className="mb-4">ICOTS (Employes)</h3>
                                    </div>
                                </div>
                                <form className="signin-form">
                                    <div className="form-group mb-3">
                                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                            <TextField id="input-with-sx" label="Email" style={{ width: 400 }} variant="standard" />
                                        </Box>
                                    </div>
                                    <div className="form-group mb-3">
                                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                            <KeyIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                            <TextField id="input-with-sx" type="password" label="Password" style={{ width: 500 }} variant="standard" />
                                        </Box>
                                    </div>
                                    <div className="form-group">
                                        <Box sx={{ display: 'flex', alignItems: 'flex-end'  }}>
                                            <Button variant="contained"  style={{ width: 500 }} >Sign In</Button>
                                        </Box>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
