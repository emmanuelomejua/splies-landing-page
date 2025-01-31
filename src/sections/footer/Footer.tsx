import React from "react";



const Footer = () => {

    const companyLinks = [
        { label: "Benefits", href: "#" },
        { label: "Why Splice?", href: "#" },
        { label: "Resources", href: "#" },
        { label: "Testimonials", href: "#" },
        { label: "December rush quiz ⚡", href: "#" },
      ];
    
      const legalLinks = [
        { label: "Terms of condition", href: "#" },
        { label: "Privacy policy", href: "#" },
      ];

      const socialLinks = [
        { label: "Instagram", href: "#" },
        { label: "Facebook", href: "#" },
        { label: "Twitter", href: "#" },
        { label: "LinkedIn", href: "#" },
      ];


  return (
    <footer className="bg-[#fffdf5] text-gray-700 py-10 px-6 md:px-12 lg:px-20">
      <div className="flex flex-col md:flex-row justify-between">
        {/* Company Info */}
        <div className="mb-8 md:mb-0">
          <img src='/icons/splice-image.svg' alt=""/>
          <p className="mt-2 text-sm md:w-[70%] font-regular text-[14px] text-[#656565]">
            All-in-one booking, payments and business management solution for
            Africa.
          </p>
          <p className="mt-4 flex items-center text-sm font-regular text-[14px] text-[#656565]">
            ✉️ <span className="ml-2">info@withsplice.com</span>
          </p>
        </div>

        {/* Links Section */}
        <div className="flex flex-col md:flex-row md:w-[60%] lg:w-[50%] justify-between">
          {/* Company Links */}
          <div className="mb-6 md:mb-0">
            <h3 className="font-bold text-[16px]">Company</h3>
            <ul className="mt-2 space-y-1.5 text-sm">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="hover:text-green-800 font-regular text-[14px] text-[#656565]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="mb-6 md:mb-0">
            <h3 className="font-semibold text-[16px]">Legal</h3>
            <ul className="mt-2 space-y-1.5 text-sm">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="hover:text-green-800 font-regular text-[14px] text-[#656565]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-[16px]">Social</h3>
            <ul className="mt-2 space-y-1.5 text-sm">
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="hover:text-green-800 font-regular text-[14px] text-[#656565]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t pt-8 text-xs text-gray-600 text-center md:text-left font-regular text-[14px] ">
        © Splice 2024. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
