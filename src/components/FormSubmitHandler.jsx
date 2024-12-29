import React from "react";

function FormSubmitHandler() {
  const [name, setName] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    setName(e.target.name.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label for="name" className="mt-3">
          Enter your Name:
        </label>{" "}
        <br />
        <input type="text" name="name" /> <br />
        <button type="submit" className="mt-4">
          Submit
        </button>
      </form>
      <p>{name}</p>
    </>
  );
}

export default FormSubmitHandler;
