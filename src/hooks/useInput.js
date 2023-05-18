const useInput = (values) => {
  const inputData = [
    {
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Should contain 7 Characters ",
      label: "Email",
      required: true,
      pattern: `/^([a-z\d][a-z\d_\-.]+[a-z\d]){2,10}@[a-z\d-]{2,30}\.[a-z]{2,10}(\.[a-z]{2,20})?$/`,
    },
    {
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "Should contain 8 Characters",
      label: "Password",
      required: true,
      pattern: `^[A-Za-z0-9]{8,}$`,
    },
  ];
  return [inputData];
};

export default useInput;
