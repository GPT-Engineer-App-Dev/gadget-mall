import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AboutUs = () => {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold text-center">About Us</h2>
        <p className="text-center">We are a leading electronics store committed to providing the best products and services to our customers.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-semibold text-center">Our Mission</h2>
        <p className="text-center">Our mission is to deliver high-quality electronics at affordable prices while ensuring excellent customer service.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-semibold text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3].map((member) => (
            <Card key={member}>
              <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
              <CardHeader>
                <CardTitle>Team Member {member}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Position {member}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;