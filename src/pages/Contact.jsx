import { useTranslation } from "react-i18next";
import Button from "../components/Button";
import { Mail, Phone } from "lucide-react";
import Footer from "../components/Footer";

const ContactPage = () => {
  const { t } = useTranslation();

  return (
    <div className="h-screen flex flex-col">
    <div className="bg-background">
      {/* Hero Section */}
      <div className="relative py-8 px-4 sm:px-6 lg:px-8 pt-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            {t("contact.contactTitle")}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t("contact.contactDescription")}
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Details */}
            <div className="space-y-8">
              <div className="space-y-6">
                {/* Email Card */}
                <div className="bg-card rounded-lg border-2 border-border p-8 
                                hover:border-black hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-accent rounded-full">
                      <Mail className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-foreground">
                        {t("contact.emailTitle")}
                      </h3>
                      <a
                        href={`mailto:${t("contact.contactEmail")}`}
                        className="text-accent hover:text-yellow-500 transition-colors font-medium"
                      >
                        {t("contact.contactEmail")}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="bg-card rounded-lg border-2 border-border p-8 
                                hover:border-black hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-accent rounded-full">
                      <Phone className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-lg text-foreground">
                        {t("contact.phoneTitle")}
                      </h3>
                      <div className="space-y-2">
                        <a
                          href={`tel:${t("contact.contactPhoneUSA").replace(/[^+\d]/g, "")}`}
                          className="block text-accent hover:text-yellow-500 transition-colors font-medium"
                        >
                          {t("contact.contactPhoneUSA")}
                        </a>
                        <a
                          href={`tel:${t("contact.contactPhoneMX").replace(/[^+\d]/g, "")}`}
                          className="block text-accent hover:text-yellow-500 transition-colors font-medium"
                        >
                          {t("contact.contactPhoneMX")}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center">
                <Button
                  size="lg"
                  title={t("contact.contactButton")}
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card rounded-lg border-2 border-border p-8 hover:border-black hover:shadow-lg transition-all duration-300">
              <h2 className="text-2xl font-bold mb-6 text-foreground">
                {t("contact.formTitle")}
              </h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      {t("contact.formName")}
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                      placeholder={t("contact.formNamePlaceholder")}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      {t("contact.formEmail")}
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                      placeholder={t("contact.formEmailPlaceholder")}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    {t("contact.formSubject")}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                    placeholder={t("contact.formSubjectPlaceholder")}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    {t("contact.formMessage")}
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors resize-none"
                    placeholder={t("contact.formMessagePlaceholder")}
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  title={t("contact.formButton")}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default ContactPage;
