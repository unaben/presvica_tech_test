const useInput = (values) => {
  const inputData = [
    {
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Should contain 7 Characters ",
      label: "Email",
      required: true,
    //   pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{7,})",
    },
    {
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "Should contain 8 Characters",
      label: "Password",
      required: true,
    //   pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})",
    },
  ];
  return [inputData];
};

export default useInput;
