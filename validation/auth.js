export const validateRegister = (req, res, next) => {
  const { fullname, account, email, password } = req.body;
  if (!fullname) throw new Error("Fullname is required");
  if (!account) throw new Error("Account is required");
  if (!email) throw new Error("Email is required");
  if (!password) throw new Error("Password is required");
  next();
};

export const validateLogin = (req, res, next) => {
  const { account, email, password } = req.body;
  if (!account && !email) throw new Error("Username or email is required!");
  if (!password) throw new Error("Password is required!");
  next();
};

export const validateRefresh = (req, res, next) => {
  const { refreshToken } = req.body;
  if (!refreshToken) throw new Error("Refresh token is required!");
  next();
};
