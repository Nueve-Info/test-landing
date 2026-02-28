# DE__Engineer-AI — Project Brief (Local Only)

## Goal
Build a local-only landing page (no backend) in the existing Vite + React + Tailwind project inside this folder.
Use:
- Copy + section order + content structure from: ../References/Copy and Structure
- Visual style + layouts + components inspiration from: ../References/Visual References

IMPORTANT:
- Do not copy code from reference sites.
- Do not add a backend. Node.js is only for tooling/build/dev server.
- Keep everything local. No deployment steps needed.

## Reference Sources (must read first)
Before editing UI, ALWAYS review these directories and their .md guides:
- ../References/Copy and Structure
- ../References/Visual References

If needed, use Claude Code file references with @ to pull content directly into context. For example:
- @../References/Copy and Structure/
- @../References/Visual References/

If the @ path struggles with spaces, create local symlinks from this folder:
- ln -s "../References/Copy and Structure" "./refs-copy"
- ln -s "../References/Visual References" "./refs-visual"
Then reference:
- @refs-copy
- @refs-visual



The exact section order + copy MUST match "Copy and Structure" first; visuals must match "Visual References".

## Implementation Constraints
- Prefer functional React components.
- Prefer composition: /src/components/sections/* for sections, /src/components/ui/* for primitives.
- Use Tailwind classes (avoid heavy custom CSS).
- Keep dependencies minimal (no UI libraries unless already present).

## Workflow (do this every time)
1) Explore references and current codebase structure first.
2) Propose a short plan (section list + file changes).
3) Implement incrementally with readable commits/edits.
4) Verify locally:
   - npm install (only if needed)
   - npm run dev
   - npm run build (final check)

## “Done” means:
- The landing page renders correctly on localhost via `npm run dev`
- Copy + structure align with Copy and Structure
- Layout + typography + spacing match Visual References as closely as possible
- Mobile + desktop look intentional (no broken spacing or overflow)