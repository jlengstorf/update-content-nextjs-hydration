# Update and Replace Content in Next.js and Avoid React Hydration Errors

When trying to do dynamic page updates in Next.js, the React hydration errors are a big challenge to overcome.

```
Unhandled Runtime Error
Error: Text content does not match server-rendered HTML.

See more info here: https://nextjs.org/docs/messages/react-hydration-error
```

Using Next.js Advanced Middleware, an [open source extension to Next.js middleware from the Netlify team](https://docs.netlify.com/integrations/frameworks/next-js/middleware/), it's possible to take advantage of Edge Functions to 
