import React from 'react';
import { PageProps } from './page.props';
import styles from './page.module.scss';
import Box from '@mui/material/Box';

const Page: React.FC<PageProps> = ({ title, children }) => {
   return (
      <Box className={styles.root}>
         <Box component="header" className={styles.header}>
            <h1 className={styles.title}>{title}</h1>
         </Box>

         <Box component="main">{children}</Box>

         <Box component="footer" className={styles.footer}>
            <Box component="span" className={styles.copyright}>
               <a rel="noreferrer" target="_blank" href="https://www.codica.com">
                  &copy; Codica {new Date().getFullYear()}
               </a>
            </Box>
            <Box component="span" className={styles.developer}>
               <a rel="noreferrer" target="_blank" href="https://github.com/neytrowd">
                  Made with ❤️ by neyt
               </a>
            </Box>
         </Box>
      </Box>
   );
};

export default Page;
