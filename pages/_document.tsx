import { Html, Head, Main, NextScript} from 'next/document';
import React from 'react';

const Document = () => (
    <Html>
        <Head>
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@900&display=swap" rel="stylesheet"/>
        </Head>
        <body className="font-raleway">
            <Main />
            <NextScript />
        </body>
    </Html>
);

export default Document;