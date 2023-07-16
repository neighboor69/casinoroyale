'use client';
import Image from 'next/image';
import Link from 'next/link';

interface workdata {
  // imgSrc: string;
  // heading: string;
  // subheading: string;
  // hiddenpara: string;
  name: string;
  link: string;
  imgSrc: string;
  desc: string;
}

const workdata: workdata[] = [
  // {
  //     imgSrc: 'images/Work/icon-one.svg',
  //     heading: 'Create Account',
  //     subheading: 'Contact us through our Facebook page',
  //     hiddenpara: 'Choose the game you want to play',
  // },
  // {
  //     imgSrc: 'images/Work/icon-two.svg',
  //     heading: 'Find your Credit',
  //     subheading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry and this',
  //     hiddenpara: 'standard dummy text ever since the 1500s, when an unknownprinter took a galley of type and scrambled it to make a type specimen book. It has survived...',
  // },
  // {
  //     imgSrc: 'images/Work/icon-three.svg',
  //     heading: 'Exchange Currency',
  //     subheading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry and this',
  //     hiddenpara: 'standard dummy text ever since the 1500s, when an unknownprinter took a galley of type and scrambled it to make a type specimen book. It has survived...',
  // },
  {
    name: 'MILKYWAY',
    link: 'https://milkywayapp.xyz/',
    imgSrc: 'images/Work/icon-seven.svg',
    desc: 'Milky way games are available to download and play.',
  },
  {
    name: 'ORIONSTAR',
    link: 'https://www.orionstarsonline.com/ ',
    imgSrc: 'images/Work/icon-six.svg',
    desc: 'Download Orion Stars for android and iPhone',
  },
  {
    name: 'FIREKIRIN',
    link: 'https://firekirin.com/ ',
    imgSrc: 'images/Work/icon-three.svg',
    desc: 'Download and play FireKirin for Android (Apk) iPhones (iSO) and Desktop (windows exe)',
  },
  {
    name: 'JUWA 777',
    link: 'http://dl.juwa777.com/',
    imgSrc: 'images/Work/icon-two.svg',
    desc: 'Download Juwa Casino App for all apk and iphones',
  },
  {
    name: 'PANDA MASTER',
    link: 'https://pandamaster.vip:8888/index.html',
    imgSrc: 'images/Work/icon-five.svg',
    desc: 'Download and play Panda Master',
  },
  {
    name: 'GAME VAULT',
    link: 'http://download.gamevault999.com/',
    imgSrc: 'images/Work/icon-one.svg',
    desc: 'Game Vault App is ready to download and play online. Compatible for apk and iPhones ',
  },
  {
    name: 'ULTRA PANDA',
    link: 'https://www.ultrapanda.mobi/',
    imgSrc: 'images/Work/icon-four.svg',
    desc: 'No need for Ulta Panda Apk or Ultra Panda iPhone app. Play on the new Ultra Panda Website',
  },
];

const Work = () => {
  return (
    <div>
      <div
        className="mx-auto max-w-7xl mt-16 px-6 mb-20 relative "
        id="games-link"
      >
        <div className="radial-bgone hidden lg:block"></div>
        <div className="text-center mb-14">
          <h3 className="text-offwhite text-3xl md:text-5xl font-bold mb-3">
            Games Available
          </h3>
          <p className="text-bluish md:text-lg font-normal leading-8">
            Casino Royale features a comprehensive collection of the top 7
            verified casino games, providing players with all the information
            they need to make an informed decision on where to play.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-5 mt-32">
          {workdata.map((items, i) => (
            <div className="card-b p-8" key={i}>
              <div className="sm:right-1/3 work-img-bg rounded-full flex justify-center absolute p-6">
                <Image
                  src={items.imgSrc}
                  alt={items.imgSrc}
                  width={90}
                  height={90}
                />
              </div>
              <div>
                <Image
                  src={'images/Work/bg-arrow.svg'}
                  alt="arrow-bg"
                  width={85}
                  height={35}
                />
              </div>
              <h3 className="text-2xl text-offwhite font-semibold text-center mt-8">
                {items.name}
              </h3>
              <p
                className="text-base font-normal text-bluish text-center mt-2"
                style={{ overflow: 'hidden', maxHeight: '23% ' }}
              >
                {items.desc}
              </p>
              <Link href={items.link}>
                <button className="text-xl justify font-semibold text-white py-1 px-2 lg:px-3 navbutton mr-6">
                  Link
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
