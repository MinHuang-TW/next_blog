import { Header } from './';

const Layout = ({ children }) => (
  <div className='container mx-auto px-4 mb-8'>
    <Header />
    {children}
    <footer className='p-[3.75rem] text-center'>
      <small className='text-white'>{`Chunwei Hsu © ${new Date().getFullYear()}`}</small>
    </footer>
  </div>
);

export default Layout;
