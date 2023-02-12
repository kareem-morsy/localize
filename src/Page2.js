import { Link } from 'react-router-dom';
import { Trans, withTranslation } from 'react-i18next';

const Page2 = () => {
  // const { t } = useTranslation();
  return(
    <>
      <div className='body'>
        <p><Trans>this-is-page2</Trans></p>
        <p>Go to <Link to='/'>the home page</Link></p>
      </div>
    </>
  )
};

export default withTranslation()(Page2);
