import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

const LanguageSwitcher = () => {
  const router = useRouter();
  const { t } = useTranslation('common');

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <select 
      onChange={changeLanguage}
      value={router.locale}
      className="bg-transparent text-white border border-white rounded px-2 py-1"
    >
      <option value="it">Italiano</option>
      <option value="en">English</option>
    </select>
  );
};

export default LanguageSwitcher; 