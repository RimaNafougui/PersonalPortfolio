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
        <div style="font-family: serif; max-width: 600px; color: #3C2A21;">
          <h2 style="color: #A02021; border-bottom: 1px solid #D4C3A3; padding-bottom: 10px;">
            New Portfolio Inquiry
          </h2>
          <p><strong>From:</strong> ${values.name} (${values.email})</p>
          <div style="background-color: #F5F2ED; padding: 20px; border-radius: 4px; margin-top: 20px; border-left: 4px solid #A02021;">
            <p style="margin: 0; font-style: italic;">"${values.message}"</p>
          </div>
          <p style="font-size: 10px; color: #D4C3A3; margin-top: 20px; text-transform: uppercase; tracking: 0.1em;">
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
            <div className="relative group">
              <label htmlFor="name" className={labelStyle}>
                {t.name.label}
              </label>
              <input
                id="name"
                type="text"
                placeholder={t.name.placeholder}
                {...register("name")}
                className={inputStyle}
              />
              {errors.name && (
                <span className="text-cartier text-xs mt-2 block">
                  {errors.name.message}
                </span>
              )}
            </div>

            <div className="relative group">
              <label htmlFor="email" className={labelStyle}>
                {t.email.label}
              </label>
              <input
                id="email"
                type="email"
                placeholder={t.email.placeholder}
                {...register("email")}
                className={inputStyle}
              />
              {errors.email && (
                <span className="text-cartier text-xs mt-2 block">
                  {errors.email.message}
                </span>
              )}
            </div>
          </div>

          <div className="relative group">
            <label htmlFor="message" className={labelStyle}>
              {t.message.label}
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder={t.message.placeholder}
              {...register("message")}
              className={`${inputStyle} resize-none`}
            />
            {errors.message && (
              <span className="text-cartier text-xs mt-2 block">
                {errors.message.message}
              </span>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 md:pt-8">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto px-8 md:px-16 py-4 bg-cartier text-gold rounded-full font-bold text-base md:text-lg transition-all duration-500 shadow-md active:scale-95 disabled:opacity-50"
            >
              {isSubmitting ? "..." : t.submit}
            </button>

            <button
              type="button"
              onClick={() => reset()}
              className="w-full sm:w-auto px-8 md:px-16 py-4 border border-coffee/20 text-coffee rounded-full font-bold text-base md:text-lg hover:bg-coffee/5 transition-all duration-500"
            >
              {t.reset}
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
}
