export const tryCatchFn = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
