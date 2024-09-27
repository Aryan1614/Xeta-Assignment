import React from 'react';
import { CgProfile } from 'react-icons/cg';
import * as Icons from 'react-icons/md';
import { matchPath, NavLink, useLocation } from 'react-router-dom';

function SideBarLinks({link,IconName}) {

    const Icon = Icons[IconName];
    const location = useLocation();

    const matchRoute = (route) => {
        return matchPath({path:route},location.pathname);
    }

  return (
    <NavLink to={link?.Path} className={`flex items-center gap-x-4 ${matchRoute(link?.Path) ? "text-[#FAA057]" : ""}`}>
        <CgProfile />
        <p>{link?.name}</p>
    </NavLink>
  )
}

export default SideBarLinks;
