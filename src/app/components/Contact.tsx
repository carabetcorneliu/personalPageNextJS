"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";
import { Mail, Clock10, Send } from "lucide-react";
import { SiTelegram } from "react-icons/si";
import type { ContactFormData, ContactInfo } from "@/types/contact";

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export function Contact() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ success?: boolean; message?: string }>(
    {}
  );

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({});

    try {
      const encode = (data: Record<string, string>) => {
        return Object.keys(data)
          .map(
            (key) =>
              encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
          )
          .join("&");
      };

      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setFormData(initialFormData);
        setStatus({
          success: true,
          message: "Thank you for your message! I'll get back to you soon.",
        });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus({
        success: false,
        message:
          "An error occurred while submitting the form. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClickHireMe = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
    const nameInput = document.getElementById("name");
    nameInput?.focus();
  };

  const contactInfo: ContactInfo[] = [
    {
      icon: Mail,
      label: "Email Me At",
      value: (
        <span style={{ unicodeBidi: "bidi-override", direction: "rtl" }}>
          <span>moc.liamg</span>
          <span>@</span>
          <span>uilenroc.tebarac</span>
        </span>
      ),
      link: "/go/email",
    },
    {
      icon: SiTelegram,
      label: "Telegram",
      value: (
        <span style={{ unicodeBidi: "bidi-override", direction: "rtl" }}>
          <span>uilenroC</span>
          <span>tebaraC</span>
          <span>@</span>
        </span>
      ),
      link: "/go/telegram",
      linkText: "Send an email",
    },
    {
      icon: Clock10,
      label: "Availability",
      value: (
        <>
          <span className="text-primary">Typically respond </span>
          <span className="text-blue-500">within </span>
          <span className="text-red-500">24 </span>
          <span className="text-primary">hours or less</span>
        </>
      ),
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Get In Touch
            </Badge>
            <h2 className="text-3xl md:text-4xl mb-6">{`Let's work together`}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {`I'm interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, I'll do my
              best to get back to you fast!`}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl mb-6">Send me a message</h3>
              <Card>
                <CardContent className="p-6">
                  <form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <input type="hidden" name="form-name" value="contact" />
                    <p className="hidden">
                      <label>
                        {`Don't fill this out if you're human:{" "}`}
                        <input name="bot-field" />
                      </label>
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm mb-2">
                          Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm mb-2">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        placeholder="Project inquiry"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        placeholder="Tell me about your project..."
                        rows={5}
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="text-xl mb-6">Contact information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <info.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">
                            {info.label}
                          </p>
                          <a
                            href={info.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                <Card className="bg-primary text-primary-foreground">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Available for Work
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm opacity-90 mb-4">
                      {`I'm currently available for freelance projects and
                      full-time opportunities. Let's discuss how we can work
                      together!`}
                    </p>
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={handleClickHireMe}
                    >
                      Hire Me
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
