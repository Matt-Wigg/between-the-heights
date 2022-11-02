import Nav from './nav';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <title>Between the Heights Productions</title>
        <meta
          name='description'
          content='Welcome to Between the Heights Productions'
        />
        {/* <meta name="viewport" content="width=device-width,initial-scale=1.0" /> */}
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
