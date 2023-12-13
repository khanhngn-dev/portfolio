const Background = () => {
  return (
    <div
      className="fixed -z-50 top-0 left-0 bottom-0 right-0"
      style={{
        backgroundImage: `radial-gradient(rgba(255,255,255,0.1) 5%, transparent 5%)`,
        backgroundRepeat: `repeat`,
        backgroundSize: `12vmin 12vmin`,
      }}
    ></div>
  );
};

export default Background;
