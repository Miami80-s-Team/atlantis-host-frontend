import React from 'react';

import { useQuery } from 'react-query';
import { Alert, Card, CardContent, Skeleton, Typography } from '@mui/material';
import { TestService } from '../services/test.service';

const MainPage = () => {
    const { isLoading, error, data } = useQuery('posts', () =>
        TestService.getAll(),
    );

    if (isLoading)
        return <Skeleton variant="rectangular" width={210} height={118} />;
    if (error) return 'Error: ' + error.message;

    if (!data)
        return (
            <Alert severity="error">
                This is an error alert — check it out!
            </Alert>
        );

    return (
        <>
            Welcome to main page!
            {data.data.map((item) => {
                return (
                    <Card>
                        <CardContent>
                            <Typography
                                sx={{ fontSize: 14 }}
                                color="text.secondary"
                                gutterBottom
                            >
                                {item.body}
                            </Typography>
                        </CardContent>
                    </Card>
                );
            })}
        </>
    );
};

export default MainPage;
