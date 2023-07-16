'use client';
import Image from 'next/image';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

interface faqdata {
  heading: string;
  subheading: string;
}

const faqdata: faqdata[] = [
  {
    heading: '1. How do I sign up and create an account?',
    subheading:
      'To sign up and create an account on an online casino platform, visit the our Facebook page. Message and wait for the instructions provided.',
  },
  {
    heading:
      '2. What are the deposit and withdrawal methods available for online casino games?',
    subheading:
      'We only accept deposits through CashApp. We do not accept any other payment methods. Withdrawal methods are available through CashApp.',
  },
  {
    heading:
      '3. Are there any bonuses or promotions available for new players?',

    subheading:
      'Yes, we offer bonuses and promotions for new players. These can include welcome bonuses, free plays, or matching deposit bonuses. The specific bonuses and promotions available will depend on special ocassions like holidays, weekends, birthdays, etc?',
  },
  {
    heading:
      '4. Are there any specific strategies or tips for winning at online casino games?',

    subheading:
      'While online casino games are predominantly based on luck, there are some strategies and tips that can help improve your chances. It is advisable to learn the rules and strategies specific to the games you are interested in, manage your bankroll responsibly, and set limits on your playing time.',
  },
];

const Faq = () => {
  return (
    <div className="my-20 px-6" id="faq-section">
      <h3 className="text-center text-3xl lg:text-5xl font-bold text-offwhite mb-3">
        Frequently Asked And Question
      </h3>
      <p className="text-center lg:text-lg font-normal text-bluish"></p>

      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2">
          {/* Column-1 */}
          <div>
            <div className="w-full px-4 pt-16">
              {faqdata.map((items, i) => (
                <div
                  className="mx-auto w-full max-w-5xl rounded-2xl bg-blue py-8 px-6 mb-5"
                  key={i}
                >
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full justify-between rounded-lg text-offwhite sm:px-4 sm:py-2 text-left md:text-2xl font-medium">
                          <span>{items.heading}</span>
                          <ChevronUpIcon
                            className={`${
                              open ? 'rotate-180 transform' : ''
                            } h-5 w-5 text-purple-500`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 md:text-lg text-bluish font-normal opacity-50">
                          {items.subheading}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </div>
              ))}
            </div>
          </div>

          {/* Column-2 */}
          <div className="mt-32">
            <Image
              src={'images/Faq/faq.svg'}
              alt="faq-image"
              width={941}
              height={379}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
