// Types for the Contact component and related functionality

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactInfo {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title?: string;
  label?: string;
  description?: string | React.ReactNode;
  value?: string | React.ReactNode;
  link?: string;
  linkText?: string;
}

export interface ContactFormProps {
  formData: ContactFormData;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  isSubmitting?: boolean;
  status?: {
    success?: boolean;
    message?: string;
  };
}
