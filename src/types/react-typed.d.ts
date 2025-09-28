declare module "react-typed" {
  import { Component } from "react";

  interface TypedProps {
    strings: string[];
    typeSpeed?: number;
    backSpeed?: number;
    loop?: boolean;
    startDelay?: number;
    backDelay?: number;
    smartBackspace?: boolean;
    showCursor?: boolean;
    cursorChar?: string;
    className?: string;
  }

  export default class Typed extends Component<TypedProps> {}
}
