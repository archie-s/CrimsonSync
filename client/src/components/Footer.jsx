import PropTypes from 'prop-types';
import { FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'


const Footer = ({ currentYear, handleScrollTo }) => {
  return (
    <footer className="w-full bg-white py-4 text-black">
      <div className="px-4 mx-auto">
        <div className="grid lg:grid-cols-3 gap-4">
          {/* Left Column */}
          <div>
            <h1 className="text-3xl font-bold">CrimsonSync.</h1>
            <p className="py-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.
            </p>
            <div className="flex gap-4 my-6">
              <FaFacebookSquare size={30} />
              <FaInstagramSquare size={30} />
              <FaSquareXTwitter size={30} />
              <FaGithubSquare size={30} />
              <FaLinkedin size={30} />
            </div>
          </div>

          {/* Center Columns */}
          <div className="lg:col-span-2 flex gap-10">
            <div>
              <h6 className="font-medium pb-2">CrimsonSync features</h6>
              <ul>
                <li className="py-1 text-sm">AI Predictive blood shortage</li>
                <li className="py-1 text-sm">Blood Type Availability dashboard</li>
                <li className="py-1 text-sm">Blood donation drives</li>
                <li className="py-1 text-sm">Donor registration & notification</li>
                <li className="py-1 text-sm">Real-time blood tracking</li>
              </ul>
            </div>
            <div>
              <h6 className="font-medium pb-2">Resources</h6>
              <ul>
                <li className="py-1 text-sm">Blog on blood donation trends</li>
                <li className="py-1 text-sm">Best practices for blood management</li>
                <li className="py-1 text-sm">Blood types and their demand</li>
                <li className="py-1 text-sm">AI in Healthcare</li>
                <li className="py-1 text-sm">Developer resources</li>
                <li className="py-1 text-sm">FAQs</li>
                <li className="py-1 text-sm">Support & Contact</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Copyright */}
        <div className="text-center mt-4">
          <h2 className="text-xl">
            Copyright © {currentYear}
            <span
              style={{ fontFamily: 'Merriweather, serif' }}
              className="font-burtons text-black cursor-pointer ml-1 mr-1"
              onClick={() => handleScrollTo('root')}>
              CS
            </span>
            All rights reserved.
          </h2>
        </div>
      </div>
    </footer>
  );
};

// Add PropTypes to validate the props being passed
Footer.propTypes = {
  currentYear: PropTypes.number.isRequired,
  handleScrollTo: PropTypes.func.isRequired,
};

export default Footer;
