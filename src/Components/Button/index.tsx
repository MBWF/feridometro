import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

interface ButtonRedirectProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  link: string;
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
  link,
  width,
  ...props
}: ButtonRedirectProps) {
  return (
    <>
      <Link to={link}>
        <Button
          borderRadius="full"
          padding="0rem 1rem"
          fontSize="0.8rem"
          bgColor={bgColor}
          border={border}
          width={width}
          color={color}
          {...props}
        >
          {text}
        </Button>
      </Link>
    </>
  );
}
