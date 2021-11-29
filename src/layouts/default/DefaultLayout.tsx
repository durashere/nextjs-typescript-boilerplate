import { ReactElement } from 'react';

import DefaultFooter from '@/layouts/default/DefaultFooter';
import DefaultHeader from '@/layouts/default/DefaultHeader';

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout = ({ children }: DefaultLayoutProps): ReactElement => {
  return (
    <>
      <DefaultHeader />
      <main>{children}</main>
      <DefaultFooter />
    </>
  );
};

export default DefaultLayout;
