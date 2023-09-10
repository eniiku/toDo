import { useState } from 'react';
import { ClassNames, DayPicker } from 'react-day-picker';
import styles from 'react-day-picker/dist/style.module.css';

const Actions = () => {
  const [selected, setSelected] = useState<Date>();

  const classNames: ClassNames = {
    ...styles,
    // root: 'custom-root',
  };

  console.log(selected);
  return (
    <div>
      <DayPicker
        mode='single'
        selected={selected}
        classNames={classNames}
        onSelect={setSelected}
        showOutsideDays
      />
    </div>
  );
};

export default Actions;
