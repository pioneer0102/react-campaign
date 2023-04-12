This is a project made in the Advanced Node course by Stephen Grider.

It's an email campaign app which uses GoogleOAuth, Stripe, and Sendgrid for
primary services. It also stores info in an mlab-connected MongoDB

The client code acts as a proxy for all /api and /auth paths, configured in its
package.json

Build requirements are specified in the package.json, enabling the build of
the client bundle and webhook handling in the localtunnel
