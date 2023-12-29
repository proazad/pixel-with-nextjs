
const Banner = () => {
  return (
    <div className="h-[80vh] text-white flex flex-col justify-center items-center">
      <h2 className="text-3xl lg:text-5xl text-center font-bold">
        Hi, I&apos;m <span className="text-[#ff0052]">MD. Shafiul Alom</span>
      </h2>
      <h1 className="flex text-2xl lg:text-7xl font-bold text-center">
        I&apos;m Graphics Designer
        {/* <TypewriterComponent
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "<span style='color:#ff0052'> Graphics Designer</span>"
              )
              .deleteChars(17)
              .typeString("<span style='color:#ff0052'> UI/UX Expert</span>")
              .start();
          }}
          options={{
            autoStart: true,
            loop: true,
          }}
        /> */}
      </h1>
    </div>
  );
};

export default Banner;
