import './App.css'

function App() {

    return (
        <>
            <div class="Profile-content flex-1 flex p-4">
                <div class="flex-[4] basis-0 p-3 ">

                    <div class="hero flex flex-col border-2 rounded-2xl pl-2 gap-2 py-3 mb-2.5">
                        <div class="text-2xl">Motupalli Sarath</div>
                        <div class="flex justify-center items-end space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-7">
                                <path fill-rule="evenodd"
                                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                                    clip-rule="evenodd" />
                            </svg>

                            <a class="text-2xl flex-1"
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=motupallisarathchandra123@gmail.com">motupallisarathchandra123@gmail.com</a>
                        </div>
                        <div class="flex justify-center items-end space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                class="size-6">
                                <path fill-rule="evenodd"
                                    d="M19.902 4.098a3.75 3.75 0 0 0-5.304 0l-4.5 4.5a3.75 3.75 0 0 0 1.035 6.037.75.75 0 0 1-.646 1.353 5.25 5.25 0 0 1-1.449-8.45l4.5-4.5a5.25 5.25 0 1 1 7.424 7.424l-1.757 1.757a.75.75 0 1 1-1.06-1.06l1.757-1.757a3.75 3.75 0 0 0 0-5.304Zm-7.389 4.267a.75.75 0 0 1 1-.353 5.25 5.25 0 0 1 1.449 8.45l-4.5 4.5a5.25 5.25 0 1 1-7.424-7.424l1.757-1.757a.75.75 0 1 1 1.06 1.06l-1.757 1.757a3.75 3.75 0 1 0 5.304 5.304l4.5-4.5a3.75 3.75 0 0 0-1.035-6.037.75.75 0 0 1-.354-1Z"
                                    clip-rule="evenodd" />
                            </svg>

                            <a class="text-2xl flex-1"
                                href="https://linkedin.com/in/motupalli-sarath-8bb6422a0">www.linkedin.com/in/motupalli-sarath-8bb6422a0</a>
                        </div>

                    </div>

                    <div class="flex flex-col border-2 rounded-2xl p-2 mb-2.5">
                        <div class="font-bold text-3xl">Details</div>
                        <div class="pl-1">
                            A mid-sized B2B company using tools like WordPress/Webflow, a CRM (HubSpot/Zoho), Google
                            Workspace, Slack, Notion, and Stripe wants to reduce manual work by automating lead capture
                            from website forms into their CRM, trigger-based follow-up emails, and real-time high-intent
                            lead alerts to the sales team, and is seeking a reliable, maintainable setup using tools
                            such as n8n, Zapier, or Make, along with clarity on scope, access requirements, timelines,
                            and an approximate budget for a first-version implementation.
                        </div>
                    </div>

                    <div class="flex flex-col border-2 rounded-2xl p-2">
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
                <div class="flex-[3] basis-0 flex flex-col justify-center items-center gap-4 pt-9 pb-9 relative">
                    <div class="flex-1 w-full flex space-x-3 items-center">
                        <div class="w-10 h-10 rounded-full flow-light flex justify-center items-center">
                            <div class="w-8 h-8 rounded-full bg-white z-10 flex justify-center items-center">
                                <div class="w-4 h-4 rounded-full flow-light z-10"></div>
                            </div>
                        </div>
                        <div class="state-card">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tempore
                            distinctio harum nam sapiente aut vitae culpa a quisquam saepe.</div>
                    </div>
                    <div class="flex-1 w-full flex space-x-3 items-center">
                        <div class="w-10 h-10 rounded-full flow-light flex justify-center items-center">
                            <div class="w-8 h-8 rounded-full bg-white z-10 flex justify-center items-center">
                                <div class="w-4 h-4 rounded-full flow-light z-10"></div>
                            </div>
                        </div>
                        <div class="state-card">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tempore
                            distinctio harum nam sapiente aut vitae culpa a quisquam saepe.</div>
                    </div>
                    <div class="flex-1 w-full flex space-x-3 items-center">
                        <div class="w-10 h-10 rounded-full flow-light flex justify-center items-center">
                            <div class="w-8 h-8 rounded-full bg-white z-10"></div>
                        </div>
                        <div class="state-card">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tempore
                            distinctio harum nam sapiente aut vitae culpa a quisquam saepe.</div>
                    </div>
                    <div class="flex-1 w-full flex space-x-3 items-center">
                        <div class="w-10 h-10 rounded-full flow-light flex justify-center items-center">
                            <div class="w-8 h-8 rounded-full bg-white z-10"></div>
                        </div>
                        <div class="state-card">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tempore
                            distinctio harum nam sapiente aut vitae culpa a quisquam saepe.</div>
                    </div>
                    <div class="absolute flow-light left-4 top-24 bottom-24 w-2"></div>

                </div>
            </div>
        </>
    )
}

export default App
