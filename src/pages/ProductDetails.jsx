import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();

  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[400px] md:w-1/2" />
          <div className="space-y-4 md:w-1/2">
            <h2 className="text-3xl font-semibold">Product {id}</h2>
            <p className="text-xl">$99.99</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque leo nec sem facilisis, a tincidunt lorem tincidunt.</p>
            <Button>Add to Cart</Button>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold text-center">Customer Reviews</h2>
        <div className="space-y-2">
          {[1, 2, 3].map((review) => (
            <Card key={review}>
              <CardContent>
                <p>"This product is amazing!" - Customer {review}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;