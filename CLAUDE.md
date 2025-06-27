# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Carbon Credit Landing - A Next.js 15 application for a carbon credit marketplace with project selection and payment processing.

## Development Commands

```bash
# Install dependencies (use pnpm)
pnpm install

# Development
pnpm dev        # Start development server (http://localhost:3000)

# Production
pnpm build      # Build for production
pnpm start      # Start production server

# Code Quality
pnpm lint       # Run ESLint
```

## Architecture & Patterns

### Tech Stack
- **Framework**: Next.js 15.2.4 with App Router
- **Language**: TypeScript 5 (strict mode)
- **UI Library**: shadcn/ui components with Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming
- **Icons**: Lucide React
- **Forms**: react-hook-form with Zod validation

### Key Architectural Decisions

1. **Component Structure**: All components use "use client" directive for client-side rendering
2. **Path Aliases**: Use `@/` prefix for imports (mapped to root directory)
3. **UI Components**: Located in `/components/ui/` - these are shadcn/ui components that shouldn't be modified directly
4. **Business Components**: Custom components follow `landing-*`, `payment-*` naming pattern
5. **Styling**: Use `cn()` utility from `/lib/utils` for className merging

### Project Structure
```
/app            # Next.js App Router pages
/components     # React components
  /ui           # shadcn/ui component library (don't modify)
/hooks          # Custom React hooks
/lib            # Utilities (contains cn() helper)
/public         # Static assets and images
```

## Important Configuration

### Build Settings (next.config.ts)
- TypeScript errors are ignored during builds (`ignoreBuildErrors: true`)
- ESLint errors are ignored during builds (`ignoreDuringBuilds: true`)
- Images are unoptimized (`unoptimized: true`)

### TypeScript (tsconfig.json)
- Strict mode enabled
- Path alias: `@/*` → `"./*"`
- Target: ES2017

## Component Patterns

### Using shadcn/ui Components
```typescript
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
```

### Creating New Components
```typescript
"use client"

import { cn } from "@/lib/utils"

export function ComponentName({ className, ...props }: ComponentProps) {
  return (
    <div className={cn("default-classes", className)} {...props}>
      {/* Component content */}
    </div>
  )
}
```

## Current Features

1. **Project Selection**: Dropdowns for Forest/Mangrove/Solar projects
2. **Duration Options**: 7/30/90 day carbon credit purchases
3. **Auto-renewal**: Toggle for subscription management
4. **Payment Integration**: Payment form with card details
5. **Google Reviews**: Embedded review section

## Common Tasks

### Adding a New Page
Create a new directory under `/app` with a `page.tsx` file:
```typescript
export default function PageName() {
  return <div>Page content</div>
}
```

### Adding UI Components
Use shadcn/ui CLI or manually copy from documentation. Components should go in `/components/ui/`.

### Modifying Theme
Edit CSS variables in `/app/globals.css` under `:root` and `.dark` selectors.

## Dependencies to Note

- **date-fns**: Date manipulation
- **recharts**: Data visualization
- **sonner**: Toast notifications
- **next-themes**: Dark mode support
- **embla-carousel**: Carousel functionality