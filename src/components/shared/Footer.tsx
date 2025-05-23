import Image from "next/image";
import logo from "../../app/assets/logo.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const sections = [
  {
    title: "Product",
    links: [
      { name: "Overview", href: "/about-us" },
      { name: "Pricing", href: "/" },
      { name: "Marketplace", href: "/medicines" },
      { name: "Features", href: "/" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "/about-us" },
      { name: "Team", href: "/" },
      { name: "Blog", href: "/" },
      { name: "Careers", href: "/" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Help", href: "/" },
      { name: "Sales", href: "/" },
      { name: "Advertise", href: "/" },
      { name: "Privacy", href: "/" },
    ],
  },
];

const Footer = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-5">
        <footer>
          <div className="flex flex-col items-center justify-between gap-10 text-center lg:flex-row lg:text-left">
            <div className="flex w-full max-w-96 shrink flex-col items-center justify-between gap-6 lg:items-start">
              <div>
                <span className="flex items-center justify-center gap-4 lg:justify-start">
                  <Image
                    src={logo}
                    height={200}
                    width={200}
                    alt="logo"
                    className="h-11 w-11"
                  />
                  <p className="text-3xl font-semibold">PHARMA</p>
                </span>
                <p className="mt-6 text-sm text-muted-foreground">
                  PHARMA is a web application for managing pharmaceutical
                  inventory, prescriptions, and sales efficiently. It
                  streamlines pharmacy operations with real-time stock tracking
                  and automated order management.
                </p>
              </div>
              <ul className="flex items-center space-x-6 text-muted-foreground">
                <li className="font-medium hover:text-primary">
                  <Link target="_blank" href="https://www.instagram.com/_ami_topu_">
                    <FaInstagram className="size-6" />
                  </Link>
                </li>
                <li className="font-medium hover:text-primary">
                  <Link target="_blank" href="https://www.facebook.com/0mdmahmudulhasan0">
                    <FaFacebook className="size-6" />
                  </Link>
                </li>
                <li className="font-medium hover:text-primary">
                  <Link href="/">
                    <FaTwitter className="size-6" />
                  </Link>
                </li>
                <li className="font-medium hover:text-primary">
                  <Link target="_blank" href="https://www.linkedin.com/in/md-mahmudul-hasan-bd/">
                    <FaLinkedin className="size-6" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-3 gap-6 lg:gap-20">
              {sections.map((section, sectionIdx) => (
                <div key={sectionIdx}>
                  <h3 className="mb-6 font-bold">{section.title}</h3>
                  <ul className="space-y-4 text-sm text-muted-foreground">
                    {section.links.map((link, linkIdx) => (
                      <li
                        key={linkIdx}
                        className="font-medium hover:text-primary"
                      >
                        <a href={link.href}>{link.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-20 flex flex-col justify-between gap-4 border-t pt-8 text-center text-sm font-medium text-muted-foreground lg:flex-row lg:items-center lg:text-left">
            <p>© 2024 PHARMA. All rights reserved.</p>
            <ul className="flex justify-center gap-4 lg:justify-start">
              <li className="hover:text-primary">
                <Link href="/"> Terms and Conditions</Link>
              </li>
              <li className="hover:text-primary">
                <Link href="/"> Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
