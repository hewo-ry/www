import type { Metadata } from 'next';
import { ReactNode } from 'react';

import './globals.css';

export const metadata: Metadata = {
    title: 'Herwannan Vapaaohjelmoijat Ry',
    // TODO: update
    description:
        'Olemme Herwannan Vapaaohjelmoijat Ry (Hewo), kuten nimestä voi päätellä yhdistyksen "koti" on Tampereen ' +
        'Hervannassa ja yhdistyksemme toimiala on ohjelmointi ja IT-palvelut.',
};

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => (
    <html lang='fi'>
        <body>{children}</body>
    </html>
);

export default RootLayout;
