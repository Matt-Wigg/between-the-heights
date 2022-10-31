import Link from 'next/link';

const data = {
  nav: [
    {
      id: 1,
      label: 'Between The Heights Productions',
      url: '/',
    },
    {
      id: 2,
      label: 'About',
      url: '/about',
    },
    {
      id: 3,
      label: 'Productions',
      url: '/productions',
    },
    {
      id: 4,
      label: 'News',
      url: '/news',
    },
    {
      id: 5,
      label: 'Contact',
      url: '/contact',
    },
    {
      id: 6,
      label: 'Socials',
      url: '/socials',
    },
  ],
};

export default function Nav() {
  return (
    <nav>
      <ul>
        {data.nav.map((item) => (
          <li key={item.id}>
            <Link href={item.url}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
