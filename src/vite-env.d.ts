/// <reference types="vite/client" />

declare module 'react-responsive-masonry' {
  import * as React from 'react';
  
  export const ResponsiveMasonry: React.FC<{
    columnsCountBreakPoints?: Record<number, number>;
    children: React.ReactNode;
  }>;
  
  export const Masonry: React.FC<{
    gutter?: string;
    children: React.ReactNode;
  }>;
  
  export default Masonry;
}
