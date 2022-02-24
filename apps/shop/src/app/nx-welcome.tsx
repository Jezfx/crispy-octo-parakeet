import { Button, Chip } from '@allplants/shared/ui';

const icon = (
  <svg
    height="14"
    role="img"
    viewBox="0 0 40 40"
    width="14"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M39.31 1.44A5 5 0 0035.2.52c-2.34.55-4 2.74-4.69 3.75a8.86 8.86 0 00-7.3-.84c-3.28 1.08-6.34 4.24-8.21 8.45-.79 1.8-1.45 3.72-2.09 5.58A63.72 63.72 0 0110.42 24c-3.15 6.58-4.5 9.12-9.68 13.87a1 1 0 00-.24 1.07 1.05 1.05 0 001 .66c15.38-.37 26.17-12.4 29.12-16.08l.13-.17c3-3.76 4.7-7.17 5-10.2a.64.64 0 00.06-.31v-.09a9.11 9.11 0 00-.1-2.1 8.91 8.91 0 00-4.09-5.76c.59-.88 2-2.76 3.93-3.2a3.81 3.81 0 013.16.73.6.6 0 00.68-1zm-9.5 21.16l-.14.17C26.84 26.31 16.55 37.79 2 38.38c5-4.66 6.41-7.3 9.55-13.91a63.27 63.27 0 002.56-6.62c.64-1.83 1.29-3.73 2.06-5.49a15.39 15.39 0 015.43-6.79 6.57 6.57 0 006.66 3.51 6.37 6.37 0 006 4.5h.23q-.6 3.97-4.68 9.02zm4.64-11.73a8.11 8.11 0 01.11 1.49 5.25 5.25 0 01-5.34-4.07.59.59 0 00-.68-.46A5.36 5.36 0 0122.59 5a7.79 7.79 0 011-.41 7.36 7.36 0 012.31-.38 8.36 8.36 0 014.2 1.22c2.48 1.4 3.9 3.24 4.35 5.44zm-4.11 6.83l-.77 1.3a.59.59 0 01-.51.29.62.62 0 01-.32-.09.6.6 0 01-.2-.82l.78-1.27a.59.59 0 01.82-.2.6.6 0 01.2.79zM27.77 21a.58.58 0 01.08.84 88.44 88.44 0 01-7.41 8 .62.62 0 01-.4.15.57.57 0 01-.45-.2.59.59 0 01.05-.84A91.87 91.87 0 0026.93 21a.59.59 0 01.84 0z"
      fill="currentColor"
    ></path>
  </svg>
);

export function NxWelcome({ title }: { title: string }) {
  return (
    <>
      <Button>text</Button>
      <br />
      <br />
      <Button variant="contained">contained</Button>
      <br />
      <br />
      <Button variant="outlined">contained</Button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Chip label="primary" color="primary" />
      <br />
      <br />
      <Chip icon={icon} label="With Icon" color="secondary" />
    </>
  );
}

export default NxWelcome;
