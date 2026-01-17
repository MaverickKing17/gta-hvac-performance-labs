import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const response = await fetch("https://formspree.io/f/mkoooawa", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-royal-200 via-royal-600 to-royal-200"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-base font-bold text-royal-600 tracking-wide uppercase">Get In Touch</h2>
                <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">Ready to Restore Your Comfort?</h2>
                <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
                    Don't let a heating issue leave you in the cold. Contact Brendon today for fast, honest service.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                
                {/* Contact Info Column */}
                <div className="space-y-8">
                     {/* Primary CTA Card */}
                     <div className="bg-royal-50 p-8 rounded-2xl border border-royal-100 flex flex-col sm:flex-row items-start sm:items-center gap-6 shadow-sm hover:shadow-md transition-shadow">
                        <div className="bg-royal-600 text-white p-4 rounded-xl shadow-lg shadow-royal-200 shrink-0">
                             <Phone size={32} />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-900">Emergency & Booking</h3>
                            <p className="text-gray-500 mb-1">Available for urgent calls</p>
                            <a href="tel:+19055550123" className="text-2xl sm:text-3xl font-extrabold text-royal-700 hover:text-royal-800 transition-colors block">
                                (905) 555-0123
                            </a>
                        </div>
                     </div>

                     {/* Contact Details List */}
                     <div className="space-y-8 pl-2 sm:pl-4">
                        <div className="flex items-start gap-4">
                             <div className="w-10 h-10 bg-white border border-royal-100 rounded-full flex items-center justify-center text-royal-600 shadow-sm shrink-0">
                                <Mail size={20} />
                             </div>
                             <div>
                                <p className="text-sm font-bold text-gray-900 uppercase tracking-wide">Email</p>
                                <a href="mailto:b.aldridge@drhvac.ca" className="text-lg text-gray-600 hover:text-royal-600 transition-colors">b.aldridge@drhvac.ca</a>
                             </div>
                        </div>
                        
                        <div className="flex items-start gap-4">
                             <div className="w-10 h-10 bg-white border border-royal-100 rounded-full flex items-center justify-center text-royal-600 shadow-sm shrink-0">
                                <MapPin size={20} />
                             </div>
                             <div>
                                <p className="text-sm font-bold text-gray-900 uppercase tracking-wide">Service Area</p>
                                <p className="text-lg text-gray-600">Proudly serving Brampton & Peel Region</p>
                             </div>
                        </div>

                        <div className="flex items-start gap-4">
                             <div className="w-10 h-10 bg-white border border-royal-100 rounded-full flex items-center justify-center text-royal-600 shadow-sm shrink-0">
                                <Clock size={20} />
                             </div>
                             <div>
                                <p className="text-sm font-bold text-gray-900 uppercase tracking-wide">Business Hours</p>
                                <p className="text-lg text-gray-600">Mon - Sat: 7:00 AM - 8:00 PM</p>
                                <p className="text-sm text-royal-600 font-medium">Sunday: Emergency Appointments</p>
                             </div>
                        </div>
                     </div>
                </div>

                {/* Lead Generation Form */}
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 sm:p-10 relative overflow-hidden h-full flex flex-col justify-center">
                     <div className="absolute top-0 right-0 w-24 h-24 bg-royal-100 rounded-bl-full -mr-10 -mt-10 opacity-50"></div>
                     
                     {status === 'success' ? (
                        <div className="text-center py-12 animate-fade-in">
                           <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
                             <CheckCircle2 className="h-10 w-10 text-green-600" />
                           </div>
                           <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Received!</h3>
                           <p className="text-gray-500 mb-8">
                             Thanks {formData.name || 'neighbor'}! Brendon has been notified and will call you at {formData.phone} shortly.
                           </p>
                           <button 
                             onClick={() => setStatus('idle')}
                             className="text-royal-600 font-semibold hover:text-royal-700 underline"
                           >
                             Send another request
                           </button>
                        </div>
                     ) : (
                       <>
                         <h3 className="text-2xl font-bold text-gray-900 mb-2 relative z-10">Quick Service Request</h3>
                         <p className="text-gray-500 mb-6 text-sm relative z-10">Fill out the form below and we'll get back to you ASAP.</p>
                         
                         <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <input 
                                    type="text" 
                                    id="name"
                                    name="name"
                                    required
                                    className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-royal-500 focus:ring-royal-500 border p-3 bg-gray-50 focus:bg-white transition-colors text-gray-900"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={e => setFormData({...formData, name: e.target.value})}
                                    disabled={status === 'submitting'}
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                <input 
                                    type="tel" 
                                    id="phone"
                                    name="phone"
                                    required
                                    className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-royal-500 focus:ring-royal-500 border p-3 bg-gray-50 focus:bg-white transition-colors text-gray-900"
                                    placeholder="(905) 555-0123"
                                    value={formData.phone}
                                    onChange={e => setFormData({...formData, phone: e.target.value})}
                                    disabled={status === 'submitting'}
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">How can we help?</label>
                                <textarea 
                                    id="message"
                                    name="message"
                                    rows={3}
                                    required
                                    className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-royal-500 focus:ring-royal-500 border p-3 bg-gray-50 focus:bg-white transition-colors text-gray-900"
                                    placeholder="Describe your issue..."
                                    value={formData.message}
                                    onChange={e => setFormData({...formData, message: e.target.value})}
                                    disabled={status === 'submitting'}
                                />
                            </div>

                            {status === 'error' && (
                              <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 p-3 rounded-lg">
                                <AlertCircle size={16} />
                                <span>Something went wrong. Please try calling us instead.</span>
                              </div>
                            )}

                            {/* Micro-Benefits to reinforce value at conversion point */}
                            <div className="flex justify-between items-center text-xs text-royal-600 font-medium px-1">
                                <span className="flex items-center gap-1"><CheckCircle2 size={12}/> Fast Response</span>
                                <span className="flex items-center gap-1"><CheckCircle2 size={12}/> Upfront Pricing</span>
                                <span className="flex items-center gap-1"><CheckCircle2 size={12}/> Local</span>
                            </div>

                            <button 
                                type="submit"
                                disabled={status === 'submitting'}
                                className="w-full flex justify-center items-center gap-2 py-4 px-6 border border-transparent rounded-lg shadow-lg text-lg font-bold text-white bg-royal-600 hover:bg-royal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-royal-500 transition-all hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {status === 'submitting' ? (
                                  <>
                                    <Loader2 className="animate-spin" size={20} /> Sending...
                                  </>
                                ) : (
                                  <>
                                    Request Call Back <Send size={20} />
                                  </>
                                )}
                            </button>
                         </form>
                       </>
                     )}
                </div>
            </div>
        </div>
    </section>
  );
};

export default Contact;