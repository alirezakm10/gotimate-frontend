/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  env : {
    homeRoute:'/',
    contactUs:'https://gotimate.com/api/tools/contact_us/new_message',
    subscription:'https://gotimate.com/api/tools/newsletter/new_email',
    loginRoute:"https://dashboard.gotimate.com/login",
    signupRoute:"https://dashboard.gotimate.com/signup",
  }
}

module.exports = nextConfig
