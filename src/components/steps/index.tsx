import React from 'react';
import './steps.style.scss';

export function Steps({
    current,
    length,
}: {
    current: number;
    length: number;
}): JSX.Element {
    return (
        <div className="steps">
            Step {current}/{length}
        </div>
    );
}
