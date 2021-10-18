import { useState } from 'react';
import Button from '../../../components/Button';
import BvnInfo from '../../../components/BvnInfo';
import FormDetails from '../../../components/Details';
import Input from '../../../components/Input';
import RadioInputs from '../../../components/RadioInputGroup';
import { RadioInputType } from '../../../components/RadioInputGroup/radio.type';
import SelectInput from '../../../components/Select';
import { SelectOption } from '../../../components/Select/select.type';
import { AccountVerificationProps, VerificationMethod } from '../forms.type';
import './account.style.scss';

const Options: RadioInputType[] = [
  {
    value: VerificationMethod.BVN,
    label: 'BVN',
  },
  {
    value: VerificationMethod.PA,
    label: 'Personal Account Number',
  },
];

const Banks: SelectOption[] = [
  {
    label: 'Guaranty Trust Bank',
    value: 'GTB',
  },
  {
    label: 'First Bank',
    value: 'FB',
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

  const handleChangeMethod = (value: string | number) => {
    setShowInputs((value) => !value);
    setTimeout(() => {
      setMethod(+value as VerificationMethod);
      setShowInputs((value) => !value);
    }, 1100);
  };

  const buttonDisabled =
    (method === VerificationMethod.BVN && +String(bvnNumber).length < 11) ||
    (method === VerificationMethod.PA && (!bank || !accountNumber));
  const handleformSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //validation should be improved to give user feedback
    if (buttonDisabled) {
      return;
    }
    e.preventDefault();
    Props.onComplete &&
      Props.onComplete({ data: { bvnNumber, accountNumber, bank } });
  };

  return (
    <>
      <FormDetails title="Verify Account" />
      <form action="post" onSubmit={handleformSubmit} className="account">
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
                if (isNaN(+value) || value.length > 11) {
                  return;
                }
                setBvnNumber(value);
              }}
              required={method === VerificationMethod.BVN}
              type="text"
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
                if (isNaN(+value)) {
                  return;
                }
                setAccount(value);
              }}
              required={method === VerificationMethod.PA}
              type="text"
            />
            <SelectInput
              name={'bank'}
              label={'Select Bank'}
              value={bank}
              onChange={(value: string) => {
                setBank(value);
              }}
              required={method === VerificationMethod.PA}
              options={Banks}
            />
          </div>
        </div>
        <div className="form-footer">
          <Button variant={'primary'} type={'submit'} disabled={buttonDisabled}>
            Continue
          </Button>
        </div>
      </form>
    </>
  );
};

export default VerifyAccount;
