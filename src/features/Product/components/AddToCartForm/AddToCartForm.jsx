import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

AddToCartForm.propTypes = {
  onSubmit: PropTypes.func,
};

function AddToCartForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: 1,
  });

  const handleSumbit = (values) => {
    onSubmit(values);
  };

  return (
    <form onSubmit={handleSubmit(handleSumbit)}>
      <input
        id="quantity"
        className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg p-2 mr-4"
        type="number"
        {...register("quantity", {
          required: true,
          min: 1,
        })}
      />
      {errors.quantity && errors.quantity.type === "required" && (
        <span className="text-red-600 mr-4">This is required</span>
      )}
      {errors.quantity && errors.quantity.type === "min" && (
        <span className="text-red-600 mr-4">Enter at least 1</span>
      )}
      <input
        type="submit"
        value="Buy"
        className="cursor-pointer max-w-[200px] text-white font-bold text-lg	 bg-gradient-to-b from-gray-700 via-gray-900 to-black hover:from-gray-700 hover:to-yellow-700 px-4 py-2 rounded-md"
      />
    </form>
  );
  // const form  = useForm({
  //   defaultValues: {
  //     quantity: 1,
  //   },
  //   resolver: yupResolver(schemaValidatorForm),
  // });

  // const handleSubmit = (values) => {
  //   if (onSubmit) {
  //     onSubmit(values);
  //   }
  // };

  // return (
  //   <form onSubmit={handleSubmit(handleSubmit)}>
  //     <input type="number"  label="quantity" />
  //     <button type="submit">Buy</button>
  //   </form>
  // );
}

export default AddToCartForm;
