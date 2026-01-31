'use client';

import { useState } from 'react';
import { Translations } from '@/lib/translations';

interface PartnersFormProps {
  locale: string;
  t: Translations;
}

export default function PartnersForm({ locale, t }: PartnersFormProps) {
  const [formData, setFormData] = useState({
    type: '',
    name: '',
    email: '',
    phone: '',
    location: '',
    experience: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ type: '', name: '', email: '', phone: '', location: '', experience: '', message: '' });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const isRTL = locale === 'ar';

  const partnerBenefits = [
    t.partners.forPartners.benefits.benefit1,
    t.partners.forPartners.benefits.benefit2,
    t.partners.forPartners.benefits.benefit3,
    t.partners.forPartners.benefits.benefit4,
  ];

  const technicianBenefits = [
    t.partners.forTechnicians.benefits.benefit1,
    t.partners.forTechnicians.benefits.benefit2,
    t.partners.forTechnicians.benefits.benefit3,
    t.partners.forTechnicians.benefits.benefit4,
  ];

  return (
    <>
      {/* Partners & Technicians Sections */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* For Partners */}
          <div className="bg-white border border-neutral-200 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              {t.partners.forPartners.title}
            </h2>
            <h3 className="text-lg text-primary-600 mb-4">
              {t.partners.forPartners.subtitle}
            </h3>
            <p className="text-foreground-muted mb-6">
              {t.partners.forPartners.description}
            </p>
            <div className="mb-6">
              <h4 className="font-semibold text-foreground mb-3">
                {t.partners.forPartners.benefits.title}
              </h4>
              <ul className="space-y-2">
                {partnerBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2 text-foreground-muted">
                    <span className="text-primary-600 mt-1">✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* For Technicians */}
          <div className="bg-white border border-neutral-200 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              {t.partners.forTechnicians.title}
            </h2>
            <h3 className="text-lg text-primary-600 mb-4">
              {t.partners.forTechnicians.subtitle}
            </h3>
            <p className="text-foreground-muted mb-6">
              {t.partners.forTechnicians.description}
            </p>
            <div className="mb-6">
              <h4 className="font-semibold text-foreground mb-3">
                {t.partners.forTechnicians.benefits.title}
              </h4>
              <ul className="space-y-2">
                {technicianBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2 text-foreground-muted">
                    <span className="text-primary-600 mt-1">✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Application Form */}
      <div className="max-w-3xl mx-auto">
        <div className="bg-white border border-neutral-200 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-foreground mb-8 text-center">
            {t.partners.form.title}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="type" className="block text-sm font-medium text-foreground mb-2">
                {t.partners.form.type}
              </label>
              <select
                id="type"
                name="type"
                value={formData.type}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                dir={isRTL ? 'rtl' : 'ltr'}
              >
                <option value="">{locale === 'ar' ? 'اختر النوع' : 'Sélectionnez un type'}</option>
                <option value="partner">{t.partners.form.typePartner}</option>
                <option value="technician">{t.partners.form.typeTechnician}</option>
              </select>
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                {t.partners.form.name}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                dir={isRTL ? 'rtl' : 'ltr'}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  {t.partners.form.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  dir="ltr"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  {t.partners.form.phone}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  dir="ltr"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-foreground mb-2">
                  {t.partners.form.location}
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  dir={isRTL ? 'rtl' : 'ltr'}
                />
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-foreground mb-2">
                  {t.partners.form.experience}
                </label>
                <input
                  type="number"
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  min="0"
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  dir="ltr"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                {t.partners.form.message}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder={t.partners.form.messagePlaceholder}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                dir={isRTL ? 'rtl' : 'ltr'}
              />
            </div>

            {submitStatus === 'success' && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                {t.partners.form.success}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (locale === 'ar' ? 'جاري الإرسال...' : 'Envoi en cours...') : t.partners.form.submit}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
