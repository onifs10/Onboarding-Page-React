import { useState } from 'react';
import Button from '../../../components/Button';
import BvnInfo from '../../../components/BvnInfo';
import FormDetails from '../../../components/Details';
import Input from '../../../components/Input';
import RadioInputs from '../../../components/RadioInputGroup';
import { RadioInputType } from '../../../components/RadioInputGroup/radio.type';
import { AccountVerificationProps, VerificationMethod } from '../forms.type';
import './account.style.scss';

const Options: RadioInputType<VerificationMethod>[] = [
  {
    value: VerificationMethod.BVN,
    label: 'BVN',
  },
  {
    value: VerificationMethod.PA,
    label: 'Personal Account Number',
  },
];

const VerifyAccount = (Props: AccountVerificationProps): JSX.Element => {
  const [method, setMethod] = useState<VerificationMethod>(
    VerificationMethod.BVN
  );
  const [bvnNumber, setBvnNumber] = useState<string>('');
  const [accountNumber, setAccount] = useState<string>('');
  const [bank, setBank] = useState<string>('');

  const [showInputs, setShowInputs] = useState<boolean>(true);

  const handleChangeMethod = (value: VerificationMethod) => {
    setShowInputs((value) => !value);
    setTimeout(() => {
      setMethod(value);
      setShowInputs((value) => !value);
    }, 1100);
  };

  return (
    <>
      <FormDetails title="Verify Account" />
      <form
        action="post"
        onSubmit={(e) => e.preventDefault()}
        className="account"
      >
        <RadioInputs
          name="method"
          inputs={Options}
          onChange={handleChangeMethod}
          label={'Select a verification method'}
          default={VerificationMethod.BVN}
        />
        <div className={`inputs-div ${showInputs ? 'show' : 'hide'}`}>
          <div
            className={`bvn-inputs ${
              method === VerificationMethod.BVN ? 'show' : 'hide'
            }`}
          >
            <Input
              name={'bvn'}
              label={'Bank Verification Number (11-digits)'}
              value={bvnNumber}
              onChange={(value: string) => {
                setBvnNumber(value);
              }}
              required={method === VerificationMethod.BVN}
            />
            <BvnInfo />
          </div>
          <div
            className={`pa-inputs ${
              method === VerificationMethod.PA ? 'show' : 'hide'
            }`}
          >
            <Input
              name={'account'}
              label={'Account Number'}
              value={accountNumber}
              onChange={(value: string) => {
                setAccount(value);
              }}
              required={method === VerificationMethod.PA}
            />
            <Input
              name={'bank'}
              label={'Select Bank'}
              value={bank}
              onChange={(value: string) => {
                setBank(value);
              }}
              required={method === VerificationMethod.PA}
            />
          </div>
        </div>
        <div className="form-footer">
          <Button variant={'primary'} type={'submit'}>
            Continue
          </Button>
        </div>
      </form>
    </>
  );
};

export default VerifyAccount;
