import * as React from 'react';
import {
    Grid,
    Box,
} from '@mui/material';
import rose_1 from './images/rose_1.jpg';
import rose_2 from './images/rose_2.jpg';
import rose_3 from './images/rose_3.jpg';
import './ImageGrid.scss'

const ImageGrid1 = () => {
    return (
        <Box sx={{ width: '50%', margin: '50px auto' }}>
            <Grid
                container
                sx={{
                    '--Grid-borderWidth': '1px',
                    borderTop: 'var(--Grid-borderWidth) solid',
                    borderLeft: 'var(--Grid-borderWidth) solid',
                    borderColor: '#928b8b',
                    '& > div': {
                        borderRight: 'var(--Grid-borderWidth) solid',
                        borderBottom: 'var(--Grid-borderWidth) solid',
                        borderColor: '#928b8b',
                    }, width: '100%'
                }}
                className='image_grid'
            >
                {[...Array(8)].map((_, index_row) => (
                    [...Array(6)].map((_, index_col) => (
                        <Grid
                            xs={12 / 6}
                            sx={{ width: '100%' }}
                            p={1}
                            className='image_grid-item'
                        >
                            <img
                                src={rose_3}
                                alt='Rosé'
                                loading="lazy"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </Grid>
                    )
                    )))}
            </Grid>
        </Box>
    );
}
export default ImageGrid1;