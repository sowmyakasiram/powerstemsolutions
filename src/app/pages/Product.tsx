import { useState } from 'react';
import networkingImage from '../components/figma/networking.jpg';

type Product = {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  brands: string;
};

const products: Product[] = [
  {
    id: 1,
    name: 'Laptops & Notebooks',
    category: 'Computer Hardware',
    description: 'Business laptops, professional notebooks, workstations and personal computing devices.',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=900',
    brands: 'HP, Dell, Lenovo, ASUS, Acer, Apple',
  },
  {
    id: 2,
    name: 'Desktop Computers',
    category: 'Computer Hardware',
    description: 'High-performance desktops, custom-built PCs and enterprise computing systems.',
    image: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=900',
    brands: 'HP, Dell, Lenovo, ASUS, Acer',
  },
  {
    id: 3,
    name: 'Computer Components',
    category: 'Computer Hardware',
    description: 'Processors, motherboards, RAM, graphics cards, SSDs and computer components.',
    image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=900',
    brands: 'Intel, AMD, NVIDIA, Samsung, Kingston',
  },
  {
    id: 4,
    name: 'Servers & Storage',
    category: 'IT Infrastructure',
    description: 'Enterprise servers, NAS, SAN, data storage and data centre infrastructure.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900',
    brands: 'Dell, HPE, Lenovo, Synology, QNAP',
  },
  {
    id: 5,
    name: 'Networking Products',
    category: 'Networking',
    description: 'Enterprise routers, switches, wireless access points and network equipment.',
    image: networkingImage,
    brands: 'Cisco, TP-Link, Aruba, D-Link, Ubiquiti',
  },
  {
    id: 6,
    name: 'Firewall & Cybersecurity',
    category: 'Cybersecurity',
    description: 'Network firewalls, security appliances and enterprise network protection.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=900',
    brands: 'Fortinet, Sophos, Cisco, SonicWall',
  },
  {
    id: 7,
    name: 'CCTV & Surveillance',
    category: 'Security Systems',
    description: 'IP cameras, CCTV systems, NVR, DVR and video surveillance equipment.',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=900',
    brands: 'CP Plus, Hikvision, Dahua, Bosch',
  },
  {
    id: 8,
    name: 'Printers & Scanners',
    category: 'Office IT',
    description: 'Laser printers, inkjet printers, multifunction devices and document scanners.',
    image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=900',
    brands: 'HP, Canon, Epson, Brother',
  },
  {
    id: 9,
    name: 'Monitors & Displays',
    category: 'Computer Hardware',
    description: 'Professional monitors, LED displays, commercial screens and interactive panels.',
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=900',
    brands: 'Dell, LG, Samsung, BenQ, ASUS',
  },
  {
    id: 10,
    name: 'UPS & Power Backup',
    category: 'Power Solutions',
    description: 'Online UPS, rack-mounted UPS, batteries and power backup systems.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=900',
    brands: 'APC, Eaton, Vertiv, Numeric',
  },
  {
    id: 11,
    name: 'IT Accessories',
    category: 'IT Accessories',
    description: 'Keyboards, mouse, adapters, cables, connectors and computer accessories.',
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=900',
    brands: 'Logitech, Belkin, D-Link, Honeywell',
  },
  {
    id: 12,
    name: 'Video Conferencing',
    category: 'Enterprise Solutions',
    description: 'Conference cameras, microphones, speakers and meeting room equipment.',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900',
    brands: 'Logitech, Jabra, Poly, Yealink',
  },
];

const categories = [
  'All Products',
  'Computer Hardware',
  'IT Infrastructure',
  'Networking',
  'Cybersecurity',
  'Security Systems',
  'Office IT',
  'Power Solutions',
  'IT Accessories',
  'Enterprise Solutions',
];

const brands = [
  'HP',
  'Dell',
  'Lenovo',
  'ASUS',
  'Acer',
  'Canon',
  'Nikon',
  'Sony',
  'Cisco',
  'TP-Link',
  'Fortinet',
  'Logitech',
  'Samsung',
  'Epson',
];

