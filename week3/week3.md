# HYF. React 2. Week 3. Next.js.

Let's start with homework.

Questions?

- CRON jobs (node-cron)
- Authentication https://nextjs.org/docs/app/building-your-application/authentication + JWT + Authorization
  - How to use that?

Common things I've seen in your homework:

1. Context doesn't have to be an object. It can be a string, number, boolean, etc.
2. There is 2 parts of handling errors with `fetch`:
   - `fetch` can fail because of the network (no internet, server is down, etc.).
   This will result in throwing an error when you call fetch
   - `fetch` can return a response with an error status code (!== `2xx`)
3. Handling errors should not disrupt user experience
4. Don't forget to update data after you change it (call GET after POST, PUT, DELETE)
5. [Next specific] Use special `loading.js` when you expect page to load for some time (+ example)
   - https://react.dev/reference/react/Suspense

## Customisation of MUI

https://mui.com/material-ui/customization/how-to-customize/

1. `sx` prop + class overrides
2. `classNames` prop
3. `styled` for reusable components
   - addinional props
   - css-variables to `style` prop
4. `GlobalStyles` component
5. creating a `theme` with `createTheme`

## Server Actions

https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations

1. `use server`
   - toDo example
   - `revalidatePath`
   - `useActionState`
