import Image from 'next/image';

const logos = [
  '/images/payments/pix.png',
  '/images/payments/visa.png',
  '/images/payments/master.png',
  '/images/payments/elo.png',
];

const Payments = () => {
  return (
    <section id="payments" className="py-16 text-center bg-gray-50">
      <h3 className="text-2xl font-bold text-gray-900">
        Payments
      </h3>
      <p className="mt-2 text-gray-600">
        These are our payment methods
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8 px-5 max-w-4xl mx-auto">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center bg-white px-4 py-4 rounded-lg shadow-md transition-transform transform hover:scale-105"
          >
            <Image
              src={logo}
              width={120}
              height={60}
              alt="Payment method"
              className="rounded-md"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
export default Payments;