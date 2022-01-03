import * as React from 'react';

export interface LinkItemProps {
  href: string;
  _target?: string;
  children: React.ReactNode;
}

export interface MainLayoutProps {
  children: React.ReactNode;
}
