export interface ITextAreaProps
  extends React.ComponentPropsWithoutRef<"textarea"> {
  label: string;
  error?: string;
}

export type TextAreaProps = IInputProps &
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
