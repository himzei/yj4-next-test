"use server";
export const handleForm = async (prevState, formData) => {
  console.log(prevState);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    errors: ["Wrong Password", "password too short"],
  };
};
