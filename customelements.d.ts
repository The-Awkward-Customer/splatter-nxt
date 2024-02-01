// custom-elements.d.ts
declare namespace JSX {
  interface IntrinsicElements {
    "spline-viewer": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      // Define any custom properties here. For example:
      url?: string;
      // Add other attributes here
    };
  }
}
