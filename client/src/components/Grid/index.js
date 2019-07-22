import React from 'react';

//  This will be a container component
export function Container({ fluid, children }) {
    return <div className={`container${fluid ? '-fluid' : ''}`}>{children}</div>
}

// This is a row component
export function Row({ fluid, children }) {
return <div className={`row${fluid ? '-fluid' : ''}`}>{children}</div>
}

// This will be a col component
export function Col({ size, children }) {
    return (
        <div
        className={size
        .split(' ')
        .map(size => 'col ' + size)
        .join(' ')}
    >
        {children}
    </div>
    );
}

