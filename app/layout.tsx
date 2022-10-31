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
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
