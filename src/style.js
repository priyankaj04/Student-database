import * as React from 'react';
import { styled } from "@mui/material/styles/index";

export default styled(() => ({
        appBar: `
                borderRadius: 15,
                margin: 30px 0,
                display: flex,
                flexDirection: column,
                justifyContent: center,
                alignItems: center,
        `,
        heading: {
                borderRadius: 15,
                margin: '30px 0',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
        }
}))