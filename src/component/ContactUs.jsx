import { Phone } from 'lucide-react';

const ContactUs = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Contact Form */}
        <div className="md:col-span-2 bg-white rounded-2xl shadow-md p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-green-500 text-white p-2 rounded-full">
              <Phone size={20} />
            </div>
            <h2 className="text-xl font-semibold">Contact Form</h2>
          </div>
          <hr className="mb-4" />
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="text"
                placeholder="Subject"
                className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <textarea
              placeholder="Your Message"
              rows="5"
              className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>

            {/* Fake ReCAPTCHA UI */}
            <div className="w-full max-w-xs bg-white border px-4 py-3 rounded">
              <label className="flex items-center space-x-2">
                <input type="checkbox" />
                <span>I’m not a robot</span>
              </label>
              <div className="text-right text-[10px] text-gray-500 mt-1">
                reCAPTCHA <span className="underline">Privacy</span> · <span className="underline">Terms</span>
              </div>
            </div>

            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-2 rounded-full"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Office Info */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-green-500 text-white p-2 rounded-full">
              <Phone size={20} />
            </div>
            <h2 className="text-xl font-semibold">Office Address</h2>
          </div>
          <hr className="mb-4" />
          <div className="space-y-3 text-gray-700">
            <p>
              <strong>Phone:-</strong> +91 7279 099099
            </p>
            <p>
              <strong>E-Mail:-</strong>{' '}
              <a href="mailto:contact@farmhousehub.in" className="text-green-600 hover:underline">
                contact@farmhousehub.in
              </a>
            </p>
            <p>
              <strong>Address:-</strong> 443, Bellissimo Hub, New Gauravpath Road, Near Monarch,
              Surat - 395004.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
