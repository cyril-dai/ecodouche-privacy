import { useTranslation } from 'react-i18next';

import './Content.scss';

const Content = () => {
  const { t } = useTranslation();

  return (
    <div className="grid gap-8 p-2">
      <h1>{t('Privacy Policy.Title')}</h1>
      <section>
        <h2>{t('Privacy Policy.Introduction.Title')}</h2>
        <p>{t('Privacy Policy.Introduction.Text')}</p>
      </section>

      <section className="grid gap-2">
        <h2>{t('Privacy Policy.Information Collection.Title')}</h2>
        <div>
          <h3>{t('Privacy Policy.Information Collection.Data Collected.Title')}</h3>
          <p>{t('Privacy Policy.Information Collection.Data Collected.Text')}</p>
        </div>
        <div>
          <h3>{t('Privacy Policy.Information Collection.Data Usage.Title')}</h3>
          <p>{t('Privacy Policy.Information Collection.Data Usage.Text')}</p>
        </div>
      </section>

      <section>
        <h2>{t('Privacy Policy.Cookies and Similar Technologies.Title')}</h2>
        <p>{t('Privacy Policy.Cookies and Similar Technologies.Text')}</p>
      </section>

      <section>
        <h2>{t('Privacy Policy.Data Sharing.Title')}</h2>
        <p>{t('Privacy Policy.Data Sharing.Text')}</p>
      </section>

      <section>
        <h2>{t('Privacy Policy.Data Security.Title')}</h2>
        <p>{t('Privacy Policy.Data Security.Text')}</p>
      </section>

      <section>
        <h2>{t('Privacy Policy.Changes to This Privacy Policy.Title')}</h2>
        <p>{t('Privacy Policy.Changes to This Privacy Policy.Text')}</p>
      </section>

      <section className="whitespace-pre-line">
        <h2>{t('Privacy Policy.Contact Us.Title')}</h2>
        <p>{t('Privacy Policy.Contact Us.Text')}</p>
      </section>
    </div>
  );
};

export default Content;
