import React, { useState } from 'react';
import Button from '../../../components/Button';
import FormDetails from '../../../components/Details';
import InputTagged from '../../../components/Input/tagged';
import { SocialsFormProps } from '../forms.type';
import './socials.style.scss';
const SocialForm = (Props: SocialsFormProps): JSX.Element => {
  const [abegTag, setAbegTag] = useState<string>('');
  const [twitter, setTwitterAccount] = useState<string>('');
  const [instagram, setInstagramAccount] = useState<string>('');

  const handleformSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //validation should be improved to give user feedback
    e.preventDefault();
    if (!abegTag) {
      return;
    }
    Props.onComplete({ data: { abegTag, twitter, instagram } });
  };
  return (
    <>
      <FormDetails
        title="Social Handles"
        description="Enter your business social media handles"
      />
      <form action="post" onSubmit={handleformSubmit} className="account">
        <div className={`inputs-div`}>
          <div className={`abeg-inputs `}>
            <InputTagged
              tag="@"
              name={'abeg'}
              label={'Choose your Abeg Tag (required)'}
              value={abegTag}
              onChange={(value: string) => {
                setAbegTag(value);
              }}
              required
              type="text"
            />
          </div>
          <div className={`social-inputs`}>
            <InputTagged
              tag="@"
              name={'instagram'}
              label={'Instagram'}
              value={instagram}
              onChange={(value: string) => {
                setInstagramAccount(value);
              }}
              required={false}
              type="text"
            />
            <InputTagged
              tag="@"
              name={'twitter'}
              label={'Twitter'}
              value={twitter}
              onChange={(value: string) => {
                setTwitterAccount(value);
              }}
              required={false}
              type="text"
            />
          </div>
        </div>
        <div className="form-footer">
          <Button variant={'primary'} type={'submit'} disabled={!abegTag}>
            Confirm Social Handles
          </Button>
        </div>
      </form>
    </>
  );
};

export default SocialForm;
