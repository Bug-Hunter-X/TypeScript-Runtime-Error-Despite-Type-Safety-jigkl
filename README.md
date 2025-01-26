# TypeScript Runtime Error Despite Type Safety

This repository demonstrates a common pitfall in TypeScript: while TypeScript's type system catches many errors during development, it doesn't guarantee runtime type safety.  This example shows how a seemingly type-safe function can throw an error at runtime if not handled properly.

## The Bug

The `add` function is declared to accept two numbers and return a number. However, the code calls the function with a string and a number, which leads to a runtime error because the `+` operator performs string concatenation in this case. Although TypeScript's compiler doesn't prevent this error directly, it highlights the potential issue.

## The Solution

The solution involves adding runtime checks to ensure the input types are correct before performing the addition.  This prevents runtime errors and ensures the function's behavior matches the type definition.