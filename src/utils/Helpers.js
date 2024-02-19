// dateUtils.js
export const getDefaultDateRange = (timeDuration) => {
  const currentDate = new Date();
  const endDate = currentDate.toISOString().split('T')[0];  // Get current date in "YYYY-MM-DD" format

  switch (timeDuration) {
      case 'daily':
          const startDateDaily = new Date(currentDate);
          startDateDaily.setDate(currentDate.getDate() - 30);
          return {
              timeDuration,
              start: startDateDaily.toISOString().split('T')[0],
              end: endDate,
          };
      case 'weekly':
          const startDateWeekly = new Date(currentDate);
          startDateWeekly.setDate(currentDate.getDate() - 28);
          return {
              timeDuration,
              start: startDateWeekly.toISOString().split('T')[0],
              end: endDate,
          };
      case 'monthly':
          const startDateMonthly = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
          startDateMonthly.setMonth(startDateMonthly.getMonth() - 12);
          return {
              timeDuration,
              start: startDateMonthly.toISOString().split('T')[0],
              end: endDate,
          };
      case 'yearly':
          const startDateYearly = new Date(currentDate.getFullYear() - 5, 0, 1);
          const startOfNextYear = new Date(currentDate.getFullYear() + 1, 0, 1);  // Set to the first day of the next year
          return {
              timeDuration,
              start: startDateYearly.toISOString().split('T')[0],
              end:  startOfNextYear.toISOString()
          };
      default:
          return {
              timeDuration,
              start: '',
              end: '',
          };
  }
};

