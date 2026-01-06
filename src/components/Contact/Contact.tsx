"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Clock10, Send } from "lucide-react";
import { SiTelegram } from "react-icons/si";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle, Loader2 } from "lucide-react";
import { toast } from "sonner";
import type { ContactFormData, ContactInfo } from "@/types/contact";

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
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

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ success?: boolean; message?: string }>(
    {}
  );
  const [isSuccess, setIsSuccess] = useState(false);
  const [progress, setProgress] = useState(0);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const successTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (status.message) {
      const timer = setTimeout(() => {
        if (status.success) {
          toast.success(status.message);
        } else {
          toast.error(status.message);
        }
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  useEffect(() => {
    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
      if (successTimeoutRef.current) {
        clearTimeout(successTimeoutRef.current);
      }
    };
  }, []);

  // Form submission time recording for spam detection
  const [formStartTime] = useState(Date.now());

  const handleInputChange = useCallback((
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if form was filled too quickly (less than 3 seconds)
    const timeElapsed = (Date.now() - formStartTime) / 1000;
    if (timeElapsed < 3) {
      console.log("Submission too fast - likely a bot");
      return;
    }

    setIsSubmitting(true);
    setStatus({});
    setProgress(0);

    // Start progress simulation
    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) return prev;
        return prev + 10;
      });
    }, 150);

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
          "bot-field": "",
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        if (progressIntervalRef.current) {
          clearInterval(progressIntervalRef.current);
        }
        setProgress(100);
        setStatus({
          success: true,
          message: "Thank you for your message! I'll get back to you soon.",
        });
        setIsSuccess(true);

        successTimeoutRef.current = setTimeout(() => {
          setFormData(initialFormData);
          setIsSuccess(false);
          setProgress(0);
        }, 3000);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
      setProgress(0);
      setStatus({
        success: false,
        message:
          "An error occurred while submitting the form. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, formStartTime]);

  const handleClickHireMe = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      const nameInput = document.getElementById("name");
      nameInput?.focus();
    }, 600);
  }, []);

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
                    <p className="hidden" aria-hidden="true">
                      <label>
                        {`Don't fill this out if you're human:{" "}`}
                        <input
                          name="bot-field"
                          tabIndex={-1}
                          autoComplete="off"
                        />
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
                    {/* animation start */}
                    <div className="space-y-2">
                      <motion.div
                        animate={{
                          width: isSuccess
                            ? "100%"
                            : isSubmitting
                              ? "100%"
                              : "100%",
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <Button
                          type="submit"
                          size="lg"
                          className="w-full relative overflow-hidden"
                          disabled={isSubmitting || isSuccess}
                        >
                          <AnimatePresence mode="wait">
                            {isSuccess ? (
                              <motion.div
                                key="success"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="flex items-center gap-2"
                              >
                                <CheckCircle className="h-5 w-5" />
                                <span>Success!</span>
                              </motion.div>
                            ) : isSubmitting ? (
                              <motion.div
                                key="loading"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="flex items-center gap-2"
                              >
                                <Loader2 className="h-4 w-4 animate-spin" />
                                <span>Sending... {progress}%</span>
                              </motion.div>
                            ) : (
                              <motion.div
                                key="idle"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="flex items-center gap-2"
                              >
                                <Send className="h-4 w-4" />
                                <span>Send Message</span>
                              </motion.div>
                            )}
                          </AnimatePresence>

                          {/* Progress bar background */}
                          {isSubmitting && (
                            <motion.div
                              className="absolute left-0 top-0 h-full bg-primary-foreground/20"
                              initial={{ width: "0%" }}
                              animate={{ width: `${progress}%` }}
                              transition={{ duration: 0.2 }}
                            />
                          )}
                        </Button>
                      </motion.div>
                    </div>
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
