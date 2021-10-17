import * as React from 'react';

export const LockIcon = (): JSX.Element => {
  return (
    <svg width={18} height={18} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.25 6v-.75a3.75 3.75 0 117.5 0V6A2.25 2.25 0 0115 8.25v6a2.25 2.25 0 01-2.25 2.25h-7.5A2.25 2.25 0 013 14.25v-6A2.25 2.25 0 015.25 6zm1.5-.75a2.25 2.25 0 014.5 0V6h-4.5v-.75z"
        fill="#5257F5"
      />
      <path
        d="M9.75 11.8a1.5 1.5 0 10-1.5 0v.95a.75.75 0 001.5 0v-.95z"
        fill="#56F2C3"
      />
    </svg>
  );
};

export const CheckIcon = (): JSX.Element => {
  return (
    <svg width={8} height={6} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.207.927L2.354 5.78 0 3.427l.707-.707 1.647 1.646L6.5.22l.707.707z"
        fill="#56F2C3"
      />
    </svg>
  );
};

export function DropIcon(): JSX.Element {
  return (
    <svg width={8} height={4} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1 3.5l3-3 3 3"
        stroke="#5257F5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
