import React from 'react';

export interface PageProps extends React.ComponentProps<'div'> {
   title: string;
   children: React.ReactNode;
}
