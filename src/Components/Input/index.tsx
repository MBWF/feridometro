/* eslint-disable react/no-children-prop */
import {
  ChakraProps,
  ChakraStyledOptions,
  FormControl,
  FormHelperText,
  Input as ChakraInput,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';

import { themeFonts } from '../../styles/global';

interface InputProps extends ChakraStyledOptions {
  inputIcon: React.ReactNode;
  inputType?: string;
  placeholder?: string;
  helperText?: string;
}

export function Input({
  inputIcon,
  placeholder,
  inputType,
  helperText,
  ...props
}: InputProps) {
  return (
    <FormControl>
      <InputGroup size="lg">
        <InputLeftElement pointerEvents="none" children={inputIcon} />
        <ChakraInput
          fontSize={themeFonts.fontSizes.smLarge}
          type={inputType}
          placeholder={placeholder}
          borderRadius={themeFonts.borderRadius.medium}
          {...props}
        />
      </InputGroup>
      {helperText ? (
        <FormHelperText>We will never share your email.</FormHelperText>
      ) : null}
    </FormControl>
  );
}
