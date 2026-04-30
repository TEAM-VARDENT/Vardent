'use client';

import { useState } from 'react';
import Eyebrow from './ui/Eyebrow';
import { site } from '@/content/site';

const { earlyAccess: ea } = site;

type FormState = 'idle' | 'loading' | 'success' | 'error';

function SuccessIcon({ dark }: { dark?: boolean }) {
  return (
    <div
      className={[
        'w-[60px] h-[60px] rounded-full flex items-center justify-center mx-auto mb-5',
        dark
          ? 'bg-white/10 border border-white/20'
          : 'bg-vardent-tint border border-[rgba(15,94,61,0.2)]',
      ].join(' ')}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M5 12l5 5L20 7"
          stroke={dark ? '#ffffff' : '#0F5E3D'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function SubmitButton({ loading, label, dark }: { loading: boolean; label: string; dark?: boolean }) {
  return (
    <button
      type="submit"
      disabled={loading}
      className={[
        'block w-full py-[15px] mt-[6px]',
        'border-none rounded-[8px]',
        'font-body text-[16px] font-semibold tracking-[0.01em]',
        'cursor-pointer transition-all duration-200',
        'disabled:opacity-60 disabled:cursor-not-allowed',
        dark
          ? 'bg-white text-vardent-g2 shadow-[0_2px_8px_rgba(0,0,0,0.18)] hover:bg-vardent-bg'
          : 'bg-vardent-g2 text-white shadow-[0_2px_8px_rgba(15,94,61,0.24)] hover:bg-vardent-g3 hover:-translate-y-px hover:shadow-[0_6px_18px_rgba(15,94,61,0.34)]',
      ].join(' ')}
    >
      {loading ? 'Submitting…' : label}
    </button>
  );
}

const inputBase = [
  'block w-full px-[18px] py-[13px]',
  'border rounded-[8px]',
  'font-body text-[16px]',
  'outline-none appearance-none mb-5',
  'transition-all duration-200',
].join(' ');

const inputLight = [
  inputBase,
  'bg-vardent-bg text-vardent-ink border-[rgba(15,94,61,0.12)]',
  'placeholder:text-vardent-ink4',
  'focus:border-vardent-g3 focus:shadow-[0_0_0_3px_rgba(22,138,90,0.1)] focus:bg-white',
].join(' ');

const inputDark = `${inputBase} input-dark`;

const labelLight = 'block font-body text-[15px] font-medium mb-[7px] tracking-[0.01em] text-vardent-ink3';
const labelDark  = 'block font-body text-[15px] font-medium mb-[7px] tracking-[0.01em] text-white/75';

function Field({
  label, name, type = 'text', placeholder, required = true, dark = false,
}: { label: string; name: string; type?: string; placeholder?: string; required?: boolean; dark?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className={dark ? labelDark : labelLight}>{label}</label>
      <input
        id={name} name={name} type={type}
        placeholder={placeholder} required={required}
        className={dark ? inputDark : inputLight}
      />
    </div>
  );
}

function SelectField({
  label, name, options, dark = false,
}: { label: string; name: string; options: string[]; dark?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className={dark ? labelDark : labelLight}>{label}</label>
      <select id={name} name={name} className={dark ? inputDark : inputLight}>
        <option value="">Select category</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}

export default function EarlyAccess() {
  const [brandState, setBrandState]   = useState<FormState>('idle');
  const [brandError, setBrandError]   = useState('');
  const [consumerState, setConsumerState] = useState<FormState>('idle');
  const [consumerError, setConsumerError] = useState('');

  const handleBrand = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setBrandState('loading');
    setBrandError('');
    const fd = new FormData(e.currentTarget);
    try {
      const res = await fetch('/api/submit-brand', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          company:  fd.get('company'),
          name:     fd.get('name'),
          email:    fd.get('email'),
          category: fd.get('category'),
          country:  fd.get('country'),
        }),
      });
      const data = await res.json() as { success?: boolean; error?: string };
      if (data.success) {
        setBrandState('success');
      } else {
        setBrandError(data.error ?? 'Something went wrong.');
        setBrandState('error');
      }
    } catch {
      setBrandError('Network error. Please try again.');
      setBrandState('error');
    }
  };

  const handleConsumer = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setConsumerState('loading');
    setConsumerError('');
    const fd = new FormData(e.currentTarget);
    try {
      const res = await fetch('/api/submit-consumer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name:    fd.get('name'),
          email:   fd.get('email'),
          country: fd.get('country'),
        }),
      });
      const data = await res.json() as { success?: boolean; error?: string };
      if (data.success) {
        setConsumerState('success');
      } else {
        setConsumerError(data.error ?? 'Something went wrong.');
        setConsumerState('error');
      }
    } catch {
      setConsumerError('Network error. Please try again.');
      setConsumerState('error');
    }
  };

  const bf = ea.brandForm;
  const cf = ea.consumerForm;

  return (
    <section id="access" className="section-pad bg-vardent-bg">
      {/* Header */}
      <div className="text-center mb-[72px]">
        <div className="reveal">
          <Eyebrow center>{ea.eyebrow}</Eyebrow>
        </div>
        <h2
          className="reveal font-display font-bold leading-[1.1] tracking-[-0.025em] text-vardent-ink mx-auto mb-5"
          style={{ fontSize: 'clamp(40px, 5vw, 58px)' }}
        >
          {ea.headlineLine1}
          <br />
          {ea.headlineLine2}
        </h2>
        <p className="reveal font-body text-[20px] leading-[1.7] text-vardent-ink3 mx-auto text-center max-w-[580px]">
          {ea.lead}
        </p>
      </div>

      {/* Forms */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">

        {/* Brand form — light panel */}
        <div className="reveal bg-white border border-[rgba(15,94,61,0.10)] rounded-[28px] px-11 py-12 shadow-vardent-xs">
          {brandState === 'success' ? (
            <div className="py-[52px] text-center">
              <SuccessIcon />
              <h4 className="font-display text-[20px] font-bold text-vardent-ink mb-2">{bf.successTitle}</h4>
              <p className="font-body text-[16px] text-vardent-ink4">{bf.successMessage}</p>
            </div>
          ) : (
            <>
              <p className="font-display text-[22px] font-bold text-vardent-ink mb-2 leading-[1.2]">{bf.title}</p>
              <p className="font-body text-[16px] text-vardent-ink4 mb-9 leading-[1.55]">{bf.subtitle}</p>

              {brandState === 'error' && (
                <p className="mb-4 text-[14px] font-body text-red-600 bg-red-50 border border-red-200 rounded-[8px] px-4 py-3">
                  {brandError}
                </p>
              )}

              <form id="bform" onSubmit={handleBrand}>

                <Field label={bf.fields.company.label} name="company" placeholder={bf.fields.company.placeholder} />
                <Field label={bf.fields.name.label}    name="name"    placeholder={bf.fields.name.placeholder} />
                <Field label={bf.fields.email.label}   name="email"   type="email" placeholder={bf.fields.email.placeholder} />
                <SelectField label={bf.fields.category.label} name="category" options={bf.categoryOptions} />
                <Field label={bf.fields.country.label} name="country" placeholder={bf.fields.country.placeholder} />

                <SubmitButton loading={brandState === 'loading'} label={bf.submitLabel} />
              </form>
            </>
          )}
        </div>

        {/* Consumer form — dark panel */}
        <div className="reveal bg-vardent-g1 border border-vardent-g1 rounded-[28px] px-11 py-12">
          {consumerState === 'success' ? (
            <div className="py-[52px] text-center">
              <SuccessIcon dark />
              <h4 className="font-display text-[20px] font-bold text-white mb-2">{cf.successTitle}</h4>
              <p className="font-body text-[16px] text-white/70">{cf.successMessage}</p>
            </div>
          ) : (
            <>
              <p className="font-display text-[22px] font-bold text-white mb-2 leading-[1.2]">{cf.title}</p>
              <p className="font-body text-[16px] text-white/65 mb-9 leading-[1.55]">{cf.subtitle}</p>

              {consumerState === 'error' && (
                <p className="mb-4 text-[14px] font-body text-red-200 bg-white/10 border border-white/20 rounded-[8px] px-4 py-3">
                  {consumerError}
                </p>
              )}

              <form
                id="cform"
                onSubmit={handleConsumer}
              >

                <Field label={cf.fields.name.label}    name="name"    placeholder={cf.fields.name.placeholder}    dark />
                <Field label={cf.fields.email.label}   name="email"   type="email" placeholder={cf.fields.email.placeholder}   dark />
                <Field label={cf.fields.country.label} name="country" placeholder={cf.fields.country.placeholder} dark />

                <SubmitButton loading={consumerState === 'loading'} label={cf.submitLabel} dark />
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
