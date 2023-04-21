
import { signOut } from 'firebase/auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../Fiebase.init';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut(auth)
      .then(() => {
        navigate('/');
        toast.success("User SignOut Successfully", { position: "top-left" });
      })
  }
  return (
    <div className="h-[80vh] overflow-hidden">
      <div className="navbar bg-base-200 border-b border-neutral">
        <div className="flex justify-between items-center gap-3 flex-1">
          <h3 style={{ fontFamily: "Rajdhani" }} className="font-bold text-neutral rounded-xl py-1 text-xl md:text-3xl tracking-[3px] lg:tracking-[10px] px-5 md:px-12">
            <span className="text-primary">Dashboard</span>
          </h3>
          <button className='bg-gradient-to-tr from-primary to-secondary px-5 text-sm md:text-md md:px-10 py-2 rounded-xl font-bold' onClick={handleSignOut}>Sign Out</button>
        </div>
      </div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="bg-base-100 drawer-content">
          <h3 className="text-5xl font-bold pt-32">Hello World !</h3>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;