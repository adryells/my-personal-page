declare module 'react-helmet-async' {
  import * as React from 'react';
  export interface HelmetProps {
    children?: React.ReactNode;
    htmlAttributes?: Record<string, string>;
    // Generic props like title, meta, link etc. are usually passed as children in our code,
    // but we declare a catch-all to avoid TS errors when using extra properties.
    [key: string]: any;
  }
  export class Helmet extends React.Component<HelmetProps> {}
  export class HelmetProvider extends React.Component<{ children: React.ReactNode }> {}
}
