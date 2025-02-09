import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-5 md:px-20">
      <div className="grid md:grid-cols-4 gap-5">
        <div>
          <h3 className="font-bold text-xl mb-4 font-elMessiri">
            Al-Furqan Seminary
          </h3>
          <p className="text-primary-foreground/80">
            Dedicated to providing quality Islamic education for all.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {["Home", "About", "Programs", "Contact"].map((link) => (
              <li key={link} className="hover:underline">
                <a href={`#${link.toLowerCase()}`}>{link}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Contact Info</h4>
          <ul className="space-y-2 text-primary-foreground/80">
            <li className="hover:underline cursor-pointer">
              Email: info@alfurqan.edu
            </li>
            <li className="hover:underline cursor-pointer">
              Phone: (123) 456-7890
            </li>
            <li className="hover:underline cursor-pointer">
              Address: 8481 Hungary Rd, Richmond, VA 23228
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Admins</h4>
          <ul className="space-y-2 text-primary-foreground/80">
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-primary-foreground/60">
        <p>
          © {new Date().getFullYear()} Al-Furqan Seminary. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
