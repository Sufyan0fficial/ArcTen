'use client';

import { useState, FormEvent } from 'react';

interface FormData {
  companyName: string;
  email: string;
  phone: string;
  productInterest: string;
  estimatedQuantity: string;
  additionalNotes: string;
}

export default function QuoteForm() {
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    email: '',
    phone: '',
    productInterest: '',
    estimatedQuantity: '',
    additionalNotes: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('http://localhost:5000/api/quote-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setMessage(data.message);
        setFormData({
          companyName: '',
          email: '',
          phone: '',
          productInterest: '',
          estimatedQuantity: '',
          additionalNotes: '',
        });
      } else {
        setStatus('error');
        setMessage(data.message);
      }
    } catch {
      setStatus('error');
      setMessage('Network error. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <h3 className="font-heading text-2xl text-primary mb-2">Quote Request Received</h3>
        <p className="text-muted">{message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="companyName" className="block text-sm font-medium text-text mb-2">
            Company Name *
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
            placeholder="Your Company"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
            Business Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
            placeholder="you@company.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-text mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
            placeholder="+1 (555) 000-0000"
          />
        </div>

        <div>
          <label htmlFor="productInterest" className="block text-sm font-medium text-text mb-2">
            Product Interest *
          </label>
          <select
            id="productInterest"
            name="productInterest"
            value={formData.productInterest}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all bg-white"
          >
            <option value="">Select a product category</option>
            <option value="leather-jackets">Leather Jackets</option>
            <option value="leather-bags">Leather Bags</option>
            <option value="both">Both Jackets & Bags</option>
            <option value="custom">Custom / Other</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="estimatedQuantity" className="block text-sm font-medium text-text mb-2">
          Estimated Quantity *
        </label>
        <select
          id="estimatedQuantity"
          name="estimatedQuantity"
          value={formData.estimatedQuantity}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all bg-white"
        >
          <option value="">Select quantity range</option>
          <option value="50-100">50 - 100 units</option>
          <option value="100-500">100 - 500 units</option>
          <option value="500-1000">500 - 1,000 units</option>
          <option value="1000-5000">1,000 - 5,000 units</option>
          <option value="5000+">5,000+ units</option>
        </select>
      </div>

      <div>
        <label htmlFor="additionalNotes" className="block text-sm font-medium text-text mb-2">
          Additional Notes
        </label>
        <textarea
          id="additionalNotes"
          name="additionalNotes"
          value={formData.additionalNotes}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all resize-none"
          placeholder="Tell us about your project requirements, customization needs, timeline, etc."
        />
      </div>

      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {message}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Submitting...' : 'Submit Quote Request'}
      </button>

      <p className="text-sm text-muted text-center">
        We typically respond within 24 business hours.
      </p>
    </form>
  );
}
