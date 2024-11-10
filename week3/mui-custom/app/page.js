'use client';

import { Button, Pagination, styled } from "@mui/material";
import styles from './page.module.css';

const RedButton = styled(Button)(({ theme }) => {
    return ({
        backgroundColor: 'yellow'
    });
});

export default function Home() {
    return (
        <div className={styles.container}>
            <button style={{ backgroundColor: 'yellow' }}>Hello button</button>
            <Button sx={{
                width: 300,
                backgroundColor: 'yellow'
            }}>Hello button</Button>
            <Pagination count={10} color="primary" sx={{
                // backgroundColor: 'red'
                '& .MuiButtonBase-root.MuiPaginationItem-root.Mui-selected': {
                    backgroundColor: 'red'
                }
            }} />
            <RedButton>Red Button</RedButton>
        </div>
    );
}
