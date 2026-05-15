import { useState } from "react";
import FormInput from "../../components/FormInput";
import SuccessMessage from "../../components/SuccessMessage";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });

    setSuccess(false);
  }

  function validateForm() {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please write a message.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Your message must be at least 10 characters.";
    }

    return newErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess(false);
      return;
    }

    setSuccess(true);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-white px-6 py-28">
      <div className="absolute left-8 top-24 h-32 w-32 rounded-full bg-pink-100"></div>
      <div className="absolute bottom-24 right-8 h-40 w-40 rounded-full bg-purple-100"></div>

      <div className="relative z-10 mx-auto max-w-4xl">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-pink-500">
            Contact
          </p>

          <h1 className="mt-4 text-4xl font-extrabold text-black sm:text-5xl">
            Let&apos;s{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Connect
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-gray-600">
            Have a question, project idea or collaboration request? Send me a
            message and I&apos;ll get back to you as soon as possible.
          </p>
        </div>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="relative mt-16 rounded-[2rem] bg-white p-6 shadow-2xl sm:p-10"
        >
          <input type="hidden" name="form-name" value="contact" />

          <p className="hidden">
            <label>
              Don&apos;t fill this out if you&apos;re human:
              <input name="bot-field" />
            </label>
          </p>

          <div className="absolute -left-3 -top-3 -z-10 h-full w-full rounded-[2rem] bg-pink-200"></div>
          <div className="absolute -right-3 -bottom-3 -z-10 h-full w-full rounded-[2rem] bg-purple-200"></div>

          {success && <SuccessMessage />}

          <div className="grid gap-6">
            <FormInput
              label="Name"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
              placeholder="Your name"
            />

            <FormInput
              label="Email"
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              placeholder="you@example.com"
            />

            <FormInput
              label="Message"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              error={errors.message}
              placeholder="Write your message..."
              textarea
            />

            <button
              type="submit"
              className="rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-4 font-semibold text-white shadow-lg transition duration-300 hover:scale-105"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;