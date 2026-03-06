"use client";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { sendMail } from "@/lib/send-mail";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name is too short" }),
  email: z.email({ message: "Invalid email address" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact({ t }: any) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (values: ContactFormData) => {
    try {
      const mailHtml = `
        <div style="font-family: serif; max-width: 600px; color: #1a1a1a;">
          <h2 style="color: #3a3a3a; border-bottom: 1px solid #d4d4d4; padding-bottom: 10px;">
            New Portfolio Inquiry
          </h2>
          <p><strong>From:</strong> ${values.name} (${values.email})</p>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 4px; margin-top: 20px; border-left: 4px solid #3a3a3a;">
            <p style="margin: 0; font-style: italic;">"${values.message}"</p>
          </div>
          <p style="font-size: 10px; color: #8a8a8a; margin-top: 20px; text-transform: uppercase; tracking: 0.1em;">
            Sent from rimanafougui.vercel.app
          </p>
        </div>
      `;

      const response = await sendMail({
        email: values.email,
        subject: `Inquiry from ${values.name}`,
        text: `Name: ${values.name}\nEmail: ${values.email}\nMessage: ${values.message}`,
        html: mailHtml,
      });

      if (response?.success) {
        toast.success("Message Received", {
          description: "I will respond to your inquiry shortly.",
        });
        reset();
      } else {
        toast.error("Submission Error", {
          description: "Please verify your details and try again.",
        });
      }
    } catch (error) {
      toast.error("An error occurred during submission.");
    }
  };

  const labelStyle =
    "block text-[10px] font-black uppercase tracking-[0.3em] text-cartier mb-4";
  const inputStyle =
    "w-full bg-transparent py-3 text-lg text-coffee outline-none transition-colors duration-300 placeholder:text-coffee/20";

  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-12 lg:px-24 bg-almond min-h-screen flex flex-col items-center"
    >
      <motion.div
        className="mb-20 text-center space-y-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif italic text-coffee">
          {t.title}
        </h2>
        <div className="h-1 w-24 bg-cartier mx-auto" />
      </motion.div>

      <motion.div
        className="w-full max-w-3xl"
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-almond/30 border border-gold/30 p-6 sm:p-10 md:p-16 space-y-10 md:space-y-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 md:gap-y-16">
            <div className="relative group border-b border-gold/40 focus-within:border-cartier transition-colors duration-300">
              <label htmlFor="name" className={labelStyle}>
                {t.name.label}
              </label>
              <input
                id="name"
                type="text"
                autoComplete="name"
                placeholder={t.name.placeholder}
                aria-describedby={errors.name ? "name-error" : undefined}
                aria-invalid={!!errors.name}
                {...register("name")}
                className={inputStyle}
              />
              {errors.name && (
                <span id="name-error" role="alert" className="text-red-600 text-xs mt-2 block">
                  {errors.name.message}
                </span>
              )}
            </div>

            <div className="relative group border-b border-gold/40 focus-within:border-cartier transition-colors duration-300">
              <label htmlFor="email" className={labelStyle}>
                {t.email.label}
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                placeholder={t.email.placeholder}
                aria-describedby={errors.email ? "email-error" : undefined}
                aria-invalid={!!errors.email}
                {...register("email")}
                className={inputStyle}
              />
              {errors.email && (
                <span id="email-error" role="alert" className="text-red-600 text-xs mt-2 block">
                  {errors.email.message}
                </span>
              )}
            </div>
          </div>

          <div className="relative group border-b border-gold/40 focus-within:border-cartier transition-colors duration-300">
            <label htmlFor="message" className={labelStyle}>
              {t.message.label}
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder={t.message.placeholder}
              aria-describedby={errors.message ? "message-error" : undefined}
              aria-invalid={!!errors.message}
              {...register("message")}
              className={`${inputStyle} resize-none`}
            />
            {errors.message && (
              <span id="message-error" role="alert" className="text-red-600 text-xs mt-2 block">
                {errors.message.message}
              </span>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 md:pt-8">
            <button
              type="submit"
              disabled={isSubmitting}
              aria-busy={isSubmitting}
              aria-live="polite"
              className="w-full sm:w-auto px-8 md:px-16 py-4 bg-cartier text-almond rounded-full font-bold text-base md:text-lg transition-all duration-500 shadow-md active:scale-95 disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cartier focus-visible:ring-offset-2"
            >
              {isSubmitting ? "Sending…" : t.submit}
            </button>

            <button
              type="button"
              onClick={() => reset()}
              className="w-full sm:w-auto px-8 md:px-16 py-4 border border-stone-300 text-coffee rounded-full font-bold text-base md:text-lg hover:bg-stone-100 transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cartier focus-visible:ring-offset-2"
            >
              {t.reset}
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
}
