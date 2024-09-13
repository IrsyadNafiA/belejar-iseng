export const createUserValidationSchema = {
  username: {
    isLength: {
      options: {
        min: 5,
        max: 32,
      },
      errorMessage: "Username must be between 5 and 32 characters",
    },
    notEmpty: {
      errorMessage: "Username must be not empty",
    },
    isString: {
      errorMessage: "Username must be a string",
    },
  },
  name: {
    notEmpty: {
      errorMessage: "Name must be not empty",
    },
    isString: {
      errorMessage: "Name must be a string",
    },
  },
};

export const getUserValidationSchema = {
  filter: {
    isString: {
      errorMessage: "Filter must be a string",
    },
    notEmpty: {
      errorMessage: "Filter must be not empty",
    },
    isLength: {
      options: {
        min: 3,
        max: 10,
      },
      errorMessage: "Filter must be between 3 and 10 characters",
    },
  },
};

export const createProductValidationSchema = {
  name: {
    notEmpty: {
      errorMessage: "Name must be not empty",
    },
    isString: {
      errorMessage: "Name must be a string",
    },
  },
  harga: {
    notEmpty: {
      errorMessage: "Harga must be not empty",
    },
    isInt: {
      errorMessage: "Harga must be an integer",
    },
  },
};
