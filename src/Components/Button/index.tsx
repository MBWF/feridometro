import { Button } from '@chakra-ui/react';

export function ButtonRedirect({ text }: { text: string }) {
  return (
    <>
      <Button
        bgColor="transparent"
        padding="0rem 1rem"
        border="1px solid gray"
        borderRadius="full"
        color="blue.500"
        fontSize="0.8rem"
      >
        {text}
      </Button>
    </>
  );
}
