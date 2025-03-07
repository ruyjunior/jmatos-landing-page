import Image from 'next/image';

const logos = [
  '/images/others/pix.png',
  '/images/others/wellhub.png',
  '/images/others/visa.png',
  '/images/others/master.png',
  '/images/others/elo.png',
];

const Payments = () => {
  return (
    <section id="payments"
      className="py-0 text-center">
      <div className="flex justify-center flex-wrap gap-6">
        {logos.map((logo, index) => (
          <div key={index} className="flex items-center justify-center bg-gray-200 px-2 py-3 rounded-lg shadow-md">
            <Image
              src={logo}
              width={200} height={200}
              alt="Partners"
              className="rounded-md w-200 h-200"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
export default Payments;