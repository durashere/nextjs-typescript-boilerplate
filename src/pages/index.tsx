import { ReactElement } from 'react';

import DefaultLayout from '@/layouts/default/DefaultLayout';

const IndexPage = (): ReactElement => {
  return (
    <>
      <h1>Boilerplate</h1>
      <p>Get started</p>
    </>
  );
};

IndexPage.getLayout = (page: ReactElement): ReactElement => {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default IndexPage;
