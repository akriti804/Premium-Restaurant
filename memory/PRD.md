# Bansi Vihar — Luxury Restaurant Website

## Original Problem Statement
World-class luxury restaurant website for Bansi Vihar — Patna's most loved pure vegetarian restaurant. Should feel like a premium luxury brand (Apple / Aman Resorts / Michelin) not a generic restaurant template. Black & gold theme, cinematic scroll, glassmorphism, smooth animations.

## Architecture
- **Stack**: React 19 + Tailwind + framer-motion + react-countup + lucide-react. No backend logic added (static marketing site per user choice — WhatsApp/email links only).
- **Single-page** scroll layout with anchor navigation.
- **Color tokens**: #050505 / #0B0B0B / #D4AF37 / #FFD700 / #FFFFFF / #BDBDBD
- **Typography**: Cormorant Garamond (headings) + Outfit (body)

## User Personas
- Patna locals seeking premium family dining
- Out-of-town visitors researching restaurants in Patna
- Wedding/event planners scouting venues

## Core Requirements (Static)
1. Cinematic gold-logo loader (~3s)
2. Sticky glassmorphic navbar
3. Hero with floating food image, golden glow, headline, stat counters, CTAs
4. Signature Collection — 6 dishes, alternating left-right large layouts
5. Restaurant Story — "A Tradition Loved By Generations"
6. Masonry Gallery with hover zoom
7. Reviews with animated counters (9680+, 4.1, 38yrs) + 6 testimonial cards
8. Contact: Maps iframe + Call + WhatsApp + Directions
9. Black/gold footer with social icons

## What's Been Implemented
- **2026-05-29**: Loader, Navbar, Hero, SignatureCollection, Story, Gallery, Reviews, Contact, Footer (95% pass)
- **2026-05-29 (v2)**: Dedicated `/menu` route with 6 luxury categories (31 items, INR pricing, signature sparkles, sticky tab nav, WhatsApp CTA). Navbar + Hero + Footer wired to new route. (100% pass — iteration_2.json)
- **2026-05-29 (v3)**: "Since 1987" removed everywhere; Story section image replaced with elegant "Awaiting Owner's Photograph" placeholder; Gallery now uses the named Signature food images.
- **2026-05-29 (v4)**: New **Food Showcase** section with 20 AI-generated photoreal premium food images (Paneer Masala Dosa, Filter Coffee, Pav Bhaji, Vanilla Shake, Rasmalai, Idly Vada Sambar, Upma Plate, Chhole Bhature, Chana Bhature, Rava Dosa, Veg Fried Rice, Cold Coffee with Ice Cream, Rawa Butter Masala Dosa, Milk Shakes, Chowmein, Sambar Vada, Vegetable Pakoda, Cakes, Baby Corn Chilli, Manchurian Gravy). Hero signature image rotates daily via day-of-year. Rating updated to **4.6★**. New "Showcase" nav link. (100% pass — iteration_3.json)

## Backlog (P0/P1/P2)
- **P1**: Dedicated menu page with full categories & prices
- **P1**: Online reservation form (backend storage if user opts in later)
- **P2**: Instagram feed live embed
- **P2**: Multilingual (Hindi) toggle
- **P2**: Lottie loader instead of CSS

## Next Tasks
- Owner approval & content tweaks
- Final logo / actual photography swap
- Optional reservation backend
