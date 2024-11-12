function CurrentTime() {
  let formatDate = (date) => {
    return (
      date.toLocaleDateString("en-IN") +
      " - " +
      date.toLocaleTimeString("en-IN")
    );
  };
  let currentDate = formatDate(new Date());

  setInterval(() => {
    currentDate = formatDate(new Date());
  }, 1000);

  return <p className="lead">This is the current time: {currentDate}</p>;
}

export default CurrentTime;
