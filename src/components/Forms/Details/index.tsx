import { FormDetailsProp } from './details.type';
import './details.style.scss';

const FormDetails = (Props: FormDetailsProp): JSX.Element => {
  return (
    <>
      <div className={`form-title ${Props.description ? 'm' : ''}`}>
        {Props.title}
      </div>
      {Props.description ? (
        <div className="form-description">{Props.description}</div>
      ) : null}
    </>
  );
};

export default FormDetails;
