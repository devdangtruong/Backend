export const validateRegister = (req, res, next) => {
  const { fullname, age, email, password, address } = req.body;
  if (!fullname) throw new Error("Fullname is required");
  if (!age) throw new Error("Age is required");
  if (!email) throw new Error("Email is required");
  if (!password) throw new Error("Password is required");
  if (!address) throw new Error("Address is required");
  next();
};
