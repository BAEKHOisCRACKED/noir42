import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiShoppingCart, 
  FiX, 
  FiPlus, 
  FiMinus, 
  FiEye,
  FiFilter,
  FiSearch
} from "react-icons/fi";
import "./App.css";

// Product data
const featuredProducts = [
  {
    id: 1,
    name: "Essential Black Tee",
    price: 89,
    image: "https://images.pexels.com/photos/3399996/pexels-photo-3399996.jpeg",
    description: "Premium cotton blend with revolutionary fit",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Charcoal", "Midnight"]
  },
  {
    id: 2,
    name: "Noir Signature Tee",
    price: 95,
    image: "https://images.unsplash.com/photo-1652822467201-b7efea923b25",
    description: "Minimalist luxury with subtle branding",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Dark Grey", "Shadow"]
  },
  {
    id: 3,
    name: "Revolution Tee",
    price: 79,
    image: "https://images.pexels.com/photos/7649118/pexels-photo-7649118.jpeg",
    description: "Statement piece for the modern rebel",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Noir", "Eclipse"]
  }
];

const catalogProducts = [
  ...featuredProducts,
  {
    id: 4,
    name: "Urban Shadow Tee",
    price: 85,
    image: "https://images.pexels.com/photos/7598668/pexels-photo-7598668.jpeg",
    description: "Textured premium fabric with attitude",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Charcoal"]
  },
  {
    id: 5,
    name: "Minimal Noir Tee",
    price: 92,
    image: "https://images.pexels.com/photos/9944851/pexels-photo-9944851.jpeg",
    description: "Clean lines, maximum impact",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Deep Grey"]
  },
  {
    id: 6,
    name: "Classic Dark Tee",
    price: 88,
    image: "https://images.unsplash.com/photo-1518419973-a5f458580a50",
    description: "Timeless design, revolutionary quality",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Midnight", "Carbon"]
  },
  {
    id: 7,
    name: "Street Noir Tee",
    price: 90,
    image: "https://images.pexels.com/photos/7649105/pexels-photo-7649105.jpeg",
    description: "Urban luxury redefined",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Shadow"]
  },
  {
    id: 8,
    name: "Premium Dark Tee",
    price: 94,
    image: "https://images.pexels.com/photos/6041618/pexels-photo-6041618.jpeg",
    description: "Elevated streetwear essential",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Charcoal", "Onyx"]
  },
  {
    id: 9,
    name: "Lifestyle Noir Tee",
    price: 87,
    image: "https://images.unsplash.com/photo-1507831041068-539748fc3c3b",
    description: "Where comfort meets revolution",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Dark Grey"]
  }
];

// Components
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1595065666634-4725aa7e8379')`,
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight"
        >
          NOIR <span className="text-gray-400">42</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 font-light tracking-wide"
        >
          Revolutionizing Fashion Through Subtle Luxury
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="bg-white text-black px-8 py-4 text-lg font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105">
            EXPLORE COLLECTION
          </button>
          <button className="border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300">
            WATCH STORY
          </button>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

const ProductCard = ({ product, onQuickView, onAddToCart }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="relative group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative overflow-hidden bg-gray-900 rounded-lg">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-black/50 flex items-center justify-center gap-4"
        >
          <button 
            onClick={() => onQuickView(product)}
            className="bg-white text-black p-3 rounded-full hover:bg-gray-200 transition-colors"
          >
            <FiEye size={20} />
          </button>
          <button 
            onClick={() => onAddToCart(product)}
            className="bg-white text-black p-3 rounded-full hover:bg-gray-200 transition-colors"
          >
            <FiShoppingCart size={20} />
          </button>
        </motion.div>
      </div>
      
      <div className="mt-4 text-center">
        <h3 className="text-white text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-400 text-sm mb-2">{product.description}</p>
        <p className="text-white text-xl font-bold">${product.price}</p>
      </div>
    </motion.div>
  );
};

