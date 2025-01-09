import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-gradient text-white pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="fade-in">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold text-white mb-6 sm:text-5xl">happy holidays</h1>
              <p className="text-xl text-gray-200 mb-8">
                Terry's Cars offers a premium selection of quality vehicles with exceptional service and unbeatable prices.
              </p>
            </div>
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
              View Inventory <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Vehicles */}
      <section id="vehicles" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Vehicles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden fade-in">
                <div className="aspect-video bg-gray-200"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Luxury Sedan {i}</h3>
                  <p className="text-gray-600 mb-4">Starting from $29,999</p>
                  <Button variant="outline" className="w-full">Learn More</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Terry's Cars</h2>
              <p className="text-gray-600 mb-6">
                With over 20 years of experience in the automotive industry, Terry's Cars has built a reputation for excellence in customer service and quality vehicles.
              </p>
              <Button variant="outline">Learn Our Story</Button>
            </div>
            <div className="bg-gray-200 rounded-lg aspect-video"></div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Visit Us Today</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <MapPin className="mx-auto h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-gray-600">123 Car Street<br />Automotive City, AC 12345</p>
            </div>
            <div className="text-center">
              <Phone className="mx-auto h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-gray-600">(555) 123-4567</p>
            </div>
            <div className="text-center">
              <Mail className="mx-auto h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-600">info@terryscars.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;