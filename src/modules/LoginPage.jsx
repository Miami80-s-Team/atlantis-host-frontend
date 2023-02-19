import React from 'react';
// templates
import {
    Container,
    TextField,
    Box,
    Button,
    InputLabel,
    Input,
    InputAdornment,
    FormControl,
    IconButton,
} from '@mui/material';
// icons
import { AccountCircle, Visibility, VisibilityOff } from '@mui/icons-material';
// logo
import logo from '../assets/logologin.jpg';
const LoginPage = () => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (
        event: React.MouseEvent<HTMLButtonElement>,
    ) => {
        event.preventDefault();
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            }}
        >
            <Container
                maxWidth="md"
                style={{
                    border: '1px solid black',
                    borderRadius: '10px',
                    height: '700px',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <img
                        src={logo}
                        alt="1"
                        style={{
                            width: '60%',
                            objectFit: 'contain',
                        }}
                    />
                    {/*login*/}
                    <div
                        style={{
                            display: 'flex',
                            width: '40%',
                            flexDirection: 'column',
                            margin: '70px 0px 0px 50px',
                        }}
                    >
                        <h2
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                marginBottom: '80px',
                            }}
                        >
                            Login
                        </h2>
                        <TextField
                            margin="normal"
                            id="login"
                            label="Login"
                            variant="outlined"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment
                                        position="end"
                                        style={{
                                            marginRight: '7.5px',
                                        }}
                                    >
                                        <AccountCircle />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        {/*password*/}
                        <TextField
                            margin="normal"
                            id="password"
                            label="Password"
                            variant="outlined"
                            type={showPassword ? 'text' : 'password'}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={
                                                handleMouseDownPassword
                                            }
                                        >
                                            {showPassword ? (
                                                <VisibilityOff />
                                            ) : (
                                                <Visibility />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <a
                            href="/recovery"
                            style={{
                                textAlign: 'right',
                                fontSize: '0.7rem',
                                color: 'grey',
                                textDecoration: 'none',
                            }}
                        >
                            Password Recovery
                        </a>
                        <div
                            style={{
                                display: 'flex',
                                marginTop: '20px',
                                width: '100%',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Button
                                variant="contained"
                                style={{
                                    width: '60%',
                                    fontFamily: 'Poppins',
                                    letterSpacing: '1.2px',
                                }}
                            >
                                Login
                            </Button>
                        </div>

                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column',
                                margin: '50px 0px 0px 0px',
                                position: 'relative',
                                bottom: 0,
                            }}
                        >
                            <p
                                style={{
                                    color: 'grey',
                                    textAlign: 'center',
                                }}
                            >
                                If you don't have an account{' '}
                                <a
                                    href="/register"
                                    style={{
                                        textDecoration: 'none',
                                        color: 'blue',
                                    }}
                                >
                                    Register
                                </a>
                            </p>
                            <p
                                style={{
                                    marginTop: '25px',
                                    marginBottom: '0px',
                                }}
                            >
                                <a
                                    href="/contacts"
                                    style={{
                                        textDecoration: 'none',
                                        color: 'grey',
                                    }}
                                >
                                    Contact Us
                                </a>
                            </p>
                            <p>
                                <a
                                    href="/contacts"
                                    style={{
                                        textDecoration: 'none',
                                        color: 'grey',
                                        fontSize: '0.8rem',
                                        margin: '0',
                                    }}
                                >
                                    © Atlantis 2022-2023
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </Box>
    );
};

export default LoginPage;
