import React from 'react';
import { Container, Grid, Typography } from '@mui/material';

const Footer: React.FC = () => {
    return (
        <footer style={{ marginTop: '2rem', backgroundColor: 'teal', padding: '1rem' }}>
            <Container>
                <Grid container justifyContent="center" alignItems="center">
                    <Grid item xs={12}>
                        <Typography variant="body2" color="white" align="center">
                            &copy; 2023 <a href="https://www.linkedin.com/in/adri-antori/" style={{color: 'inherit'}}>Cypherusuh</a> All rights reserved.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    );
};

export default Footer;
