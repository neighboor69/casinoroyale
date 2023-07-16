import Image from 'next/image';

interface featuresdata {
  imgSrc: string;
  heading: string;
  subheading: string;
}

const featuresdata: featuresdata[] = [
  {
    imgSrc: './images/Features/featureThree.svg',
    heading: 'Redeemable Freeplay',
    subheading:
      'Looking to play first with out any deposit!? Our online platform allows to play and win without deposits!',
  },
  {
    imgSrc: './images/Features/featureOne.svg',
    heading: 'Low Minimum Deposit',
    subheading:
      'Play without being forced to meet a high minimum to enjoy your favorite games.',
  },
  {
    imgSrc: './images/Features/featureTwo.svg',
    heading: 'Instant Redeemable',
    subheading:
      'Forget the day or even hour long waiting to redeem your winnings. Check this list for the instant redeems.',
  },
  {
    imgSrc: './images/Features/featureThree.svg',
    heading: 'Huge Bonuses With Depsits',
    subheading:
      'Get more bang for your buck! Get huge deposit bonuses when you deposit to play your favorite games.',
  },
];

const Features = () => {
  return (
    <div
      className="mx-auto max-w-7xl mt-16 px-6 mb-20 relative"
      id="features-section"
    >
      <div className="radial-bgone hidden lg:block"></div>

      <div className="text-center mb-14">
        <h2 className="text-offwhite text-3xl md:text-5xl font-bold mb-3">
          The most trusted Online Casino platform
        </h2>
        <p className="text-offwhite md:text-lg font-normal leading-8">
          Casino Royale is the go-to platform for players to fullfil their
          gaming needs.
        </p>
      </div>

      <div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4 lg:-mr-50">
          {featuresdata.map((items, i) => (
            <div className="bg-blue py-10 pr-12 pl-6 rounded-lg" key={i}>
              <div className="rounded-full gg h-16 w-16 flex items-center justify-center mb-10">
                <Image
                  src={items.imgSrc}
                  alt={items.imgSrc}
                  width={24}
                  height={30}
                />
              </div>
              <h5 className="text-offwhite text-lg font-medium mb-4">
                {items.heading}
              </h5>
              <p className="text-lightblue text-sm font-normal">
                {items.subheading}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
