import { matchedData } from "express-validator";

export const createUserValidationSchema = {
  username: {
    isLength: {
      options: {
        min: 5,
        max: 20,
      },
      errorMessage: "Username must be between 5 and 20 characters",
    },
    notEmpty: {
      errorMessage: "Username must be not empty",
    },
    isString: {
      errorMessage: "Username must be a string",
    },
  },
  displayName: {
    notEmpty: {
      errorMessage: "Name must be not empty",
    },
    isString: {
      errorMessage: "Name must be a string",
    },
  },
  password: {
    isLength: {
      options: {
        min: 8,
        max: 32,
      },
      errorMessage: "Password must be between 8 and 32 characters",
    },
    notEmpty: {
      errorMessage: "Password must be not empty",
    },
    isString: {
      errorMessage: "Password must be a string",
    },
    matches: {
      options: /^(?=.*[A-Za-z])(?=.*[0-9]).*$/,
      errorMessage: "Password must contain at least one letter and one number",
    },
  },
  role: {
    notEmpty: {
      errorMessage: "Role must be not empty",
    },
    isString: {
      errorMessage: "Role must be a string",
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
  description: {
    notEmpty: {
      errorMessage: "Description must be not empty",
    },
    isString: {
      errorMessage: "Description must be a string",
    },
  },
  price: {
    notEmpty: {
      errorMessage: "Price must be not empty",
    },
  },
  type: {
    notEmpty: {
      errorMessage: "Type must be not empty",
    },
    isString: {
      errorMessage: "Type must be a string",
    },
  },
};
