const Footer = () => {
  return (
    <footer>
      <div className="bg-[#1a1f3a] w-full">
        <div className="max-w-7xl mx-auto px-10 py-12 flex flex-col lg:flex-row items-center justify-around gap-10">
          {/* Contact Us */}
          {/* Contact Us */}
          <div className="text-center lg:text-left">
            <h3 className="text-white text-lg font-semibold tracking-widest uppercase mb-5">
              Contact Us
            </h3>
            <div className="flex flex-col gap-3 text-slate-400 text-sm">
              <div className="flex items-center gap-3">
                <svg
                  className="w-4 h-4 shrink-0 text-slate-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>123 ABS Street, Uni 21, Bangladesh</span>
              </div>

              <div className="flex items-center gap-3">
                <svg
                  className="w-4 h-4 shrink-0 text-slate-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.1 1.18 2 2 0 012.11 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.45-.45a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                <span>+88 123456789</span>
              </div>

              <div className="flex items-center gap-3">
                <svg
                  className="w-4 h-4 shrink-0 text-slate-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                <span>Mon - Fri: 08:00 - 22:00</span>
              </div>

              <div className="flex items-center gap-3">
                <svg
                  className="w-4 h-4 shrink-0 text-slate-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                <span>Sat - Sun: 10:00 - 23:00</span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-px h-32 bg-slate-600/50"></div>

          {/* Follow Us */}
          <div className="text-center">
            <h3 className="text-white text-lg font-semibold tracking-widest uppercase mb-5">
              Follow Us
            </h3>
            <p className="text-slate-400 text-sm mb-5">
              Join us on social media
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-[#2a3057] flex items-center justify-center hover:bg-[#1877F2] transition-all duration-300 hover:scale-110"
              >
                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-[#2a3057] flex items-center justify-center hover:bg-[#E1306C] transition-all duration-300 hover:scale-110"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line
                    x1="17.5"
                    y1="6.5"
                    x2="17.51"
                    y2="6.5"
                    strokeLinecap="round"
                  />
                </svg>
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-[#2a3057] flex items-center justify-center hover:bg-[#1DA1F2] transition-all duration-300 hover:scale-110"
              >
                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#141830] w-full text-center py-4 text-slate-500 text-sm border-t border-[#252a4a]">
        Copyright &copy; {new Date().getFullYear()} CulinaryCloud. All rights
        reserved.
      </div>
    </footer>
  );
};
export default Footer;
