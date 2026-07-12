# Research Notes

Date checked: 2026-07-12

These notes informed the MVP product assumptions and should be revisited before launch with legal, clinical, and commercial review.

## Nigerian telehealth/product patterns

- Reliance Health Nigeria highlights member, company admin, and provider dashboards, a provider network, app access, and telemedicine as part of health plan delivery: https://getreliancehealth.com/nigeria/
- Wellahealth positions healthcare around embedded infrastructure, pharmacy/provider networks, HMO support, WhatsApp/contact support, and broad Nigerian access: https://www.wellahealth.com/
- Mobihealth International is positioned as telemedicine and remote care access for underserved populations, although its public site was not text-accessible in this environment: https://mobihealthinternational.com/
- Doctoora appears to have limited public crawlable content at the checked domain, so it should be reviewed manually before commercial launch.

## Payments

- Flutterwave Nigeria advertises cards, bank account, bank transfer, USSD, POS, mobile money, and multi-currency support: https://flutterwave.com/ng
- Paystack should also be evaluated for cards, bank transfer, USSD, split payments, payout workflows, and webhook reliability before implementation.
- MVP recommendation: start with Paystack or Flutterwave checkout, verify payment by webhook, and only confirm appointments after triage pass plus payment verification.

## Data protection and clinical safety

- The Nigeria Data Protection Commission site states NDPA data subject rights including being informed, access, rectification, objection, restriction, portability, erasure, and avoiding automated decision-making: https://ndpc.gov.ng/
- Health data, child data, media uploads, and clinical notes should be handled as high-sensitivity data.
- MVP recommendation: capture explicit informed consent before first booking, separate paediatric guardian consent, keep audit logs, and do not implement session recording until per-session consent and retention rules are designed.

## Video

- Managed video infrastructure such as Daily, Twilio Video, or Agora should be used instead of raw WebRTC for reliability, recording controls, room security, and mobile network resilience.
- MVP recommendation: use Daily or equivalent managed rooms with short-lived meeting tokens and a pre-call network/device check.
