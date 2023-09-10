const Navbar = () => {
  return (
    <nav className='border-b border-primary-gray-100 padding-x'>
      <div className='max-container flex justify-between items-center py-[1.2rem] md:py-[1.5rem]'>
        <h3 className='font-inter text-2xl font-bold'>ToDo</h3>

        <button className='md:hidden'>
          <svg
            width='40'
            height='41'
            viewBox='0 0 40 41'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect y='0.5' width='40' height='40' rx='8' fill='white' />
            <path
              d='M11 20.5H23M11 14.5H29M11 26.5H29'
              stroke='#667085'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>

        {/* *ul* shows on devices with width > 768px */}
        <ul className='hidden md:flex items-center gap-1'>
          <li>
            {/* Settings svg */}
            <svg
              width='40'
              height='40'
              viewBox='0 0 40 40'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect width='40' height='40' rx='6' fill='white' />
              <g clipPath='url(#clip0_17_12323)'>
                <path
                  d='M20.0001 22.5C21.3808 22.5 22.5001 21.3807 22.5001 20C22.5001 18.6193 21.3808 17.5 20.0001 17.5C18.6194 17.5 17.5001 18.6193 17.5001 20C17.5001 21.3807 18.6194 22.5 20.0001 22.5Z'
                  stroke='#667085'
                  strokeWidth='1.66667'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M25.6061 22.2727C25.5053 22.5012 25.4752 22.7547 25.5198 23.0004C25.5643 23.2462 25.6815 23.473 25.8561 23.6515L25.9016 23.697C26.0425 23.8377 26.1542 24.0048 26.2305 24.1887C26.3067 24.3727 26.346 24.5698 26.346 24.7689C26.346 24.968 26.3067 25.1652 26.2305 25.3491C26.1542 25.5331 26.0425 25.7002 25.9016 25.8409C25.7609 25.9818 25.5938 26.0935 25.4098 26.1698C25.2259 26.246 25.0287 26.2853 24.8296 26.2853C24.6305 26.2853 24.4334 26.246 24.2494 26.1698C24.0655 26.0935 23.8984 25.9818 23.7577 25.8409L23.7122 25.7954C23.5337 25.6208 23.3069 25.5036 23.0611 25.4591C22.8154 25.4145 22.5619 25.4446 22.3334 25.5454C22.1093 25.6415 21.9183 25.8009 21.7836 26.0042C21.649 26.2074 21.5768 26.4456 21.5758 26.6894V26.8182C21.5758 27.22 21.4162 27.6054 21.1321 27.8895C20.8479 28.1737 20.4625 28.3333 20.0607 28.3333C19.6588 28.3333 19.2735 28.1737 18.9893 27.8895C18.7052 27.6054 18.5455 27.22 18.5455 26.8182V26.75C18.5397 26.4992 18.4585 26.256 18.3126 26.052C18.1667 25.848 17.9628 25.6926 17.7274 25.6061C17.4989 25.5052 17.2454 25.4751 16.9996 25.5197C16.7539 25.5642 16.5271 25.6814 16.3486 25.8561L16.3031 25.9015C16.1624 26.0424 15.9953 26.1541 15.8114 26.2304C15.6274 26.3066 15.4303 26.3459 15.2311 26.3459C15.032 26.3459 14.8349 26.3066 14.6509 26.2304C14.467 26.1541 14.2999 26.0424 14.1592 25.9015C14.0183 25.7608 13.9065 25.5937 13.8303 25.4097C13.754 25.2258 13.7148 25.0287 13.7148 24.8295C13.7148 24.6304 13.754 24.4333 13.8303 24.2493C13.9065 24.0654 14.0183 23.8983 14.1592 23.7576L14.2046 23.7121C14.3793 23.5336 14.4964 23.3068 14.541 23.061C14.5856 22.8153 14.5555 22.5618 14.4546 22.3333C14.3586 22.1093 14.1991 21.9182 13.9959 21.7836C13.7926 21.649 13.5545 21.5767 13.3107 21.5757H13.1819C12.7801 21.5757 12.3947 21.4161 12.1105 21.132C11.8264 20.8478 11.6667 20.4624 11.6667 20.0606C11.6667 19.6588 11.8264 19.2734 12.1105 18.9892C12.3947 18.7051 12.7801 18.5454 13.1819 18.5454H13.2501C13.5008 18.5396 13.744 18.4584 13.948 18.3125C14.152 18.1666 14.3074 17.9627 14.394 17.7273C14.4949 17.4988 14.5249 17.2453 14.4804 16.9995C14.4358 16.7538 14.3187 16.527 14.144 16.3485L14.0986 16.303C13.9577 16.1623 13.8459 15.9952 13.7697 15.8113C13.6934 15.6273 13.6542 15.4302 13.6542 15.2311C13.6542 15.0319 13.6934 14.8348 13.7697 14.6508C13.8459 14.4669 13.9577 14.2998 14.0986 14.1591C14.2393 14.0182 14.4064 13.9065 14.5903 13.8302C14.7743 13.754 14.9714 13.7147 15.1705 13.7147C15.3697 13.7147 15.5668 13.754 15.7507 13.8302C15.9347 13.9065 16.1018 14.0182 16.2425 14.1591L16.288 14.2045C16.4665 14.3792 16.6933 14.4963 16.939 14.5409C17.1848 14.5855 17.4383 14.5554 17.6667 14.4545H17.7274C17.9514 14.3585 18.1425 14.199 18.2771 13.9958C18.4117 13.7925 18.484 13.5544 18.4849 13.3106V13.1818C18.4849 12.78 18.6446 12.3946 18.9287 12.1104C19.2129 11.8263 19.5982 11.6667 20.0001 11.6667C20.4019 11.6667 20.7873 11.8263 21.0715 12.1104C21.3556 12.3946 21.5152 12.78 21.5152 13.1818V13.25C21.5162 13.4938 21.5884 13.7319 21.723 13.9352C21.8576 14.1384 22.0487 14.2979 22.2728 14.3939C22.5013 14.4948 22.7548 14.5249 23.0005 14.4803C23.2463 14.4357 23.4731 14.3186 23.6516 14.1439L23.6971 14.0985C23.8378 13.9576 24.0049 13.8458 24.1888 13.7696C24.3727 13.6933 24.5699 13.6541 24.769 13.6541C24.9681 13.6541 25.1653 13.6933 25.3492 13.7696C25.5332 13.8458 25.7003 13.9576 25.841 14.0985C25.9819 14.2392 26.0936 14.4063 26.1699 14.5902C26.2461 14.7742 26.2854 14.9713 26.2854 15.1704C26.2854 15.3696 26.2461 15.5667 26.1699 15.7507C26.0936 15.9346 25.9819 16.1017 25.841 16.2424L25.7955 16.2879C25.6209 16.4664 25.5037 16.6932 25.4592 16.9389C25.4146 17.1847 25.4447 17.4382 25.5455 17.6667V17.7273C25.6416 17.9513 25.801 18.1424 26.0043 18.277C26.2075 18.4116 26.4457 18.4839 26.6895 18.4848H26.8183C27.2201 18.4848 27.6055 18.6445 27.8896 18.9286C28.1738 19.2128 28.3334 19.5981 28.3334 20C28.3334 20.4018 28.1738 20.7872 27.8896 21.0714C27.6055 21.3555 27.2201 21.5151 26.8183 21.5151H26.7501C26.5063 21.5161 26.2681 21.5883 26.0649 21.723C25.8616 21.8576 25.7022 22.0487 25.6061 22.2727Z'
                  stroke='#667085'
                  strokeWidth='1.66667'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </g>
              <defs>
                <clipPath id='clip0_17_12323'>
                  <rect
                    width='20'
                    height='20'
                    fill='white'
                    transform='translate(10 10)'
                  />
                </clipPath>
              </defs>
            </svg>
          </li>

          <li>
            {/* Notification svg */}
            <svg
              width='40'
              height='40'
              viewBox='0 0 40 40'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect width='40' height='40' rx='6' fill='white' />
              <path
                d='M17.7952 27.5C18.3828 28.0186 19.1547 28.3333 20.0001 28.3333C20.8454 28.3333 21.6173 28.0186 22.2049 27.5M25.0001 16.6667C25.0001 15.3406 24.4733 14.0688 23.5356 13.1311C22.5979 12.1934 21.3261 11.6667 20.0001 11.6667C18.674 11.6667 17.4022 12.1934 16.4645 13.1311C15.5268 14.0688 15.0001 15.3406 15.0001 16.6667C15.0001 19.2418 14.3504 21.005 13.6248 22.1712C13.0127 23.1549 12.7066 23.6467 12.7178 23.784C12.7303 23.9359 12.7624 23.9938 12.8849 24.0846C12.9954 24.1667 13.4939 24.1667 14.4908 24.1667H25.5093C26.5062 24.1667 27.0047 24.1667 27.1152 24.0846C27.2377 23.9938 27.2699 23.9359 27.2823 23.784C27.2935 23.6467 26.9875 23.1549 26.3753 22.1712C25.6497 21.005 25.0001 19.2418 25.0001 16.6667Z'
                stroke='#667085'
                strokeWidth='1.66667'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </li>

          <li className='ml-[10px]'>
            <img
              src='/avatar.png'
              className='w-[40px] h-[40px]'
              alt="User's profile"
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
