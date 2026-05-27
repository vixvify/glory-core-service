# Backend Engineering Skill

You are a senior backend engineer.

## Tech Stack

- TypeScript
- Bun
- Elysia
- Prisma
- PostgreSQL
- JWT Authentication

---

# Architecture

Use this architecture:

src/
├── core/
│   ├── config/
│   ├── error/
│   ├── interceptor/
│   ├── models/
│   ├── types/
│   └── utils/
│
├── infrastructure/
│
├── lib/
│
├── middleware/
│
├── modules/
│
├── routes/
│
├── server/
│
└── index.ts

---

# Rules

- Use strict TypeScript
- Never use any
- Use async/await
- Use repository pattern
- Keep business logic inside service
- Keep database access inside repository
- Keep routes thin
- Validate all inputs with zod or Elysia schema
- Return consistent API response format
- Use meaningful variable names
- Use early return when possible
- Prefer composition over inheritance

---

# API Response Format

Always use:

```ts
interface ApiResponse<T> {
  data: T;
  error?: string;
  status?: number;
  statusCode: string;
}
```

Success example:

```ts
return {
  success: true,
  message: "Movie fetched successfully",
  data: movie
}
```

Error example:

```ts
throw new Error("Movie not found")
```

---

# Prisma Rules

- Use relations properly
- Use cascading carefully
- Use enums when appropriate
- Add indexes when needed
- Avoid duplicated queries
- Use select/include efficiently
- Avoid N+1 queries

---

# Service Rules

Service should:
- contain business logic
- validate important conditions
- orchestrate repositories

Service should NOT:
- access request directly
- contain HTTP logic

---

# Repository Rules

Repository should:
- only communicate with database
- contain Prisma queries
- return clean typed data

Repository should NOT:
- contain business logic
- contain HTTP response logic

---

# Route Rules

Route should:
- validate request
- call service
- return response

Route should NOT:
- contain business logic
- contain database queries

---

# Authentication Rules

- Use JWT
- Store user info in context
- Protect private routes
- Validate ownership before mutation

Example:
- user can edit own rating
- admin can delete everything

---

# Code Style

Preferred:

```ts
if (!movie) {
  throw new Error("Movie not found");
}
```

Avoid:

```ts
if(movie==null){throw new Error("Movie not found")}
```

---

# Naming Convention

Variables:
- camelCase

Types/Interfaces:
- PascalCase

Constants:
- UPPER_SNAKE_CASE

Files:
- kebab-case

---

# When Generating Code

Always:
1. explain folder structure briefly
2. generate schema/types first
3. generate repository
4. generate service
5. generate route
6. explain important logic only

Do NOT:
- generate fake code
- skip typing
- use placeholder logic unless requested

---

# Testing Mindset

Before finishing:
- check type safety
- check null cases
- check async handling
- check Prisma relation correctness
- check response consistency
- check naming consistency

---

# Performance Rules

- avoid unnecessary queries
- paginate large data
- use indexes when needed
- avoid loading huge relations blindly

---

# Security Rules

- validate all inputs
- never trust client input
- hash passwords properly
- never expose sensitive fields
- verify JWT carefully
- check authorization before mutation

---

# Output Rules

Prefer:
- complete working code
- modular structure
- production-ready approach

Avoid:
- toy examples
- oversimplified architecture