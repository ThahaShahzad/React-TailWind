import React, { useEffect, useState } from 'react';
import useWindowSize from '../../Util/Responsive/Size';
import MoblieNav from './sub/MoblieNav';
import WebNav from './sub/WebNav';

const Navbar: React.FC = () => {
  const [MobileView, setMobileView] = useState(false);
  const [MenuOpen, setMenuOpen] = useState(false);
  const size = useWindowSize();
  useEffect(() => {
    if (size.width > 768) setMobileView(false);
  }, [size]);

  return (
    <nav className="bg-gray-800">
      <WebNav
        MobileView={MobileView}
        setMobileView={setMobileView}
        MenuOpen={MenuOpen}
        setMenuOpen={setMenuOpen}
      />
      <MoblieNav MobileView={MobileView} />
    </nav>
  );
};

export default Navbar;
