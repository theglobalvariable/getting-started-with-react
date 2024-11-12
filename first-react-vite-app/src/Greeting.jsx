function Greeting() {
  let firstName = "Babu";
  let lastName = "Swami";

  let fullName = () => {
    return firstName + " " + lastName;
  };

  return <p>Hello, my name is {fullName()}</p>;
}

export default Greeting;
