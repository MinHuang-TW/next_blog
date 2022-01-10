import { Header } from './';

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
    <footer className='p-[3.75rem] text-center'>
      <small className='text-white'>{`Chunwei Hsu © ${new Date().getFullYear()}`}</small>
    </footer>
  </>
);

export default Layout;
