import { DetailStyle } from "../Components/TextStyles.js";

function Footer() {
    return (
      <div className="relative bottom-0">
        
          <div className="py-6 grid place-items-center text-center text-xl font-medium">
            <h3>Jared Kozar, {new Date().getFullYear()}</h3>
            <h3>Made with React and Tailwind CSS</h3>
          </div>
      </div>
    );
  }
  
  export default Footer;