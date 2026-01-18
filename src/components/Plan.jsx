import React from 'react'

const Plan = () => {
    return (
        <div>
            <div class="flex flex-col border-2 rounded-[5px] p-2 mb-2.5 h-80">
                <div class="font-bold text-3xl">Plan of Action</div>
                <div class="pl-1">
                    Set up an n8n workflow where website form submissions hit a Webhook node, are cleaned or
                    enriched in a Function/Set node, then sent into your CRM via the HubSpot/Zoho node, followed
                    by Gmail nodes for trigger-based follow-up emails and Slack nodes for high-intent lead
                    alerts, with IF nodes handling logic like “no reply in 3 days” and “visited pricing/booked
                    demo,” plus basic error handling and logging so the whole pipeline is testable,
                    maintainable, and easy to extend later.

                </div>
            </div>
        </div>
    )
}

export default Plan
