import FormDetails from '../Details';
import { AccountVerificationProps } from '../forms.type';

const VerifyAccount = (Props: AccountVerificationProps): JSX.Element => {
  return (
    <>
      <FormDetails title="Verify Account" />
      <form
        action="post"
        onSubmit={(e) => e.preventDefault}
        className="account"
      ></form>
    </>
  );
};

export default VerifyAccount;
