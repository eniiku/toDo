import generateListOfDays from '../utils/generateListOfDays';

const Panel = () => {
  const { month, year, daysList } = generateListOfDays();
  const currentDate = new Date().getDate();

  return (
    <div className='my-8 mb-4 w-inherit overflow-hidden'>
      <h3
        className='font-inter text-[0.79631rem] font-semibold leading-[150%] text-gray-900 mb-[0.8rem] 
        md:font-work-sans md:text-base'
      >{`${month} ${year}`}</h3>

      <ul className='flex gap-4 md:gap-[0.8rem]'>
        {daysList.slice(0, 13).map((date, index) => (
          <li
            key={`${date.weekday}${index}`}
            className={`${
              date.day === currentDate
                ? 'bg-primary-blue text-white'
                : 'bg-white text-gray-700'
            } border border-gray-300 py-[0.62rem] px-[0.79rem] text-alt-sm rounded-lg font-semibold text-center
              text-alt-sm w-full max-w-[3.085rem] md:px-4 md:max-w-[3.875rem]`}
          >
            <p>{date.weekday.slice(0, 3)}</p>

            <p className='mt-2'>{date.day}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Panel;
