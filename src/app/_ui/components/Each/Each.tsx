import { Children } from "react";

type Props = {
  render: Function;
  of: any[]
}

export const Each = ({ render, of }: Props) => Children.toArray(of.map((item, index) => render(item, index)));