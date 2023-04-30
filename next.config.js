/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  env : {
    contactUs:'https://gotimate.com/api/tools/contact_us/new_message',
    subscription:'https://gotimate.com/api/tools/newsletter/new_email'
  }
}

module.exports = nextConfig
