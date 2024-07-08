import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[400px]" />
        <h1 className="text-4xl font-bold">Welcome to Our Electronics Store</h1>
        <Button onClick={() => navigate("/products")}>Shop Now</Button>
      </section>

      {/* Featured Products Section */}
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold text-center">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3].map((product) => (
            <Card key={product}>
              <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
              <CardHeader>
                <CardTitle>Product {product}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>$99.99</p>
              </CardContent>
              <CardFooter>
                <Button>Add to Cart</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold text-center">What Our Customers Say</h2>
        <div className="space-y-2">
          {[1, 2, 3].map((testimonial) => (
            <Card key={testimonial}>
              <CardContent>
                <p>"This is the best store ever!" - Customer {testimonial}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Newsletter Subscription Form */}
      <section className="text-center space-y-4">
        <h2 className="text-3xl font-semibold">Subscribe to Our Newsletter</h2>
        <div className="flex justify-center space-x-2">
          <Input placeholder="Enter your email" />
          <Button>Subscribe</Button>
        </div>
      </section>
    </div>
  );
};

export default Index;