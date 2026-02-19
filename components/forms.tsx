'use client';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { trackEvent } from '@/lib/analytics';

const baseSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(7),
  email: z.string().email(),
  state: z.string().min(2),
  zip: z.string().min(4),
  message: z.string().min(10)
});

type QuoteValues = z.infer<typeof baseSchema>;

export function QuoteForm({ title = 'Get A Free Quote' }: { title?: string }) {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<QuoteValues>({ resolver: zodResolver(baseSchema) });
  const onSubmit = async (data: QuoteValues) => {
    await new Promise((r) => setTimeout(r, 400));
    trackEvent({ name: 'quote_submitted', payload: { state: data.state } });
    reset();
  };
  return (
    <div className="card">
      <h3>{title}</h3>
      <form onSubmit={handleSubmit(onSubmit)} aria-label="Quote request form">
        <div className="row row-2">
          <Field label="Name" error={errors.name?.message}><input {...register('name')} /></Field>
          <Field label="Phone" error={errors.phone?.message}><input {...register('phone')} /></Field>
        </div>
        <div className="row row-2">
          <Field label="Email" error={errors.email?.message}><input {...register('email')} /></Field>
          <Field label="State" error={errors.state?.message}><select {...register('state')}><option value="">Select</option><option>Texas</option><option>Oklahoma</option><option>Kansas</option></select></Field>
        </div>
        <div className="row row-2">
          <Field label="ZIP" error={errors.zip?.message}><input {...register('zip')} /></Field>
          <Field label="Message" error={errors.message?.message}><textarea rows={3} {...register('message')} /></Field>
        </div>
        <button className="btn" disabled={isSubmitting}>{isSubmitting ? 'Sending...' : 'Submit'}</button>
      </form>
    </div>
  );
}

const dealerSchema = z.object({
  companyName: z.string().min(2),
  contactName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  dealerType: z.string().min(2),
  website: z.string().url(),
  message: z.string().min(10)
});

type DealerValues = z.infer<typeof dealerSchema>;

export function DealerForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<DealerValues>({ resolver: zodResolver(dealerSchema) });
  return (
    <div className="card">
      <h3>Dealer Application</h3>
      <form onSubmit={handleSubmit((data) => trackEvent({ name: 'dealer_submitted', payload: { type: data.dealerType } }))} aria-label="Dealer form">
        <div className="row row-2">
          <Field label="Company Name" error={errors.companyName?.message}><input {...register('companyName')} /></Field>
          <Field label="Contact Name" error={errors.contactName?.message}><input {...register('contactName')} /></Field>
        </div>
        <div className="row row-2">
          <Field label="Email" error={errors.email?.message}><input {...register('email')} /></Field>
          <Field label="Phone" error={errors.phone?.message}><input {...register('phone')} /></Field>
        </div>
        <div className="row row-2">
          <Field label="Dealer Type" error={errors.dealerType?.message}><input {...register('dealerType')} /></Field>
          <Field label="Website / Social URL" error={errors.website?.message}><input {...register('website')} /></Field>
        </div>
        <Field label="Message" error={errors.message?.message}><textarea rows={4} {...register('message')} /></Field>
        <button className="btn" style={{ marginTop: '1rem' }}>Apply Now</button>
      </form>
    </div>
  );
}

function Field({ label, children, error }: { label: string; children: React.ReactNode; error?: string }) {
  return <label className="field">{label}{children}{error ? <span style={{ color: 'crimson' }}>{error}</span> : null}</label>;
}
