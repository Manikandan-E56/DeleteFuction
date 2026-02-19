import { useState } from 'react';

export default function DeleteAccount() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail]       = useState('');
  const [phone, setPhone]       = useState('');
  const [reason, setReason]     = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]   = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!confirmed) return;

    setLoading(true);

    const subject = encodeURIComponent('Account Deletion Request – Apti & Algo');
    const body = encodeURIComponent(
      `Account Deletion Request\n\n` +
      `Full Name: ${fullName}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone}\n` +
      `Reason: ${reason || 'Not provided'}\n\n` +
      `Please delete my account and all associated data permanently.`
    );

    window.location.href = `mailto:emanidon123@gmail.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  // ── Success Screen ───────────────────────────────────────────
  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-10 text-center animate-fade-in">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" strokeWidth="2.5"
              strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Request Submitted!</h2>
          <p className="text-sm text-gray-500 leading-6">
            We've received your account deletion request. Your account and all associated data
            will be permanently deleted within{' '}
            <span className="font-semibold text-gray-700">7 business days.</span>
            <br /><br />
            A confirmation will be sent to your registered email address.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-8 w-full bg-gray-100 hover:bg-gray-200 text-gray-600 font-semibold py-3 rounded-2xl transition-colors">
            Go Back
          </button>
        </div>
      </div>
    );
  }

  // ── Form Screen ─────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="w-full max-w-lg mx-auto">

        {/* Icon + Title */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <polyline points="3 6 5 6 21 6" />
              <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" />
              <path d="M10 11v6M14 11v6" />
              <path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2" />
            </svg>
          </div>
          <h1 className="text-2xl font-extrabold text-gray-900">Delete My Account</h1>
          <p className="mt-2 text-sm text-gray-500 leading-6 max-w-sm mx-auto">
            Submit this form to permanently delete your <strong>Apti & Algo</strong> account
            and all associated data. We will process your request within{' '}
            <span className="font-semibold text-gray-700">7 business days.</span>
          </p>
        </div>

        {/* Warning Banner */}
        <div className="flex items-start gap-3 bg-orange-50 border border-orange-200 rounded-2xl p-4 mb-6">
          <svg className="w-5 h-5 text-orange-700 mt-0.5 shrink-0" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
          <p className="text-sm text-orange-800 leading-5">
            <strong>This action is irreversible.</strong> All your progress, scores, and personal
            data will be permanently erased and cannot be recovered.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl shadow-sm p-8 mb-6">
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Full Name */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                Full Name
              </label>
              <div className="flex items-center border border-gray-200 rounded-xl bg-gray-50 px-3 py-2.5 focus-within:border-blue-400 focus-within:bg-white transition-colors">
                <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="John Doe"
                  required
                  className="ml-2.5 flex-1 bg-transparent text-sm text-gray-800 outline-none placeholder-gray-400"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                Registered Email
              </label>
              <div className="flex items-center border border-gray-200 rounded-xl bg-gray-50 px-3 py-2.5 focus-within:border-blue-400 focus-within:bg-white transition-colors">
                <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email@example.com"
                  required
                  className="ml-2.5 flex-1 bg-transparent text-sm text-gray-800 outline-none placeholder-gray-400"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                Registered Phone Number
              </label>
              <div className="flex items-center border border-gray-200 rounded-xl bg-gray-50 px-3 py-2.5 focus-within:border-blue-400 focus-within:bg-white transition-colors">
                <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.22 1.18 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.62-.62a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" />
                </svg>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 00000 00000"
                  required
                  className="ml-2.5 flex-1 bg-transparent text-sm text-gray-800 outline-none placeholder-gray-400"
                />
              </div>
            </div>

            {/* Reason */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                Reason for Deletion{' '}
                <span className="font-normal normal-case text-gray-400">(Optional)</span>
              </label>
              <textarea
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder="Tell us why you're leaving..."
                rows={3}
                className="w-full border border-gray-200 rounded-xl bg-gray-50 px-3 py-2.5 text-sm text-gray-800 outline-none placeholder-gray-400 resize-none focus:border-blue-400 focus:bg-white transition-colors"
              />
            </div>

            {/* Checkbox */}
            <div className="flex items-start gap-3">
              <button
                type="button"
                onClick={() => setConfirmed(!confirmed)}
                className={`mt-0.5 w-5 h-5 shrink-0 rounded border-2 flex items-center justify-center transition-colors ${
                  confirmed ? 'bg-red-600 border-red-600' : 'bg-white border-gray-300'
                }`}>
                {confirmed && (
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor"
                    strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </button>
              <p className="text-sm text-gray-500 leading-5">
                I understand that deleting my account is{' '}
                <strong className="text-gray-700">permanent and irreversible.</strong>{' '}
                All my data, progress, and scores will be erased forever.
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!confirmed || loading}
              className={`w-full py-3.5 rounded-2xl text-white font-bold text-sm transition-all ${
                confirmed && !loading
                  ? 'bg-red-600 hover:bg-red-700 active:scale-98 cursor-pointer'
                  : 'bg-red-300 cursor-not-allowed'
              }`}>
              {loading ? 'Submitting...' : 'Request Account Deletion'}
            </button>
          </form>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-xs text-gray-400">or contact directly</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Email Contact */}
        <a
          href="mailto:emanidon123@gmail.com?subject=Account Deletion Request"
          className="flex items-center gap-3 bg-blue-50 border border-blue-100 rounded-2xl p-4 hover:bg-blue-100 transition-colors no-underline">
          <svg className="w-5 h-5 text-blue-600 shrink-0" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
          <div className="flex-1">
            <p className="text-xs text-blue-400">Send an email to</p>
            <p className="text-sm font-semibold text-blue-700">emanidon123@gmail.com</p>
          </div>
          <svg className="w-4 h-4 text-blue-300" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </a>

        {/* Footer */}
        <p className="text-center text-xs text-gray-400 mt-8">
          © 2026 Apti & Algo · All rights reserved
        </p>
      </div>
    </div>
  );
}