import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

export default class Title extends Component {
    render() {
        return (
            <Typography component="div">
                <Box textAlign="center" fontWeight="fontWeightBold" fontSize="h6.fontSize" fontFamily="Arial">
                    <h1>Profile List</h1>
                </Box>
            </Typography>
        )
    }
}