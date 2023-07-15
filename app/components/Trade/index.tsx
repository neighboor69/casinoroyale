import Image from 'next/image';

const Trade = () => {
  return (
    <div className="mx-auto max-w-7xl mt-48 mb-16 px-6 relative">
      <div className="radial-bgone hidden lg:block"></div>

      <div className="grid lg:grid-cols-2 gap-x-2">
        {/* Column-1 */}
        <div>
          <Image
            src={'/images/Trade/jackpot.png'}
            alt="macBook-image"
            width={787}
            height={512}
          />
        </div>

        {/* Column-2 */}

        <div>
          <h3 className="text-3xl lg:text-5xl font-semibold text-offwhite mb-6 text-center sm:text-start">
            Win Anywhere <br /> Any time
          </h3>
          <p className="lg:text-lg font-normal text-lightblue mb-16 text-center sm:text-start">
            We’ve got all of the excitement of the best land based casino but
            without all of the hassle. No traffic, no crowds, no parking—just
            the best in casino gaming 24/7 from the comfort of your own home.
          </p>
          <div className="flex justify-between">
            <Image
              src={'/images/Trade/mac.svg'}
              alt="macOS-image"
              width={61}
              height={105}
            />
            <div className="verticalLine"></div>
            <Image
              src={'/images/Trade/appstore.svg'}
              alt="appstore-image"
              width={80}
              height={105}
            />
            <div className="verticalLine"></div>
            <Image
              src={'/images/Trade/windows.svg'}
              alt="windows-image"
              width={80}
              height={105}
            />
            <div className="verticalLine"></div>
            <Image
              src={'/images/Trade/android.svg'}
              alt="android-image"
              width={71}
              height={105}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trade;
