import { Header } from './';

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
    <footer className='p-[3.75rem] text-center'>
      <small className='text-white'>{`Chunwei Hse © ${new Date().getFullYear()}`}</small>
    </footer>
  </>
);

export default Layout;
