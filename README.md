# KineticCare - Nigerian Virtual Physiotherapy Clinic MVP

This is a deployable starter Next.js app for a Nigerian virtual physiotherapy marketplace. It includes:

- Public homepage with sub-specialties, clinician cards, trust signals, and research-informed product assumptions
- Specialty landing pages
- Clinician profile pages
- Interactive booking flow with guardian handling, specialty red-flag triage, MSK body-region capture, media-upload placeholder, and payment-ready review
- Pricing and trust/safety pages
- Patient and clinician portal previews

## Tech stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Lucide React icons

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy

The simplest first deployment target is Vercel.

1. Push this folder to a Git repository.
2. Import the repository in Vercel.
3. Use the default Next.js build settings.
4. Add production environment variables as integrations are added.

## Production integration roadmap

- Auth: Clerk or Auth.js with roles for patient, guardian, clinician, and admin
- Database: PostgreSQL with Prisma or Drizzle
- Payments: Paystack or Flutterwave checkout plus webhook verification
- Video: Daily, Twilio Video, or Agora rooms with short-lived access tokens
- Storage: S3-compatible private storage for uploaded media and exercise videos
- Compliance: NDPA/NDPR policy review, explicit consent records, data deletion workflow, breach process, paediatric safeguarding escalation, and credential verification workflow

## Important clinical note

This is not a production medical device or clinical service. All clinical wording, triage rules, safeguarding procedures, legal policies, and provider credentials must be reviewed by qualified Nigerian healthcare, legal, and data protection professionals before launch.
