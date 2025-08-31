import { Music, Mail, Twitter, Github, Linkedin } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black py-24 px-6 border-t border-gray-800 mt-auto">
      <div className="max-w-6xl mx-auto">
        {/* Footer Links */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <Music className="w-8 h-8 text-purple-400 mr-2" />
              <a href="https://dimmer-maui.vercel.app/">
                <span className="text-2xl font-bold text-white">Dimmer</span>
              </a>
            </div>
            <p className="text-gray-400 mb-4">
              Cherish your local music libraries
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:8brunel@gmail.com"
                target="_blank"
                className="social-icon text-purple-400 hover:text-pink-400 transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a
                href="https://x.com/YBTopaz8"
                target="_blank"
                className="social-icon text-purple-400 hover:text-pink-400 transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/yvan-brunel-a5257816b/"
                target="_blank"
                className="social-icon text-purple-400 hover:text-pink-400 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/YBTopaz8"
                target="_blank"
                className="social-icon text-purple-400 hover:text-pink-400 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Product</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="https://github.com/YBTopaz8/Dimmer-MAUI/wiki"
                  target="_blank"
                  className="hover:text-purple-400 transition-colors"
                >
                  Features
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/YBTopaz8/Dimmer-MAUI/releases"
                  target="_blank"
                  className="hover:text-purple-400 transition-colors"
                >
                  Downloads
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/YBTopaz8/Dimmer-MAUI?tab=readme-ov-file#readme"
                  target="_blank"
                  className="hover:text-purple-400 transition-colors"
                >
                  What's New
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="https://github.com/YBTopaz8/Dimmer-MAUI/discussions"
                  target="_blank"
                  className="hover:text-purple-400 transition-colors"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="mailto:8brunel@gmail.com"
                  target="_blank"
                  className="hover:text-purple-400 transition-colors"
                >
                  Contact Me
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/YBTopaz8/Dimmer-MAUI/issues/new"
                  target="_blank"
                  className="hover:text-purple-400 transition-colors"
                >
                  Bug Reports
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Hire Me</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="https://github.com/YBTopaz8"
                  target="_blank"
                  className="hover:text-purple-400 transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://flowcv.me/ybtopaz"
                  target="_blank"
                  className="hover:text-purple-400 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/yvan-brunel-a5257816b/"
                  target="_blank"
                  className="hover:text-purple-400 transition-colors"
                >
                  Career
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Yvan Brunel Tegaboue. All rights
            reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="https://github.com/YBTopaz8/Dimmer-MAUI"
              target="_blank"
              className="hover:text-purple-400 transition-colors"
            >
              Contribute
            </a>
            <a
              href="https://github.com/YBTopaz8/Dimmer-MAUI?tab=MIT-1-ov-file"
              target="_blank"
              className="hover:text-purple-400 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
