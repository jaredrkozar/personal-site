import { DetailStyle } from "../Components/TextStyles.js";

function Footer() {
    return (
      <div className="bg-inherit relative w-full mr-5">
        
          <div className="bg-inherit py-6 grid place-items-center text-center text-xl font-medium">
            <h3>Jared Kozar, {new Date().getFullYear()}</h3>
            <h3>Made with React and Tailwind CSS</h3>
          </div>
      </div>
    );
  }
  
  export default Footer;