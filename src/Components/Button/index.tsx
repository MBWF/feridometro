import { Button } from '@chakra-ui/react';

interface ButtonRedirectProps {
  text: string;
  bgColor?: string;
  color?: string;
  border?: string;
  width?: string;
}

export function ButtonRedirect({
  text,
  bgColor = 'transparent',
  color = 'blue.500',
  border = '1px solid gray',
  width,
}: ButtonRedirectProps) {
  return (
    <>
      <Button
        bgColor={bgColor}
        padding="0rem 1rem"
        border={border}
        borderRadius="full"
        color={color}
        fontSize="0.8rem"
        width={width}
      >
        {text}
      </Button>
    </>
  );
}
