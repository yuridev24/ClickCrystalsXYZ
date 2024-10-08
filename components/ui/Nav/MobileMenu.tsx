'use client';

import { motion } from 'framer-motion';
import { Title } from './Title';
import MobileMenuNav from './MobileMenuNav';
import { links } from './Nav';
import { useState } from 'react';

const MenuOverlay = () => {
  const [active, setActive] = useState(false);

  return (
    <motion.div
      className={`${active && 'h-screen top-0 left-0 fixed'} md:hidden w-full z-[999] flex flex-col py-3 px-2`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      style={{
        background: "url('/textures/obsidian.png')",
        backgroundRepeat: 'repeat',
        imageRendering: 'pixelated',
        backgroundSize: '32px',
      }}
    >
      <div className="flex flex-row justify-between pl-2 pr-4">
        <Title />
        <MobileMenuNav state={active} handler={setActive} />
      </div>
      {active && (
        <ul className="flex flex-col items-center justify-center px-4 h-screen overflow-y-scroll">
          {links.map((link: any, index: any) => (
            <motion.li
              key={index}
              className="text-xl mb-4"
              initial={{ opacity: 0, rotate: index % 2 === 0 ? -90 : 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.3, delay: index * 0.2 }}
            >
              {link}
            </motion.li>
          ))}
        </ul>
      )}
    </motion.div>
  );
};

export default MenuOverlay;
