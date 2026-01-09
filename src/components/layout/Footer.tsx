
export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/alamra.png" 
                alt="Alamra Embroidery" 
                width={50} 
                height={50}
                className="h-12 w-12 object-contain"
              />
              <h3 className="font-playfair text-xl font-bold text-white">
                Alamra Embroidery
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-md">
              Crafting exquisite custom embroidery, badges, and precision pieces 
              with uncompromising attention to detail and quality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-semibold text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/products" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-primary-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 font-semibold text-white">
              Services
            </h4>
            <ul className="space-y-2">
              <li className="text-gray-300">Custom Embroidery</li>
              <li className="text-gray-300">Institutional Badges</li>
              <li className="text-gray-300">University Crests</li>
              <li className="text-gray-300">Government Insignia</li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-gray-700" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Alamra Embroidery. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="/privacy" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}