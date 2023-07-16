import Image from 'next/image';
import Link from 'next/link';

interface table {
  name: string;
  link: string;
  imgSrc: string;
}

const tableData: table[] = [
  {
    name: 'MILKYWAY',
    link: 'https://milkywayapp.xyz/',
    imgSrc: 'images/Table/cryptoone.svg',
  },
  {
    name: 'ORIONSTAR',
    link: 'https://www.orionstarsonline.com/ ',
    imgSrc: 'images/Table/cryptoone.svg',
  },
  {
    name: 'FIREKIRIN',
    link: 'https://firekirin.com/ ',
    imgSrc: 'images/Table/cryptoone.svg',
  },
  {
    name: 'JUWA 777',
    link: 'http://dl.juwa777.com/',
    imgSrc: 'images/Table/cryptoone.svg',
  },
  {
    name: 'PANDA MASTER',
    link: 'https://pandamaster.vip:8888/index.html',
    imgSrc: 'images/Table/cryptoone.svg',
  },
  {
    name: 'GAME VAULT',
    link: 'http://download.gamevault999.com/',
    imgSrc: 'images/Table/cryptoone.svg',
  },
  {
    name: 'ULTRA MONSTER',
    link: 'https://www.ultrapanda.mobi/',
    imgSrc: 'images/Table/cryptoone.svg',
  },
];

const Table = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl pt-40 px-6" id="exchange-section">
        <div className="table-b bg-navyblue p-8 overflow-x-auto">
          <h3 className="text-offwhite text-2xl">Market Trend Live Stream</h3>
          <table className="table-auto w-full mt-10">
            <thead>
              <tr className="text-white bg-darkblue rounded-lg">
                <th className="px-4 py-4 text-start font-normal">GAME</th>
                <th className="px-4 py-4 font-normal">Links</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((items, i) => (
                <tr key={i} className="border-b border-b-darkblue">
                  <td className="px-4 py-6 text-center text-white flex items-center justify-start gap-5 ">
                    <Image
                      src={items.imgSrc}
                      alt={items.imgSrc}
                      height={50}
                      width={50}
                    />
                    {items.name}
                  </td>
                  <td className="px-4 py-6 text-center text-white">
                    <Link href={`${items.link}`}>
                      <button className="bg-white text-darkblue px-4 py-2 rounded-lg">
                        Click here!!
                      </button>
                    </Link>
                  </td>
                  {/* <td
                    className={`px-4 py-6 text-center ${
                      items.change < 0 ? 'text-red' : 'text-green'
                    } `}
                  >
                    {items.change}%
                  </td>
                  <td className="px-4 py-6 text-center text-white">
                    ${items.cap.toLocaleString()}
                  </td>
                  <td
                    className={`px-4 py-6 text-center ${
                      items.action === 'Buy' ? 'text-green' : 'text-red'
                    }`}
                  >
                    {items.action}
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Image
        src={'images/Table/Untitled.svg'}
        alt="ellipse"
        width={2460}
        height={102}
        className="md:mb-40 md:-mt-6"
      />
    </>
  );
};

export default Table;
