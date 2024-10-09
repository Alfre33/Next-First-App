import { NavBar } from '../../components/navbar/NavBar';

export default function GeneralLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div className='flex flex-col text-center'>
        <NavBar/>
      <h1 className='my-5 text-xl'>Hello from Layout General</h1>
      {children}
    </div>
  );
}