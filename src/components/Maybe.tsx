import React from 'react';

export interface MaybeProps {
  test: boolean;
  children: JSX.Element;
}

const Maybe = ({ test, children }: MaybeProps) => {
  return <>{test ? children : null}</>;
};

export default Maybe;
