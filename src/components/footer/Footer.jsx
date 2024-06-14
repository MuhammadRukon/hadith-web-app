
import Logo from "../logo/Logo";

const Footer = ({dashboard}) => {


  return (
    <footer className={`footer dark:bg-[#312c2a] footer-center pt-3 ${!dashboard && 'pb-3 bg-[#5ab270] text-[#fefdf8]'} dark:text-[#fefdf8] sticky z-10 `}>
      <aside>
        <div className="font-bold text-xl">

            {!dashboard && <Logo footer={true} /> }

        </div>
        <p>Copyright © 2024 - All right reserved</p>
      </aside>
    </footer>
  );
};

export default Footer;
