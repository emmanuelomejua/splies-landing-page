import React, { FC, useState } from 'react';

type INavBtn = {
  isActive?: string;
};

const SubMenu: FC<INavBtn> = ({ isActive }) => {
  const names = ['Quarterly', 'Biannually', 'Annually'];
  const [active, setActive] = useState<string>(isActive || names[0]);

  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-10 border-b w-[436px]">
        {names.map((name) => (
          <div
            key={name}
            className="flex flex-col gap-6 items-center cursor-pointer relative px-7"
            onClick={() => setActive(name)}
          >
            <span
              className={`text-[14px] font-semibold ${
                active === name ? 'text-Green' : 'text-[#9AA2A5]'
              }`}
            >
              {name}
            </span>
            {active === name && (
              <div className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-green-700" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubMenu;
