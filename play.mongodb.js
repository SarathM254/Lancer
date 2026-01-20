
use('ClientsDB');

// Insert a few documents into the sales collection.
db.getCollection('clients').insertMany([
  {
  name: "Aarav Sharma",
  links: {
    email: "aarav.sharma@agency.in",
    linkedin: "linkedin.com/in/aaravsharma"
  },
  profileUrl: "https://agency.in/team/aarav",
  details: "Runs a digital marketing and automation agency.",
  plan: "Business",
  mails: [
    { subject: "Proposal Update", time: "11:15 AM" },
    { subject: "Automation Workflow Review", time: "4:45 PM" }
  ],
  notes: "Interested in AI chatbots and workflow automation."
},
{
  name: "Emily Parker",
  links: {
    email: "emily.parker@creatorhub.io",
    linkedin: "linkedin.com/in/emilyparker"
  },
  profileUrl: "https://creatorhub.io/emily",
  details: "Tech lifestyle content creator with YouTube and blog presence.",
  plan: "Starter",
  mails: [
    { subject: "Invoice Due", time: "7:00 PM" },
    { subject: "Content Strategy Call", time: "2:20 PM" }
  ],
  notes: "Planning to upgrade plan after sponsorship agreement."
},
{
  name: "Carlos Martinez",
  links: {
    email: "carlos@martinezstore.com",
    linkedin: "linkedin.com/in/carlosmartinez"
  },
  profileUrl: "https://martinezstore.com/profile",
  details: "Founder of an online apparel e-commerce brand.",
  plan: "Enterprise",
  mails: [
    { subject: "Order Management Sync", time: "10:45 AM" }
  ],
  notes: "Needs weekly analytics dashboard + priority support."
},
{
  name: "Sara Lee",
  links: {
    email: "sara@educares.org",
    linkedin: "linkedin.com/in/saralee"
  },
  profileUrl: "https://educares.org/profile/sara",
  details: "Manages a non-profit organization focused on accessible education.",
  plan: "Non-Profit",
  mails: [
    { subject: "Donation Campaign Brief", time: "12:50 PM" },
    { subject: "Outreach Meeting Notes", time: "3:10 PM" }
  ],
  notes: "Requested documentation for grant-based billing."
},
{
  name: "David Kim",
  links: {
    email: "david.kim@techforge.dev",
    linkedin: "linkedin.com/in/davidkim"
  },
  profileUrl: "https://techforge.dev/david",
  details: "Full-stack developer working on micro-SaaS projects.",
  plan: "Premium",
  mails: [
    { subject: "API Key Reset", time: "5:20 PM" },
    { subject: "Feature Request", time: "8:30 PM" }
  ],
  notes: "Interested in custom billing APIs and dev-focused tools."
}
]);