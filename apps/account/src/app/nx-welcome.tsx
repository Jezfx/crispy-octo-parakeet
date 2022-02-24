import { Button } from '@allplants/shared/ui';

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
    </>
  );
}

export default NxWelcome;
