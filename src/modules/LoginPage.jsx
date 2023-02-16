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
        <Container
            maxWidth="md"
            style={{
                border: '1px solid black',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <img src={logo} alt="1" width={300} height={300} />
                {/*login*/}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        margin: '0px 50px',
                    }}
                >
                    <h2>Login</h2>
                    <TextField
                        margin="normal"
                        id="login"
                        label="Login"
                        variant="outlined"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
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
                                        onMouseDown={handleMouseDownPassword}
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
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            margin: '10px 0px',
                        }}
                    >
                        <Button
                            variant="contained"
                            style={{ marginRight: '25px' }}
                        >
                            Login
                        </Button>
                        <Button variant="text" size="small">
                            Password Recovery
                        </Button>
                    </div>
                </div>
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    marginTop: '50px',
                }}
            >
                <p style={{ color: 'grey' }}>
                    If you don't have an account{' '}
                    <a
                        href="1"
                        style={{ textDecoration: 'none', color: 'blue' }}
                    >
                        Register
                    </a>
                </p>
                <p style={{ marginTop: '25px', marginBottom: '0px' }}>
                    <a
                        href="2"
                        style={{ textDecoration: 'none', color: 'grey' }}
                    >
                        Contact Us
                    </a>
                </p>
                <p>
                    <a
                        href="3"
                        style={{
                            textDecoration: 'none',
                            color: 'grey',
                            fontSize: '0.8rem',
                        }}
                    >
                        © Atlantis 2022-2023
                    </a>
                </p>
            </div>
        </Container>
    );
};

export default LoginPage;
