export const tryCatchFn = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.stack });
  }
};
