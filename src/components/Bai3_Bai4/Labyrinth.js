import React, { useState, useEffect } from 'react';
import {
    Grid,
    Box,
    Typography,
    Button,
} from '@mui/material';
import mario from './mario.png';
import diamond from './diamond.png';
import './Labyrinth.scss';
import { toast } from 'react-toastify';


const Labyrinth = () => {

    const [position, setPosition] = useState({
        x: 3,
        y: 7,
    });

    const [move, setMove] = useState('')

    useEffect(() => {
        if (position.x === 4 && position.y === 0) {
            toast.success('You win');
            setIsStart(false);
            const timer = setTimeout(() => {
                setPosition({
                    x: 3,
                    y: 7,
                })
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [position])
    const [isStart, setIsStart] = useState(false);

    const isPlay = () => {
        setIsStart(true);
        toast.success('Start game');
    }
    const isStop = () => {
        setIsStart(false);
        toast.error('Stop game');
    }

    const marioMove = (event) => {
        if (isStart) {
            switch (event.key) {
                case 'ArrowUp':
                    setMove('up');
                    if (position.y > 0) {
                        setPosition({
                            ...position,
                            y: position.y - 1,
                        })
                    }
                    if (position.y === 6 & position.x > 1 || position.y === 4 & position.x < 4 || position.y === 2 & position.x > 2) {
                        setPosition({
                            ...position
                        })
                    }
                    break;
                case 'ArrowDown':
                    setMove('down');
                    if (position.y < 7) {
                        setPosition({
                            ...position,
                            y: position.y + 1,
                        })
                    }
                    if (position.y === 4 & position.x > 1 || position.y === 2 & position.x < 4 || position.y === 0 & position.x > 2) {
                        setPosition({
                            ...position
                        })
                    }
                    break;
                case 'ArrowLeft':
                    setMove('left');
                    if (position.x > 0) {
                        setPosition({
                            ...position,
                            x: position.x - 1,
                        })
                    }
                    if (position.y === 3 & position.x === 4) {
                        setPosition({
                            ...position
                        })
                    }
                    break;
                case 'ArrowRight':
                    setMove('right');
                    if (position.x < 5) {
                        setPosition({
                            ...position,
                            x: position.x + 1,
                        })
                    }
                    if (position.y === 1 & position.x === 2 || position.y === 5 & position.x === 1) {
                        setPosition({
                            ...position
                        })
                    }
                    break;
                default:
                    break;
            }
        }
    }




    return (
        <Box sx={{ width: '80%', margin: '10px auto' }}>
            <Grid
                container
                sx={{
                    width: '100%',
                    border: '1px solid black',
                    height: 'fit-content',
                }}
                className='labyrinth'
            >
                <Grid
                    xs={6}
                    sx={{
                        width: '100%',
                    }}
                    p={1}
                >
                    <Grid
                        container
                        xs={12}
                        sx={{
                            '--Grid-borderWidth': '1px',
                            borderTop: 'var(--Grid-borderWidth) solid',
                            borderLeft: 'var(--Grid-borderWidth) solid',
                            borderColor: 'black',
                            '& > div': {
                                borderRight: 'var(--Grid-borderWidth) solid',
                                borderBottom: 'var(--Grid-borderWidth) solid',
                                borderColor: 'black',
                            },
                            width: '100%',

                        }}
                    >
                        {[...Array(8)].map((_, index_row) => (
                            [...Array(6)].map((_, index_col) => (
                                (index_row == 1 && index_col > 2 || index_row == 3 && index_col < 4 || index_row == 5 && index_col > 1) ? (
                                    <Grid
                                        key={index_col}
                                        xs={2}
                                        sx={{
                                            background: '#4472c4',
                                        }}
                                        className='labyrinth_item labyrinth_item-off'
                                    >
                                    </Grid>
                                ) : (
                                    (index_row == position.y && index_col == position.x) ? (
                                        <Grid
                                            key={index_col}
                                            xs={2}
                                            className='labyrinth_item labyrinth_item-on labyrinth_item_mario-on'
                                        >
                                            <img
                                                src={mario}
                                                className='labyrinth_item-image'
                                            />
                                        </Grid>
                                    ) : (
                                        (index_row == 0 && index_col == 4) ? (
                                            <Grid
                                                key={index_col}
                                                xs={2}
                                                className='labyrinth_item labyrinth_item-on'
                                            >
                                                <img
                                                    src={diamond}
                                                    className='labyrinth_item-image'
                                                />
                                            </Grid>
                                        ) : (
                                            <Grid
                                                key={index_col}
                                                xs={2}
                                                className='labyrinth_item labyrinth_item-on labyrinth_item_mario-off'
                                            >
                                            </Grid>
                                        )
                                    )
                                )
                            ))
                        ))}
                    </Grid>
                </Grid>
                <Grid
                    xs={6}
                    sx={{
                        width: '100%',
                    }}
                    p={1}
                    className='labyrinth-item'
                >
                    <Grid
                        xs={12}
                        sx={{
                            border: '1px solid black',
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                        }}
                        p={1}
                    >
                        <Grid>
                            <Typography
                                variant="h4"
                                className={
                                    move === 'up' ? 'text_move text_move-up ' : ''
                                }
                            >
                                Move Up
                            </Typography>
                            <Typography
                                variant="h4"
                                className={
                                    move === 'down' ? 'text_move text_move-down ' : ''
                                }
                            >
                                Move Down
                            </Typography>
                            <Typography
                                variant="h4"
                                className={
                                    move === 'left' ? 'text_move text_move-left ' : ''
                                }
                            >
                                Move Left
                            </Typography>
                            <Typography
                                variant="h4"
                                className={
                                    move === 'right' ? 'text_move text_move-right ' : ''
                                }
                            >
                                Move Right
                            </Typography>
                        </Grid>
                        <Grid
                            sx={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            {isStart ?
                                <Button
                                    variant="contained"
                                    color="error"
                                    sx={{
                                        width: '60%',
                                    }}
                                    onClick={() => isStop()}
                                    onKeyDown={(event) => marioMove(event)}
                                >
                                    Stop
                                </Button>
                                :
                                <Button
                                    variant="contained"
                                    color="success"
                                    sx={{
                                        width: '60%',
                                    }}
                                    onClick={() => isPlay()}
                                >
                                    Run
                                </Button>
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box >
    )
}

export default Labyrinth;