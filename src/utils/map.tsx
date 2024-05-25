import React from 'react';

type MapmethodProps<T> = {
    data: T[],
    children: (item: T) => React.ReactNode,
}

const Mapmethod = <T,>({ data, children }: MapmethodProps<T>) => {
  return (
    <>
      {data.map((item, index) => (
        <div key={index}>
          {children(item)}
        </div>
      ))}
    </>
  )
}

export default Mapmethod;
