# AI Coding Agent Instructions for Project Tracker

## Project Overview

**Project Tracker** is a React 19 + TypeScript + Vite learning progress tracker application. It helps users monitor their learning journey across various technologies through a filterable, status-based UI with persistent local storage.

## Architecture Patterns

### Data Model

- **Tech**: Core entity with `id`, `title`, `description`, `status`, and optional `notes`
- **Status Flow**: `cancelled` → `not-started` → `in-progress` → `completed` (cyclic via `getNextStatus`/`getPreviousStatus`)
- **TechFilters**: Used for filtering by any Tech field; filtering is done in `TechList` component

### State Management

- **Local Storage First**: All state persists to `localStorage` via custom `useLocalStorage<T>` hook (`src/hooks/useLocalStorage.ts`)
  - Handles JSON serialization/deserialization with error logging
  - Supports both direct values and updater functions (like React's `useState`)
  - Always initialize with fallback values (see `App.tsx` for patterns)
- **No Redux/Context**: State lives in App.tsx and passes down as props through component tree
- **Side Effects**: Manual `useEffect` syncs to localStorage after state changes (see App.tsx line 22)

### Component Hierarchy

```
App (technologies, filters, setTechnologies, setFilters)
  ├─ ProgressHeader
  ├─ Statistics
  ├─ QuickActions (random tech selector)
  ├─ TechFilterPanel (controls filters)
  └─ TechList
      └─ TechCard[] (individual items with edit/status buttons)
```

**Key Pattern**: Components receive callbacks for mutations (e.g., `setStatus(id)` in TechCard), never directly modify state.

### Utility Modules

- **tech.ts**: `sortById()`, `getTechnologiesByValue(key, value)` - generic filtering
- **status.ts**: `getNextStatus()`, `getPreviousStatus()` - cycle through STATUS_ORDER
- **array.ts**: `wrapAround()` for circular array navigation

### Filtering Logic

- Filtering happens in `TechList.getTechnologiesByFilters()` - **not at App level**
- Multiple filter types coexist (status + title + description prefixes)
- Case-sensitive prefix matching on title/description

## Development Workflow

### Build & Deployment

```bash
pnpm dev          # Start Vite dev server with HMR
pnpm build        # TypeScript check + Vite build → dist/
pnpm lint         # Run ESLint (strict rules recommended for production)
pnpm deploy       # Build + deploy to GitHub Pages (requires gh-pages setup)
```

### Key Commands

- Use `pnpm` (not npm) - workspace configured for pnpm
- Build outputs to `dist/` with assets in `dist/public/`

## Conventions & Patterns

### Component Structure

- Each component is a folder with `.tsx` main file and optional `.css` styles
- Example: `src/components/TechCard/TechCard.tsx` + `style.css`
- Props passed as destructured objects within component signature

### Mock Data

- `src/mock/index.ts` exports `techMock` array using `uuid.v4()` for IDs
- Initialize state with mock data; never hardcode IDs elsewhere

### Status Translation

- Component has hardcoded i18n lookup (Russian): See `TechCard.tsx` lines 11-16
- Pattern: `t: Record<Status, string> = {...}` + `translateStatus(status)` function
- **When adding new statuses**: Update type, STATUS_ORDER, and translation table

### Styling

- CSS Modules not used; each component has single CSS file with class naming
- Pattern: `.tech-card`, `.tech-card-actions`, `.tech-list`, etc.
- Colors/themes likely encoded in CSS (review component-level styles)

### Type Safety

- All data structures in `src/types.d.ts`
- Use `keyof Tech` in generic functions (see `getTechnologiesByValue`)
- Props types follow pattern: `{ prop1: Type1 } & Component` when extending entity types

## Integration Points

### External Dependencies

- **react 19.1.1**: Latest stable with hooks support
- **uuid 13.0.0**: Generate unique tech IDs (v4 random)
- **Vite with React SWC**: Fast refresh; no Babel fallback

### localStorage Keys

- `"technologies"`: Serialized Tech[] array
- `"filters"`: Serialized TechFilters object

### Icons

- Static icons in `public/icons/` (e.g., `icons8-crayon-48.webp`)
- Referenced via `Icon` component wrapper in `src/components/Icon/Icon.tsx`

## Common Tasks

### Adding a New Field to Tech

1. Update `Tech` interface in `src/types.d.ts`
2. Update `TechFilters` interface
3. Add to `techMock` entries (set defaults or omit optional fields)
4. Update `TechCard` component to display/edit field
5. Add filter logic to `TechList.getTechnologiesByFilters()` if searchable

### Adding a New Component

1. Create folder in `src/components/ComponentName/`
2. Export default component from `ComponentName.tsx`
3. Add `style.css` if needed (optional)
4. Import in parent and pass required data + callbacks

### Modifying Status Behavior

- Update `STATUS_ORDER` in `src/utils/status.ts`
- Add/update translation in `TechCard.tsx` `t` object
- Functions automatically cycle through new order

## Testing Approach

- No test framework currently in use
- Manual testing via `pnpm dev` (Vite HMR enables instant feedback)
- Verify localStorage persistence via browser DevTools → Application tab

## Performance Considerations

- No memoization currently; components re-render on parent state changes
- `getTechnologiesByFilters` filters on every render (acceptable for current data scale)
- Mock data uses `uuidv4()` on every module load—consider extracting if IDs must be stable

---

**Last Updated**: November 2025
