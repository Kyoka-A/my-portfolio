// Global JSX type definitions
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
    interface Element extends any {}
  }
  
  namespace React {
    type ReactNode = any;
  }
}

declare module 'react' {
  namespace React {
    type ReactNode = any;
  }
  const React: {
    ReactNode: any;
  };
  export default React;
}

declare module 'react/jsx-runtime' {
  export function jsx(type: any, props: any, key?: any): any;
  export function jsxs(type: any, props: any, key?: any): any;
  export const Fragment: any;
}

declare module 'next' {
  export interface Metadata {
    title?: string;
    description?: string;
  }
}

export {};
