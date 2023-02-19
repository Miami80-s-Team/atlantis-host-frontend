import React from 'react';
// templates
import {
    Container,
    TextField,
    Box,
    Button,
    InputLabel,
    Input,
    MenuItem,
    InputAdornment,
    FormControl,
    IconButton,
} from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
// icons
import {
    AccountCircle,
    Visibility,
    VisibilityOff,
    EmailIcon,
} from '@mui/icons-material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PersonIcon from '@mui/icons-material/Person';
import BadgeIcon from '@mui/icons-material/Badge';
import LanguageIcon from '@mui/icons-material/Language';
import flags from 'country-flag-icons/react/3x2';

// logo
import logo from '../assets/logologin.jpg';
const RegisterPage = () => {
    const [country, setCountry] = React.useState('');

    const handleChange = (event) => {
        setCountry(event.target.value);
    };

    const countryOptions = Object.entries(flags).map(([code, url]) => (
        <MenuItem key={code} value={code}>
            <img src={url + `.svg`} style={{ marginRight: '10px' }} />
            {code}
        </MenuItem>
    ));

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
                maxWidth="lg"
                style={{
                    border: '1px solid black',
                    borderRadius: '10px',
                    height: '93%',
                }}
            >
                <div
                    style={{
                        width: '100%',
                        height: '100%',
                        // backgroundColor: 'yellow',
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
                    <div
                        style={{
                            display: 'flex',
                            width: '40%',
                            flexDirection: 'column',
                            margin: '20px 0px 0px 50px',
                        }}
                    >
                        <h2
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                marginBottom: '40px',
                            }}
                        >
                            Registration
                        </h2>
                        <TextField
                            margin="normal"
                            id="person"
                            label="Contact Person"
                            variant="outlined"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment
                                        position="end"
                                        style={{
                                            marginRight: '7.5px',
                                        }}
                                    >
                                        <PersonIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextField
                            margin="normal"
                            id="email"
                            type="email"
                            label="Write your Email"
                            variant="outlined"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment
                                        position="end"
                                        style={{
                                            marginRight: '7.5px',
                                        }}
                                    >
                                        <MailOutlineIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextField
                            margin="normal"
                            id="login"
                            label="Create login"
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
                        <TextField
                            margin="normal"
                            id="password"
                            label="Create password"
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
                        <TextField
                            margin="normal"
                            id="secondPassword"
                            label="Repeat password"
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
                        <InputLabel id="demo-simple-select-label">
                            Select Country
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="countrySelect"
                            value={country}
                            label="Country"
                            onChange={handleChange}
                        >
                            {countryOptions}
                        </Select>
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
                                Register
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
                                If you have an account
                                <br />
                                <a
                                    href="/login"
                                    style={{
                                        textDecoration: 'none',
                                        color: 'blue',
                                    }}
                                >
                                    Log in
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

export default RegisterPage;
