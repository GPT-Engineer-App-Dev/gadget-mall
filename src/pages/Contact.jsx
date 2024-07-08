import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold text-center">Contact Us</h2>
        <form className="space-y-4 max-w-lg mx-auto">
          <Input placeholder="Name" />
          <Input placeholder="Email" />
          <Input placeholder="Subject" />
          <Textarea placeholder="Message" />
          <Button type="submit">Send Message</Button>
        </form>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-semibold text-center">Our Contact Information</h2>
        <p className="text-center">Address: 123 Electronics Ave, Tech City</p>
        <p className="text-center">Phone: (123) 456-7890</p>
        <p className="text-center">Email: contact@electronics.com</p>
      </section>
    </div>
  );
};

export default Contact;