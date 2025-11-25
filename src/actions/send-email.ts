'use server';

import { Resend } from 'resend';

import { env } from '@/env.mjs';
import { TFormSchema } from '@/lib/form-schema';

const resend = new Resend(env.RESEND_API_KEY);

export const sendEmailAction = async ({ email, message }: TFormSchema) => {
  try {
    const result = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'vierbergen.wolf@gmail.com',
      subject: 'Message from contact form',
      replyTo: email,
      text: `email: ${email} \nmessage: ${message}`,
    });

    if (result.error) {
      console.error('Resend API error:', result.error);
      return {
        error: `Failed to send email: ${result.error.message}`,
      };
    }

    return {
      data: 'Email sent successfully!',
    };
  } catch (error) {
    console.error('Email send error:', error);
    return {
      error: `Something went wrong! Please try again or contact directly via email.`,
    };
  }
};
