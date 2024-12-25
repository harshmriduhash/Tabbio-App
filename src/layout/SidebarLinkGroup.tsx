import { useState } from 'react';

const SidebarLinkGroup = ({children, activeCondition}:any) => {
  const [open, setOpen] = useState(activeCondition);

  const handleClick = () => {
    setOpen(!open);
  };

  return <li>{children(handleClick, open)}</li>;
};

export default SidebarLinkGroup;
