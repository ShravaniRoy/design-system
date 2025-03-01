import { ReactNode } from "react";
import { RadioGroupProps as StatelyRadioGroupProps } from "@react-stately/radio";
import { Orientation } from "@react-types/shared";
import { AriaRadioProps } from "@react-aria/radio";

export type RadioProps = {
  value: string;
  children?: ReactNode;
  isDisabled?: boolean;
} & AriaRadioProps;

export type RadioGroupProps = {
  /** The list of Radio components. */
  children: React.ReactNode;
  orientation?: Orientation;
  /** The current value (controlled). */
  value?: string;
  /** The default value (uncontrolled). */
  defaultValue?: string;
  /** Handler that is called when the value changes. */
  onChange?: (value: string) => void;
  /** The gap between the Radio components. */
  UNSAFE_gap?: string;
} & StatelyRadioGroupProps &
  React.HTMLAttributes<HTMLDivElement>;
