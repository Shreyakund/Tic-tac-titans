import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import cartoonLogo from './path-to-your-cartoon-logo3.gif';

function Loader() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
      navigate("/choice");
    }, 6000);

    return () => clearTimeout(loadingTimeout);
  }, [navigate]);

  if (!loading) return null;

  return (
    <div className="flex justify-center items-center w-full h-full bg-[url('https://img.freepik.com/premium-vector/blank-black-rays-background-with-pattern-lines_545556-564.jpg')] bg-cover bg-center">
      <img
        src={cartoonLogo}
        alt="Loading"
        className="md:w-[600px] md:h-[500px] lg:w-[700px] lg:h-[600px] xl:w-[800px] xl:h-[700px] 2xl:w-[900px] 2xl:h-[800px]"
      />
    </div>
  );
}

export default Loader;