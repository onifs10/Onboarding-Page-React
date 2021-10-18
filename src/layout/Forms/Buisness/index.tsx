import { useState } from 'react';
import Button from '../../../components/Button';
import FormDetails from '../../../components/Details';
import RadioInputs from '../../../components/RadioInputGroup';
import { RadioInputType } from '../../../components/RadioInputGroup/radio.type';
import SelectInput from '../../../components/Select';
import { SelectOption } from '../../../components/Select/select.type';
import { BuisnessFormProps, POSType } from '../forms.type';
import './buisness.style.scss';

const Options: RadioInputType[] = [
  {
    value: POSType.Yes,
    label: 'Yes',
  },
  {
    value: POSType.No,
    label: 'No',
  },
];

const BuisnessOptions: SelectOption[] = [
  {
    label: 'Sole Proprietorship',
    value: 'sole',
  },
  {
    label: 'Partnership',
    value: 'partner',
  },
];
const categoryOptions: SelectOption[] = [
  {
    label: 'Category A',
    value: 'sole',
  },
  {
    label: 'Category B',
    value: 'partner',
  },
];

const BuisnessForm = (Props: BuisnessFormProps): JSX.Element => {
  const [buisnessType, setBusinessType] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [pos, setPos] = useState<POSType>(POSType.Yes);

  const handleformSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //validation should be improved to give user feedback
    e.preventDefault();
    if (!buisnessType || !category) {
      return;
    }
    Props.onComplete({ data: { buisnessType, pos, category } });
  };
  return (
    <>
      <FormDetails title="Business Category" />
      <form action="post" onSubmit={handleformSubmit} className="account">
        <div className={`inputs-div`}>
          <div className="select-options">
            <SelectInput
              name={'type'}
              label={'Type of your business'}
              value={buisnessType}
              onChange={(value: string) => {
                setBusinessType(value);
              }}
              required={true}
              options={BuisnessOptions}
            />
            <SelectInput
              name={'category'}
              label={'Business Category'}
              value={category}
              onChange={(value: string) => {
                setCategory(value);
              }}
              required={true}
              options={categoryOptions}
            />
          </div>
          <div className="radio-inputs">
            <RadioInputs
              inputs={Options}
              name={'pos-use'}
              default={POSType.Yes}
              label={'Do you use POS machines for your business?'}
              onChange={(value) => setPos(value as POSType)}
              required
            />
          </div>
        </div>
        <div className="form-footer">
          <Button
            variant={'primary'}
            type={'submit'}
            disabled={!buisnessType || !category}
          >
            Complete
          </Button>
        </div>
      </form>
    </>
  );
};

export default BuisnessForm;
