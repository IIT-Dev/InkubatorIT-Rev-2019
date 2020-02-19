export const validateEmail = (email: string) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email.toLowerCase());
};

export const validatePhoneNumber = (phoneNumber: string) => {
  if (
    /^\+{0,1}\d+$/.test(phoneNumber) &&
    ((phoneNumber.startsWith('+62') && phoneNumber.length === 14) ||
      (phoneNumber.startsWith('0') && phoneNumber.length === 12))
  ) {
    return true;
  }
  return false;
};
