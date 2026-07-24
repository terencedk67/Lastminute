# LASTMINUTE agent guide

Build a production-quality mobile-first real-time intent marketplace. Preserve the editorial visual language: warm off-white, black, LASTMINUTE red, muted olive, condensed display headings and restrained radii. Do not turn this into a generic SaaS dashboard.

Core mechanic: “I want X, within Y time, within Z distance.” Services, activities and people all connect to that intent.

Current prototype uses mock data. Keep domain boundaries clean so repositories can later be replaced with Supabase implementations. Prefer reusable React Native components, typed data and Expo Router routes. Every change must continue to work on iOS, Android and web.

Before finishing a task run `npm run typecheck` and, when possible, `npm run web`.
