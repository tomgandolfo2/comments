// app/components/ShareButtons.js

import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export default function ShareButtons({ url, title }) {
  return (
    <div className="flex space-x-4">
      <div className="flex items-center bg-blue-600 text-white px-5 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300 ease-in-out">
        <FacebookShareButton
          url={url}
          quote={title}
          className="flex items-center space-x-2"
        >
          <FontAwesomeIcon icon={faFacebookF} className="w-5 h-5" />
          <span className="text-sm font-semibold">Facebook</span>
        </FacebookShareButton>
      </div>
      <div className="flex items-center bg-blue-400 text-white px-5 py-3 rounded-lg shadow-lg hover:bg-blue-500 transition-colors duration-300 ease-in-out">
        <TwitterShareButton
          url={url}
          title={title}
          className="flex items-center space-x-2"
        >
          <FontAwesomeIcon icon={faTwitter} className="w-5 h-5" />
          <span className="text-sm font-semibold">Twitter</span>
        </TwitterShareButton>
      </div>
      <div className="flex items-center bg-blue-700 text-white px-5 py-3 rounded-lg shadow-lg hover:bg-blue-800 transition-colors duration-300 ease-in-out">
        <LinkedinShareButton
          url={url}
          title={title}
          className="flex items-center space-x-2"
        >
          <FontAwesomeIcon icon={faLinkedinIn} className="w-5 h-5" />
          <span className="text-sm font-semibold">LinkedIn</span>
        </LinkedinShareButton>
      </div>
    </div>
  );
}
