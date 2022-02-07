import * as React from 'react';
import { ToolsUsed } from '../src/components';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const ToolsPage: React.FC = () => <ToolsUsed />;

export default ToolsPage;

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