export function ProductPage() {
  const [activeCategory, setActiveCategory] = useState('All Products');
  const [search, setSearch] = useState('');

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      activeCategory === 'All Products' ||
      product.category === activeCategory;

    const searchMatch = [
      product.name,
      product.category,
      product.description,
      product.brands,
    ]
      .join(' ')
      .toLowerCase()
      .includes(search.trim().toLowerCase());

    return categoryMatch && searchMatch;
  });

  const enquireProduct = (productName: string) => {
    try {
      sessionStorage.setItem('selectedProduct', productName);

      window.dispatchEvent(
        new CustomEvent('routechange', {
          detail: { href: '/contact' },
        })
      );
    } catch (error) {
      console.error('Unable to save product enquiry:', error);
      window.location.href = '/contact';
    }
  };

  const resetFilters = () => {
    setSearch('');
    setActiveCategory('All Products');
  };

  return (
    <main className="bg-white text-slate-900">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-slate-950 text-white">

        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1800"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-blue-950/70" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">

          <div className="max-w-3xl">

            <span className="text-blue-400 font-bold uppercase tracking-[3px] text-sm">
              Power Stem Solutions
            </span>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mt-6">
              Complete IT Hardware
              <span className="block text-blue-400">
                & Infrastructure Solutions
              </span>
            </h1>

            <p className="text-slate-300 text-lg leading-relaxed mt-7 max-w-2xl">
              Discover a complete range of computer hardware,
              enterprise IT infrastructure, networking,
              cybersecurity and technology products
              from trusted global brands.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <a
                href="#products"
                className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold transition"
              >
                Explore Products →
              </a>

              <button
                type="button"
                onClick={() => enquireProduct('General Product Enquiry')}
                className="border border-white/40 hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition"
              >
                Request a Quote
              </button>

            </div>

          </div>

        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-3 gap-10">

            <div>
              <h3 className="font-bold text-xl mb-3">
                Quality IT Products
              </h3>
              <p className="text-gray-500 leading-relaxed">
                Technology products from leading international
                manufacturers and trusted brands.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-3">
                Complete IT Infrastructure
              </h3>
              <p className="text-gray-500 leading-relaxed">
                Hardware, networking, servers, storage and
                enterprise infrastructure equipment.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-3">
                Business Requirements
              </h3>
              <p className="text-gray-500 leading-relaxed">
                Product recommendations and quotations for
                businesses, offices and institutions.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* PRODUCT SECTION */}
      <section id="products" className="bg-slate-50 py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-12">

            <span className="text-blue-600 uppercase tracking-widest text-sm font-bold">
              Our Product Portfolio
            </span>

            <h2 className="text-3xl md:text-5xl font-bold mt-4">
              Explore Our Products
            </h2>

            <p className="text-gray-500 mt-5 max-w-2xl mx-auto">
              Find the right hardware and IT infrastructure
              products for your personal and business requirements.
            </p>

          </div>

          {/* SEARCH */}
          <div className="max-w-2xl mx-auto mb-10">

            <div className="relative">

              <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400">
                ⌕
              </span>

              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products, categories or brands..."
                aria-label="Search products, categories or brands"
                className="w-full rounded-xl border border-gray-200 bg-white py-4 pl-12 pr-5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />

            </div>

          </div>

          {/* CATEGORY FILTER */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">

            {categories.map((category) => (

              <button
                type="button"
                key={category}
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
                className={`px-5 py-3 rounded-full text-sm font-semibold transition ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white border border-gray-200 text-gray-600 hover:border-blue-500 hover:text-blue-600'
                }`}
              >
                {category}
              </button>

            ))}

          </div>

          {/* PRODUCT COUNT */}
          <div className="flex flex-wrap justify-between items-center gap-3 mb-7">

            <p className="text-gray-500 text-sm">
              Showing <strong>{filteredProducts.length}</strong> products
            </p>

            <p className="text-gray-400 text-xs">
              Product availability subject to confirmation
            </p>

          </div>

          {/* PRODUCT GRID */}
          {filteredProducts.length > 0 && (

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">

              {filteredProducts.map((product) => (

                <article
                  key={product.id}
                  className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >

                  {/* IMAGE */}
                  <div className="relative h-56 bg-slate-100 overflow-hidden">

                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src =
                          'https://placehold.co/900x600/e2e8f0/334155?text=Product+Image';
                      }}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />

                    <span className="absolute top-4 left-4 bg-white/95 text-blue-700 text-xs font-bold px-3 py-2 rounded-full">
                      {product.category}
                    </span>

                  </div>

                  {/* CONTENT */}
                  <div className="p-6">

                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {product.name}
                    </h3>

                    <p className="text-sm text-gray-500 leading-relaxed min-h-[76px]">
                      {product.description}
                    </p>

                    <div className="border-t border-gray-100 mt-5 pt-4">

                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                        Available Brands
                      </p>

                      <p className="text-sm text-gray-700 leading-relaxed">
                        {product.brands}
                      </p>

                    </div>

                    <button
                      type="button"
                      onClick={() => enquireProduct(product.name)}
                      className="w-full mt-6 bg-slate-900 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition"
                    >
                      Enquire Now →
                    </button>

                  </div>

                </article>

              ))}

            </div>

          )}

          {/* EMPTY STATE */}
          {filteredProducts.length === 0 && (

            <div className="text-center py-20">

              <h3 className="text-2xl font-bold">
                No Products Found
              </h3>

              <p className="text-gray-500 mt-3">
                Please try another product name or category.
              </p>

              <button
                type="button"
                onClick={resetFilters}
                className="mt-6 text-blue-600 font-semibold hover:underline"
              >
                View All Products
              </button>

            </div>

          )}

        </div>
      </section>

      {/* INFRASTRUCTURE SECTION */}
      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-14 items-center">

            <div>

              <span className="text-blue-600 uppercase tracking-widest text-sm font-bold">
                Enterprise Technology
              </span>

              <h2 className="text-3xl md:text-5xl font-bold mt-5 leading-tight">
                Powering Your Business With Reliable IT Infrastructure
              </h2>

              <p className="text-gray-500 mt-6 leading-relaxed">
                From computer hardware procurement to complete
                enterprise infrastructure, we help businesses
                identify technology products that support their
                operational requirements.
              </p>

              <button
                type="button"
                onClick={() => enquireProduct('IT Infrastructure Requirement')}
                className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition"
              >
                Discuss Your Requirements →
              </button>

            </div>

            <div className="rounded-2xl overflow-hidden shadow-xl h-80 md:h-[450px]">

              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200"
                alt="Enterprise IT infrastructure"
                loading="lazy"
                className="w-full h-full object-cover"
              />

            </div>

          </div>

        </div>

      </section>

      {/* BRANDS SECTION */}
      <section className="bg-slate-950 py-20 text-white">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <span className="text-blue-400 uppercase tracking-widest text-sm font-bold">
            Trusted Technology Brands
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-5 mb-12">
            Products From Leading Brands
          </h2>

          <div className="flex flex-wrap justify-center gap-4">

            {brands.map((brand) => (

              <div
                key={brand}
                className="bg-white/10 border border-white/10 px-8 py-5 rounded-xl text-lg font-bold hover:bg-blue-600 transition"
              >
                {brand}
              </div>

            ))}

          </div>

          <p className="text-slate-400 text-sm mt-8">
            Brand and product availability may vary by requirement.
          </p>

        </div>

      </section>

      {/* CTA SECTION */}
      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="bg-blue-600 rounded-3xl px-8 py-16 md:p-20 text-center text-white">

            <h2 className="text-3xl md:text-5xl font-bold">
              Looking for IT Hardware or Infrastructure?
            </h2>

            <p className="text-blue-100 max-w-2xl mx-auto mt-6 leading-relaxed">
              Share your product requirements with our team.
              Get assistance with product selection, availability
              and quotations.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-9">

              <button
                type="button"
                onClick={() => enquireProduct('General Product Enquiry')}
                className="bg-white text-blue-700 hover:bg-slate-100 px-8 py-4 rounded-lg font-bold transition"
              >
                Request a Quotation →
              </button>

              <a
                href="https://powerstemsolutions.com/"
                className="border border-white/60 hover:bg-white hover:text-blue-700 px-8 py-4 rounded-lg font-bold transition"
              >
                Visit Our Website
              </a>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default ProductPage;