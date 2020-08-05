const updateAppointment = (
  date,
  fromTime,
  userData
) => (
  {
    date,
    fromTime,
    userData,
    type: 'UPDATE_APPOINTMENT',
  }
);

export {
  updateAppointment,
}