const QuickViewModal = ({ product, isOpen, onClose, onAddToCart }) => {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
          onClick={onClose}
        >
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-gray-900 rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">{product.name}</h2>
              <button onClick={onClose} className="text-white hover:text-gray-300">
                <FiX size={24} />
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-80 object-cover rounded-lg"
                />
              </div>
              
              <div>
                <p className="text-gray-300 mb-4">{product.description}</p>
                <p className="text-white text-2xl font-bold mb-6">${product.price}</p>
                
                {/* Size Selection */}
                <div className="mb-4">
                  <label className="block text-white mb-2">Size</label>
                  <div className="flex gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 border ${
                          selectedSize === size 
                            ? 'border-white bg-white text-black' 
                            : 'border-gray-600 text-white hover:border-white'
                        } transition-colors`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Color Selection */}
                <div className="mb-6">
                  <label className="block text-white mb-2">Color</label>
                  <div className="flex gap-2">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-4 py-2 border ${
                          selectedColor === color 
                            ? 'border-white bg-white text-black' 
                            : 'border-gray-600 text-white hover:border-white'
                        } transition-colors`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
                
                <button 
                  onClick={() => {
                    onAddToCart(product, selectedSize, selectedColor);
                    onClose();
                  }}
                  disabled={!selectedSize || !selectedColor}
                  className="w-full bg-white text-black py-3 font-semibold hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const ShoppingCart = ({ isOpen, onClose, cartItems, updateQuantity, removeItem }) => {
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 flex items-center justify-end p-4 z-50"
          onClick={onClose}
        >
          <motion.div 
            initial={{ x: 400 }}
            animate={{ x: 0 }}
            exit={{ x: 400 }}
            className="bg-gray-900 h-full w-full max-w-md p-6 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Shopping Cart</h2>
              <button onClick={onClose} className="text-white hover:text-gray-300">
                <FiX size={24} />
              </button>
            </div>
            
            {cartItems.length === 0 ? (
              <p className="text-gray-400 text-center">Your cart is empty</p>
            ) : (
              <>
                <div className="space-y-4 mb-6">
                  {cartItems.map((item) => (
                    <div key={`${item.id}-${item.size}-${item.color}`} className="flex gap-4 bg-gray-800 p-4 rounded-lg">
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                      <div className="flex-1">
                        <h3 className="text-white font-semibold">{item.name}</h3>
                        <p className="text-gray-400 text-sm">{item.size} • {item.color}</p>
                        <p className="text-white font-bold">${item.price}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="text-white hover:text-gray-300"
                          >
                            <FiMinus size={16} />
                          </button>
                          <span className="text-white">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="text-white hover:text-gray-300"
                          >
                            <FiPlus size={16} />
                          </button>
                        </div>
                      </div>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-red-400 hover:text-red-300"
                      >
                        <FiX size={20} />
                      </button>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-gray-700 pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-white text-lg font-semibold">Total:</span>
                    <span className="text-white text-2xl font-bold">${total}</span>
                  </div>
                  <button className="w-full bg-white text-black py-3 font-semibold hover:bg-gray-200 transition-colors">
                    CHECKOUT
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [priceFilter, setPriceFilter] = useState("all");

  const filteredProducts = catalogProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = priceFilter === "all" || 
      (priceFilter === "under90" && product.price < 90) ||
      (priceFilter === "90plus" && product.price >= 90);
    return matchesSearch && matchesPrice;
  });

  const handleQuickView = (product) => {
    setSelectedProduct(product);
    setIsQuickViewOpen(true);
  };

  const handleAddToCart = (product, size = "M", color = "Black") => {
    const cartItem = {
      ...product,
      size,
      color,
      quantity: 1
    };

    setCartItems(prev => {
      const existingItem = prev.find(item => 
        item.id === product.id && item.size === size && item.color === color
      );
      
      if (existingItem) {
        return prev.map(item => 
          item.id === product.id && item.size === size && item.color === color
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      return [...prev, cartItem];
    });
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeItem(id);
      return;
    }
    
    setCartItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="bg-black min-h-screen">
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-40 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-white">NOIR <span className="text-gray-400">42</span></div>
          <button 
            onClick={() => setIsCartOpen(true)}
            className="relative text-white hover:text-gray-300 transition-colors"
          >
            <FiShoppingCart size={24} />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-white text-black text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <Hero />

      {/* Featured Collections */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Featured Collection</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Discover our most revolutionary pieces. Each design represents our commitment to 
              redefining luxury streetwear through simplicity and quality.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <ProductCard 
                  product={product}
                  onQuickView={handleQuickView}
                  onAddToCart={handleAddToCart}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Philosophy */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Revolutionizing Fashion</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              At NOIR 42, we believe in the power of subtlety. Our designs speak to those who understand 
              that true luxury doesn't need to shout. Every piece is crafted with meticulous attention 
              to detail, premium materials, and a vision that challenges conventional streetwear.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Quality</h3>
                <p className="text-gray-400">Premium materials sourced globally for unmatched comfort and durability.</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Simplicity</h3>
                <p className="text-gray-400">Clean designs that make powerful statements without unnecessary complexity.</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Innovation</h3>
                <p className="text-gray-400">Constantly pushing boundaries to redefine what luxury streetwear can be.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Catalog */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Complete Catalog</h2>
            <p className="text-gray-400 text-lg">Explore our full range of revolutionary streetwear</p>
          </motion.div>
          
          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <div className="relative flex-1">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input 
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-gray-900 text-white pl-10 pr-4 py-3 rounded-lg border border-gray-700 focus:border-white transition-colors"
              />
            </div>
            <select 
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
              className="bg-gray-900 text-white px-4 py-3 rounded-lg border border-gray-700 focus:border-white transition-colors"
            >
              <option value="all">All Prices</option>
              <option value="under90">Under $90</option>
              <option value="90plus">$90+</option>
            </select>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product.id}
                product={product}
                onQuickView={handleQuickView}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle Section */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1504805572947-34fad45aed93" 
                alt="Do Something Great" 
                className="w-full rounded-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center md:text-left"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Do Something Great</h2>
              <p className="text-gray-300 text-lg mb-8">
                Fashion is more than clothing—it's a statement of intent. Every piece you wear 
                tells your story. Make it revolutionary.
              </p>
              <button className="bg-white text-black px-8 py-4 text-lg font-semibold hover:bg-gray-200 transition-colors">
                JOIN THE REVOLUTION
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-3xl font-bold text-white mb-6">NOIR <span className="text-gray-400">42</span></div>
          <p className="text-gray-400 mb-8">Revolutionizing fashion through subtle luxury</p>
          <div className="flex justify-center gap-8 mb-8">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">About</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Size Guide</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Returns</a>
          </div>
          <p className="text-gray-600 text-sm">© 2024 NOIR 42. All rights reserved.</p>
        </div>
      </footer>

      {/* Modals */}
      <QuickViewModal 
        product={selectedProduct}
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
        onAddToCart={handleAddToCart}
      />
      
      <ShoppingCart 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        updateQuantity={updateQuantity}
        removeItem={removeItem}
      />
    </div>
  );
}

export default App;