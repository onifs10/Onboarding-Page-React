export interface FormsProps {
  onComplete: (arg: { data: object }) => void;
}

export interface AccountVerificationProps extends FormsProps {}
export interface SocialsFormProps extends FormsProps {}
export interface BuisnessFormProps extends FormsProps {}

export enum VerificationMethod {
  BVN = 1,
  PA = 2,
}

export enum POSType {
  Yes = 1,
  No = 2,
}
