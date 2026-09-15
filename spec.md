# Project Specification: Single-Page Website (For Non-Tech Client)

## 1. Project Overview
- **Type:** Single-page website (Long-scrolling landing page).
- **Objective:** Create a fast, responsive, and modern website. The final hand-off must be extremely simple as the client is non-technical.
- **Design Assets:** The UI/UX design is already completed and located in the local folder: `stitch_system_d_electrical_industrial_website`.

## 2. Technical Stack Requirements
- **Framework:** Open to suggestions (e.g., Vite + React, Astro, or Next.js), but it must be lightweight and perfect for a single-page scrolling experience.
- **Styling:** Tailwind CSS.
- **Version Control:** Developer will use Git & GitHub internally for version control and CI/CD, but this will NOT be exposed to the client.

## 3. Infrastructure & Deployment Strategy
- **Initial Hosting:** Vercel (Free Tier). 
- **Production DNS/CDN:** Cloudflare (Free Tier). 
- **Domain:** A custom domain will be registered later via Cloudflare, proxying traffic to Vercel.
- **Account Setup Strategy:** A dedicated Google Account (Gmail) will be created specifically for this project. This email will be used to register the Vercel, Cloudflare, and Domain accounts.

## 4. Client Hand-off Strategy (Non-Tech Client)
- **Codebase:** The entire source code will be compressed into a `.zip` file and sent to the client for their safekeeping. No GitHub transfer is required.
- **Hosting & Infrastructure Ownership:** Hand-off will be executed simply by giving the client the credentials (username/password) of the dedicated Gmail account. This instantly gives them ownership of the Vercel, Cloudflare, and Domain without needing them to set up anything technical.

## 5. Prompt for AI (Grok)
Based on the specification above, please generate a comprehensive project plan including:
1. **Tech Stack Recommendation:** Which framework is best suited for this specific use case and why?
2. **Step-by-Step Development Plan:** From initial setup and integrating the existing design/assets from the `stitch_system_d_electrical_industrial_website` folder, to final polishing.
3. **Infrastructure Guide:** Step-by-step instructions on how to properly configure Cloudflare (Free Tier) to work smoothly with Vercel once the custom domain is registered (including SSL/TLS settings to avoid redirect loops).
4. **Handoff Packaging Guide:** How should I properly clean up (e.g., removing `node_modules`) and structure the final `.zip` file so the client has everything they need (source code + build output) in case they hire another developer in the future?