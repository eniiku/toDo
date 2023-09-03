function generateListOfDays(): {
  month: string;
  year: string;
  daysList: { weekday: string; day: number }[];
} {
  const today: Date = new Date();
  const currentDay: number = today.getDate();
  const currentMonth: number = today.getMonth();
  const currentYear: number = today.getFullYear();

  // Initialize an empty array to store the result
  const result: { weekday: string; day: number }[] = [];

  // Get the previous day before the current day
  const previousDay: Date = new Date(currentYear, currentMonth, currentDay - 1);

  // Get the current month's last day
  const lastDay: number = new Date(currentYear, currentMonth + 1, 0).getDate();

  // Generate the list of weekdays and days of the month
  while (previousDay.getDate() <= lastDay) {
    result.push({
      weekday: previousDay.toLocaleDateString('en-US', { weekday: 'long' }),
      day: previousDay.getDate(),
    });

    // Move to the next day
    previousDay.setDate(previousDay.getDate() + 1);
  }

  return {
    month: today.toLocaleDateString('en-US', { month: 'long' }),
    year: currentYear.toString(),
    daysList: result,
  };
}

export default generateListOfDays;
