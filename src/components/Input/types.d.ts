export interface IInputProps extends React.ComponentPropsWithoutRef<"input"> {
  label: string;
  error?: string;
}

export type InputProps = IInputProps &
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
