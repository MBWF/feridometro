/* eslint-disable react/no-children-prop */
import {
  FormControl,
  FormHelperText,
  Input as ChakraInput,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';

import { themeFonts } from '../../styles/global';

type InputProps = {
  label: string;
  inputIcon: React.ReactNode;
  inputType: string;
  placeholder?: string;
  helperText?: string;
};

export function Input({
  label,
  inputIcon,
  placeholder,
  inputType,
  helperText,
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
        />
      </InputGroup>
      {helperText ? (
        <FormHelperText>We will never share your email.</FormHelperText>
      ) : null}
    </FormControl>
  );
}
