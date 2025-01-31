import type { Metadata } from 'next';
import { ReactNode } from 'react';

import './globals.css';

export const metadata: Metadata = {
    title: 'Herwannan Vapaaohjelmoijat Ry',
    description: 'Herwannan Vapaaohjelmoijat Ry',
};

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => (
    <html lang='fi'>
        <body>{children}</body>
    </html>
);

export default RootLayout;
