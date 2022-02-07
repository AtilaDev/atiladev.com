import * as React from 'react';
import { Iam, Contact } from '../src/components';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const IndexPage: React.FC = () => (
  <>
    <Iam />
    <Contact />
  </>
);

export default IndexPage;

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
