export interface FormsProps {
  onComplete: () => void;
}

export interface AccountVerificationProps extends FormsProps {}

export enum VerificationMethod {
  BVN = 1,
  PA = 2,
}
