import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope as faSolidEnvelope, faPhone as faSolidPhone, faMapMarkerAlt as faSolidMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => (
  <footer id='footer' className="bg-gray-900 text-white py-12 px-4 md:px-28">
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:flex lg:flex-row gap-8 mb-16">
      <div className="flex-1 min-w-48">
        <h2 className="text-2xl font-bold mb-8">Get<span className="text-green-500">Skilled</span></h2>
        <p className="text-sm text-gray-400 mb-8">Empowering learners through innovation and practical knowledge.</p>
        <div className="flex gap-2">
          {[
            { icon: faFacebookF, name: 'facebook' },
            { icon: faTwitter, name: 'twitter' },
            { icon: faInstagram, name: 'instagram' },
            { icon: faLinkedinIn, name: 'linkedin' },
            { icon: faYoutube, name: 'youtube' }
          ].map((item, index) => (
            <a key={index} href="#" className="bg-green-900 p-2 rounded-md">
              <FontAwesomeIcon icon={item.icon} className="text-white" />
            </a>
          ))}
        </div>
      </div>
      <div className="flex-1 min-w-48">
        <h4 className="text-lg mb-3">Our Domains</h4>
        <ul className="space-y-2 text-sm text-gray-400">
          {['Technology', 'Commerce', 'Engineering', 'Arts'].map((item, index) => (
            <li key={index}><a href="#" className="hover:text-white">{item}</a></li>
          ))}
        </ul>
      </div>
      <div className="flex-1 min-w-48">
        <h4 className="text-lg mb-3">Company</h4>
        <ul className="space-y-2 text-sm text-gray-400">
          {['About', 'Programs', 'Blogs', 'Careers'].map((item, index) => (
            <li key={index}><a href="#" className="hover:text-white">{item}</a></li>
          ))}
        </ul>
      </div>
      <div className="flex-1 min-w-48">
        <h4 className="text-lg mb-3">Resources</h4>
        <ul className="space-y-2 text-sm text-gray-400">
          {[
            'AI Interview Prep',
            'AI Based Program Selector',
            'AI Based Course Creator',
            'AI Based Book GPT',
            { text: 'Community', badge: 'Exclusive' }
          ].map((item, index) => (
            <li key={index}>
              <a href="#" className="hover:text-white">
                {typeof item === 'string' ? item : item.text}
                {item.badge && <span className="bg-gradient-to-r from-orange-500 to-orange-300 text-white text-xs px-1 rounded ml-2">{item.badge}</span>}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 min-w-48 border border-gray-700 rounded-xl p-4">
        <ul className="space-y-3 text-sm text-gray-400">
          <li className="flex items-center">
            <FontAwesomeIcon icon={faSolidEnvelope} className="text-green-500 mr-2" />
            gyaankool@gmail.com
          </li>
          <li className="flex items-center">
            <FontAwesomeIcon icon={faSolidPhone} className="text-green-500 mr-2" />
            +91 95910 09606
          </li>
          <li className="flex items-center">
            <FontAwesomeIcon icon={faSolidMapMarkerAlt} className="text-green-500 mr-2" />
            123 Innovation Hub, Tech Park, Bangalore, Karnataka 560001
          </li>
        </ul>
      </div>
    </div>
    <hr className="border-gray-700 mb-8" />
    <div className="text-center text-sm text-gray-400">
      <p>
        Copyright © 2025 GetSkilled |{' '}
        <a href="#" className="underline">All Rights Reserved</a> |{' '}
        <a href="#" className="underline">Terms and Conditions</a> |{' '}
        <a href="#" className="underline">Privacy Policy</a>
      </p>
    </div>
  </footer>
);

export default Footer;