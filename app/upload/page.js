export default function Upload() {
    return (
        <div className="py-10 relative md:flex md:py-10 gap-x-6 mx-auto md:flex-row max-w-screen-xl px-4"
        >
            <div className="hidden md:flex w-[284px] md:shrink-0 sticky top-[121px] h-[calc(100vh-121px)] md:flex-col md:justify-between"
            >
                <button className="transition flex rounded-md items-center justify-center text-sm w-8 h-8 text-left text-gray-800 cursor-pointer dark:border-gray-300 hover:border-gray-300 dark:hover:border-gray-400 md:hidden" type="button"
                ><svg data-testid="geist-icon" fill="none" height="22" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="22" style="color:currentColor"
                ><path d="M11 17.25a6.25 6.25 0 110-12.5 6.25 6.25 0 010 12.5z"
                ></path
                        ><path d="M16 16l4.5 4.5"
                        ></path
                        ></svg
                    ></button
                ><button className="hidden mb-2 transition w-full rounded-md items-center border text-sm pl-2 pr-3 py-1.5 text-left border-gray-200 px-2 text-gray-500 cursor-pointer dark:border-gray-300 hover:border-gray-300 dark:hover:border-gray-400 md:flex" type="button"
                >Search...<span className="ml-auto pl-3 flex-none text-xs text-gray-300 dark:text-gray-400"
                >⌘K</span
                    ></button
                ><button type="button" role="combobox" aria-controls="radix-:Rpjdbja:" aria-expanded="false" aria-autocomplete="none" dir="ltr" data-state="closed" aria-label="Open directory select" className="p-2 w-full h-[60px] hover:bg-gray-100 dark:hover:bg-[#1b1b1b] data-[state=open]:bg-gray-100 rounded-md"
                ><span style="pointer-events:none"
                ><div className="flex gap-2 items-center"
                ><div className="text-purple-500 border rounded-md p-1.5 border-purple-100 dark:border-purple-900 bg-gradient-to-b from-white to-purple-100 dark:from-black dark:to-purple-900"
                ><svg data-testid="geist-icon" fill="none" height="20" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="20" style="color:currentColor"
                ><path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z"
                ></path
                                    ><path d="M13 2v7h7"
                                    ></path
                                    ></svg
                                ></div
                            ><div className="text-left"
                            ><p className="text_wrapper__JuukA" data-version="v1" style="--text-color:var(--geist-foreground);--text-size:0.875rem;--text-line-height:1.25rem;--text-letter-spacing:initial;--text-weight:500"
                            >Using Pages Router</p
                                ><p className="text_wrapper__JuukA" data-version="v1" style="--text-color:var(--accents-5);--text-size:0.75rem;--text-line-height:1rem;--text-letter-spacing:initial;--text-weight:400"
                                >Features available in /pages</p
                                ></div
                            ><svg data-testid="geist-icon" fill="none" height="20" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="20" className="ml-auto" aria-hidden="true" style="color:currentColor"
                            ><path d="M6 9l6 6 6-6"
                            ></path
                                ></svg
                            ></div
                        ></span
                    ></button
                ><div className="overflow-hidden relative"
                ><nav className="docs-scrollbar styled-scrollbar overflow-y-scroll flex flex-col pr-2 pb-4 dark:text-white" style="height:calc(100vh - 200px)"
                ><div aria-hidden="true" className="absolute top-0 left-0 h-3 bg-gradient-to-b from-gray-0 w-full z-10 pointer-events-none"
                ></div
                        ><div aria-hidden="true" className="absolute bottom-0 left-0 h-3 bg-gradient-to-t from-gray-0 w-full z-10 pointer-events-none"
                        ></div
                        ><ul className="last-of-type:pb-3"
                        ><li className="my-1.5 ml-[3px]" data-active="false"
                        ><h3 className="mb-[4px] px-2 text-sm font-medium text-gray-700"
                        >Getting Started</h3
                                ><div data-is-collapsed="false" style="height:auto;opacity:1;overflow:hidden;display:flex;flex-direction:column"
                                ><div className="relative"
                                ><ul className="last-of-type:mb-0 mb-8"
                                ><li className="my-1.5" data-active="false"
                                ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/getting-started/installation"
                                >Installation</a
                                                ></li
                                            ><li className="my-1.5" data-active="false"
                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/getting-started/react-essentials"
                                            >React Essentials</a
                                                ></li
                                            ></ul
                                        ><div aria-hidden="true" className="absolute bottom-0 left-0 h-[6px] bg-gradient-to-t from-gray-0 w-full z-10 pointer-events-none"
                                        ></div
                                        ></div
                                    ></div
                                ></li
                            ></ul
                        ><ul className="last-of-type:pb-3 hidden"
                        ><li className="my-1.5 ml-[3px]" data-active="false"
                        ><h3 className="mb-[4px] px-2 text-sm font-medium text-gray-700"
                        >Building Your Application</h3
                                ><div data-is-collapsed="false" style="height:auto;opacity:1;overflow:hidden;display:flex;flex-direction:column"
                                ><div className="relative"
                                ><ul className="last-of-type:mb-0 mb-8"
                                ><li className="my-1.5" data-active="false"
                                ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/building-your-application/routing"
                                >Routing<svg data-testid="geist-icon" fill="none" height="16" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="16" style="color:currentColor"
                                ><path d="M9 18l6-6-6-6"
                                ></path
                                                        ></svg
                                                    ></a
                                                ><div data-is-collapsed="true" style="height: 0px; opacity: 1; overflow: hidden; display: flex; flex-direction: column; transition: opacity 0.15s ease 0s, height 0.2s ease-in-out 0s;"
                                                ><div className="relative"
                                                ><ul className="last-of-type:mb-0 mr-6 border-l border-gray-200 pl-3 dark:border-gray-300 ml-4"
                                                ><li className="my-1.5" data-active="false"
                                                ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/building-your-application/routing/defining-routes"
                                                >Defining Routes</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/building-your-application/routing/pages-and-layouts"
                                                            >Pages and Layouts</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/building-your-application/routing/linking-and-navigating"
                                                            >Linking and Navigating</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/building-your-application/routing/route-groups"
                                                            >Routes Groups</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/building-your-application/routing/dynamic-routes"
                                                            >Dynamic Routes</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/building-your-application/routing/loading-ui-and-streaming"
                                                            >Loading UI and Streaming</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/building-your-application/routing/error-handling"
                                                            >Error Handling</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/building-your-application/routing/parallel-routes"
                                                            >Parallel Routes</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/building-your-application/routing/intercepting-routes"
                                                            >Intercepting Routes</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/building-your-application/routing/router-handlers"
                                                            >Route Handlers</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/building-your-application/routing/middleware"
                                                            >Middleware</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/building-your-application/routing/internationalization"
                                                            >Internationalization</a
                                                                ></li
                                                            ></ul
                                                        ><div aria-hidden="true" className="absolute bottom-0 left-0 h-[6px] bg-gradient-to-t from-gray-0 w-full z-10 pointer-events-none"
                                                        ></div
                                                        ></div
                                                    ></div
                                                ></li
                                            ><li className="my-1.5" data-active="false"
                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/building-your-application/rendering"
                                            >Rendering<svg data-testid="geist-icon" fill="none" height="16" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="16" style="color:currentColor"
                                            ><path d="M9 18l6-6-6-6"
                                            ></path
                                                        ></svg
                                                    ></a
                                                ><div data-is-collapsed="true" style="height: 0px; opacity: 1; overflow: hidden; display: flex; flex-direction: column; transition: opacity 0.15s ease 0s, height 0.2s ease-in-out 0s;"
                                                ><div className="relative"
                                                ><ul className="last-of-type:mb-0 mr-6 border-l border-gray-200 pl-3 dark:border-gray-300 ml-4"
                                                ><li className="my-1.5" data-active="false"
                                                ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/building-your-application/rendering/static-and-dynamic-rendering"
                                                >Static and Dynamic</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/building-your-application/rendering/edge-and-nodejs-runtimes"
                                                            >Edge and Node.js Runtimes</a
                                                                ></li
                                                            ></ul
                                                        ><div aria-hidden="true" className="absolute bottom-0 left-0 h-[6px] bg-gradient-to-t from-gray-0 w-full z-10 pointer-events-none"
                                                        ></div
                                                        ></div
                                                    ></div
                                                ></li
                                            ><li className="my-1.5" data-active="false"
                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/building-your-application/data-fetching"
                                            >Data Fetching<svg data-testid="geist-icon" fill="none" height="16" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="16" style="color:currentColor"
                                            ><path d="M9 18l6-6-6-6"
                                            ></path
                                                        ></svg
                                                    ></a
                                                ><div data-is-collapsed="true" style="height: 0px; opacity: 1; overflow: hidden; display: flex; flex-direction: column; transition: opacity 0.15s ease 0s, height 0.2s ease-in-out 0s;"
                                                ><div className="relative"
                                                ><ul className="last-of-type:mb-0 mr-6 border-l border-gray-200 pl-3 dark:border-gray-300 ml-4"
                                                ><li className="my-1.5" data-active="false"
                                                ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/building-your-application/data-fetching/fetching"
                                                >Fetching</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/building-your-application/data-fetching/caching"
                                                            >Caching</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/building-your-application/data-fetching/revalidating"
                                                            >Revalidating</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/building-your-application/data-fetching/server-actions"
                                                            >Server Actions</a
                                                                ></li
                                                            ></ul
                                                        ><div aria-hidden="true" className="absolute bottom-0 left-0 h-[6px] bg-gradient-to-t from-gray-0 w-full z-10 pointer-events-none"
                                                        ></div
                                                        ></div
                                                    ></div
                                                ></li
                                            ><li className="my-1.5" data-active="false"
                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/building-your-application/styling"
                                            >Styling<svg data-testid="geist-icon" fill="none" height="16" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="16" style="color:currentColor"
                                            ><path d="M9 18l6-6-6-6"
                                            ></path
                                                        ></svg
                                                    ></a
                                                ><div data-is-collapsed="true" style="height: 0px; opacity: 1; overflow: hidden; display: flex; flex-direction: column; transition: opacity 0.15s ease 0s, height 0.2s ease-in-out 0s;"
                                                ><div className="relative"
                                                ><ul className="last-of-type:mb-0 mr-6 border-l border-gray-200 pl-3 dark:border-gray-300 ml-4"
                                                ><li className="my-1.5" data-active="false"
                                                ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/building-your-application/styling/css-modules"
                                                >CSS Modules</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/building-your-application/styling/tailwind-css"
                                                            >Tailwind CSS</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/building-your-application/styling/css-in-js"
                                                            >CSS-in-JS</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/building-your-application/styling/sass"
                                                            >Sass</a
                                                                ></li
                                                            ></ul
                                                        ><div aria-hidden="true" className="absolute bottom-0 left-0 h-[6px] bg-gradient-to-t from-gray-0 w-full z-10 pointer-events-none"
                                                        ></div
                                                        ></div
                                                    ></div
                                                ></li
                                            ><li className="my-1.5" data-active="false"
                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/building-your-application/optimizing"
                                            >Optimizing<svg data-testid="geist-icon" fill="none" height="16" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="16" style="color:currentColor"
                                            ><path d="M6 9l6 6 6-6"
                                            ></path
                                                        ></svg
                                                    ></a
                                                ><div data-is-collapsed="false" style="height:auto;opacity:1;overflow:hidden;display:flex;flex-direction:column"
                                                ><div className="relative"
                                                ><ul className="last-of-type:mb-0 mr-6 border-l border-gray-200 pl-3 dark:border-gray-300 ml-4"
                                                ><li className="my-1.5" data-active="false"
                                                ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/building-your-application/optimizing/images"
                                                >Images</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/building-your-application/optimizing/fonts"
                                                            >Fonts</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/building-your-application/optimizing/scripts"
                                                            >Scripts</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/building-your-application/optimizing/metadata"
                                                            >Metadata</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/building-your-application/optimizing/static-assets"
                                                            >Static Assets</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/building-your-application/optimizing/lazy-loading"
                                                            >Lazy Loading</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/building-your-application/optimizing/analytics"
                                                            >Analytics</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/building-your-application/optimizing/open-telemetry"
                                                            >OpenTelemetry</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/building-your-application/optimizing/instrumentation"
                                                            >Instrumentation</a
                                                                ></li
                                                            ></ul
                                                        ><div aria-hidden="true" className="absolute bottom-0 left-0 h-[6px] bg-gradient-to-t from-gray-0 w-full z-10 pointer-events-none"
                                                        ></div
                                                        ></div
                                                    ></div
                                                ></li
                                            ><li className="my-1.5" data-active="false"
                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/building-your-application/configuring"
                                            >Configuring<svg data-testid="geist-icon" fill="none" height="16" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="16" style="color:currentColor"
                                            ><path d="M9 18l6-6-6-6"
                                            ></path
                                                        ></svg
                                                    ></a
                                                ><div data-is-collapsed="true" style="height: 0px; opacity: 1; overflow: hidden; display: flex; flex-direction: column; transition: opacity 0.15s ease 0s, height 0.2s ease-in-out 0s;"
                                                ><div className="relative"
                                                ><ul className="last-of-type:mb-0 mr-6 border-l border-gray-200 pl-3 dark:border-gray-300 ml-4"
                                                ><li className="my-1.5" data-active="false"
                                                ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/building-your-application/configuring/typescript"
                                                >TypeScript</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/building-your-application/configuring/eslint"
                                                            >ESLint</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/building-your-application/configuring/environment-variables"
                                                            >Environment Variables</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/building-your-application/configuring/absolute-imports-and-module-aliases"
                                                            >Absolute Imports and Module Path Aliases</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/building-your-application/configuring/mdx"
                                                            >MDX</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/building-your-application/configuring/src-directory"
                                                            >src Directory</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/building-your-application/configuring/draft-mode"
                                                            >Draft Mode</a
                                                                ></li
                                                            ></ul
                                                        ><div aria-hidden="true" className="absolute bottom-0 left-0 h-[6px] bg-gradient-to-t from-gray-0 w-full z-10 pointer-events-none"
                                                        ></div
                                                        ></div
                                                    ></div
                                                ></li
                                            ><li className="my-1.5" data-active="false"
                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/building-your-application/deploying"
                                            >Deploying<svg data-testid="geist-icon" fill="none" height="16" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="16" style="color:currentColor"
                                            ><path d="M9 18l6-6-6-6"
                                            ></path
                                                        ></svg
                                                    ></a
                                                ><div data-is-collapsed="true" style="height: 0px; opacity: 1; overflow: hidden; display: flex; flex-direction: column; transition: opacity 0.15s ease 0s, height 0.2s ease-in-out 0s;"
                                                ><div className="relative"
                                                ><ul className="last-of-type:mb-0 mr-6 border-l border-gray-200 pl-3 dark:border-gray-300 ml-4"
                                                ><li className="my-1.5" data-active="false"
                                                ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/building-your-application/deploying/static-exports"
                                                >Static Exports</a
                                                                ></li
                                                            ></ul
                                                        ><div aria-hidden="true" className="absolute bottom-0 left-0 h-[6px] bg-gradient-to-t from-gray-0 w-full z-10 pointer-events-none"
                                                        ></div
                                                        ></div
                                                    ></div
                                                ></li
                                            ><li className="my-1.5" data-active="false"
                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/building-your-application/upgrading"
                                            >Upgrading<svg data-testid="geist-icon" fill="none" height="16" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="16" style="color:currentColor"
                                            ><path d="M9 18l6-6-6-6"
                                            ></path
                                                        ></svg
                                                    ></a
                                                ><div data-is-collapsed="true" style="height: 0px; opacity: 1; overflow: hidden; display: flex; flex-direction: column; transition: opacity 0.15s ease 0s, height 0.2s ease-in-out 0s;"
                                                ><div className="relative"
                                                ><ul className="last-of-type:mb-0 mr-6 border-l border-gray-200 pl-3 dark:border-gray-300 ml-4"
                                                ><li className="my-1.5" data-active="false"
                                                ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/building-your-application/upgrading/codemods"
                                                >Codemods</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/building-your-application/upgrading/app-router-migration"
                                                            >App Router Migration</a
                                                                ></li
                                                            ></ul
                                                        ><div aria-hidden="true" className="absolute bottom-0 left-0 h-[6px] bg-gradient-to-t from-gray-0 w-full z-10 pointer-events-none"
                                                        ></div
                                                        ></div
                                                    ></div
                                                ></li
                                            ></ul
                                        ><div aria-hidden="true" className="absolute bottom-0 left-0 h-[6px] bg-gradient-to-t from-gray-0 w-full z-10 pointer-events-none"
                                        ></div
                                        ></div
                                    ></div
                                ></li
                            ></ul
                        ><ul className="last-of-type:pb-3 hidden"
                        ><li className="my-1.5 ml-[3px]" data-active="false"
                        ><h3 className="mb-[4px] px-2 text-sm font-medium text-gray-700"
                        >API Reference</h3
                                ><div data-is-collapsed="false" style="height:auto;opacity:1;overflow:hidden;display:flex;flex-direction:column"
                                ><div className="relative"
                                ><ul className="last-of-type:mb-0 mb-8"
                                ><li className="my-1.5" data-active="false"
                                ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/api-reference/components"
                                >Components<svg data-testid="geist-icon" fill="none" height="16" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="16" style="color:currentColor"
                                ><path d="M9 18l6-6-6-6"
                                ></path
                                                        ></svg
                                                    ></a
                                                ><div data-is-collapsed="true" style="height: 0px; opacity: 1; overflow: hidden; display: flex; flex-direction: column;"
                                                ><div className="relative"
                                                ><ul className="last-of-type:mb-0 mr-6 border-l border-gray-200 pl-3 dark:border-gray-300 ml-4"
                                                ><li className="my-1.5" data-active="false"
                                                ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/api-reference/components/font"
                                                >Font</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/api-reference/components/image"
                                                            >&lt;Image&gt;</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/api-reference/components/link"
                                                            >&lt;Link&gt;</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/api-reference/components/script"
                                                            >&lt;Script&gt;</a
                                                                ></li
                                                            ></ul
                                                        ><div aria-hidden="true" className="absolute bottom-0 left-0 h-[6px] bg-gradient-to-t from-gray-0 w-full z-10 pointer-events-none"
                                                        ></div
                                                        ></div
                                                    ></div
                                                ></li
                                            ><li className="my-1.5" data-active="false"
                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/api-reference/file-conventions"
                                            >File Conventions<svg data-testid="geist-icon" fill="none" height="16" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="16" style="color:currentColor"
                                            ><path d="M9 18l6-6-6-6"
                                            ></path
                                                        ></svg
                                                    ></a
                                                ><div data-is-collapsed="true" style="height: 0px; opacity: 1; overflow: hidden; display: flex; flex-direction: column;"
                                                ><div className="relative"
                                                ><ul className="last-of-type:mb-0 mr-6 border-l border-gray-200 pl-3 dark:border-gray-300 ml-4"
                                                ><li className="my-1.5" data-active="false"
                                                ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/api-reference/file-conventions/default"
                                                >default.js</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/api-reference/file-conventions/error"
                                                            >error.js</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/api-reference/file-conventions/layout"
                                                            >layout.js</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/api-reference/file-conventions/loading"
                                                            >loading.js</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/api-reference/file-conventions/not-found"
                                                            >not-found.js</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/api-reference/file-conventions/page"
                                                            >page.js</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/api-reference/file-conventions/route"
                                                            >route.js</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/api-reference/file-conventions/route-segment-config"
                                                            >Route Segment Config</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/api-reference/file-conventions/template"
                                                            >template.js</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/api-reference/file-conventions/metadata"
                                                            >Metadata<svg data-testid="geist-icon" fill="none" height="16" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="16" style="color:currentColor"
                                                            ><path d="M9 18l6-6-6-6"
                                                            ></path
                                                                        ></svg
                                                                    ></a
                                                                ><div data-is-collapsed="true" style="height: 0px; opacity: 1; overflow: hidden; display: flex; flex-direction: column;"
                                                                ><div className="relative"
                                                                ><ul className="last-of-type:mb-0 mr-6 border-l border-gray-200 pl-3 dark:border-gray-300 ml-6"
                                                                ><li className="my-1.5" data-active="false"
                                                                ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/api-reference/file-conventions/metadata/app-icons"
                                                                >favicon.ico, apple-icon.jpg, and icon.jpg</a
                                                                                ></li
                                                                            ><li className="my-1.5" data-active="false"
                                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/api-reference/file-conventions/metadata/opengraph-image"
                                                                            >opengraph-image.js and twitter-image.js</a
                                                                                ></li
                                                                            ><li className="my-1.5" data-active="false"
                                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/api-reference/file-conventions/metadata/robots"
                                                                            >robots.txt</a
                                                                                ></li
                                                                            ><li className="my-1.5" data-active="false"
                                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/api-reference/file-conventions/metadata/sitemap"
                                                                            >sitemap.xml</a
                                                                                ></li
                                                                            ></ul
                                                                        ><div aria-hidden="true" className="absolute bottom-0 left-0 h-[6px] bg-gradient-to-t from-gray-0 w-full z-10 pointer-events-none"
                                                                        ></div
                                                                        ></div
                                                                    ></div
                                                                ></li
                                                            ></ul
                                                        ><div aria-hidden="true" className="absolute bottom-0 left-0 h-[6px] bg-gradient-to-t from-gray-0 w-full z-10 pointer-events-none"
                                                        ></div
                                                        ></div
                                                    ></div
                                                ></li
                                            ><li className="my-1.5" data-active="false"
                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/api-reference/functions"
                                            >Functions<svg data-testid="geist-icon" fill="none" height="16" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="16" style="color:currentColor"
                                            ><path d="M9 18l6-6-6-6"
                                            ></path
                                                        ></svg
                                                    ></a
                                                ><div data-is-collapsed="true" style="height: 0px; opacity: 1; overflow: hidden; display: flex; flex-direction: column;"
                                                ><div className="relative"
                                                ><ul className="last-of-type:mb-0 mr-6 border-l border-gray-200 pl-3 dark:border-gray-300 ml-4"
                                                ><li className="my-1.5" data-active="false"
                                                ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/api-reference/functions/cookies"
                                                >cookies</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/api-reference/functions/draft-mode"
                                                            >draftMode</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/api-reference/functions/fetch"
                                                            >fetch</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/api-reference/functions/generate-metadata"
                                                            >generateMetadata</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/api-reference/functions/generate-static-params"
                                                            >generateStaticParams</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/api-reference/functions/headers"
                                                            >headers</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/api-reference/functions/image-response"
                                                            >imageResponse</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/api-reference/functions/next-request"
                                                            >NextRequest</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/api-reference/functions/next-response"
                                                            >NextResponse</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/api-reference/functions/not-found"
                                                            >notFound</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/api-reference/functions/redirect"
                                                            >redirect</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/api-reference/functions/revalidatePath"
                                                            >revalidatePath</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/api-reference/functions/revalidateTag"
                                                            >revalidateTag</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/api-reference/functions/use-params"
                                                            >useParams</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/api-reference/functions/use-pathname"
                                                            >usePathname</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/api-reference/functions/use-report-web-vitals"
                                                            >useReportWebVitals</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/api-reference/functions/use-router"
                                                            >useRouter</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/api-reference/functions/use-search-params"
                                                            >useSearchParams</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/api-reference/functions/use-selected-layout-segment"
                                                            >useSelectedLayoutSegment</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/api-reference/functions/use-selected-layout-segments"
                                                            >useSelectedLayoutSegments</a
                                                                ></li
                                                            ></ul
                                                        ><div aria-hidden="true" className="absolute bottom-0 left-0 h-[6px] bg-gradient-to-t from-gray-0 w-full z-10 pointer-events-none"
                                                        ></div
                                                        ></div
                                                    ></div
                                                ></li
                                            ><li className="my-1.5" data-active="false"
                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/api-reference/next-config-js"
                                            >next.config.js Options<svg data-testid="geist-icon" fill="none" height="16" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="16" style="color:currentColor"
                                            ><path d="M9 18l6-6-6-6"
                                            ></path
                                                        ></svg
                                                    ></a
                                                ><div data-is-collapsed="true" style="height: 0px; opacity: 1; overflow: hidden; display: flex; flex-direction: column;"
                                                ><div className="relative"
                                                ><ul className="last-of-type:mb-0 mr-6 border-l border-gray-200 pl-3 dark:border-gray-300 ml-4"
                                                ><li className="my-1.5" data-active="false"
                                                ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/api-reference/next-config-js/appDir"
                                                >appDir</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/api-reference/next-config-js/assetPrefix"
                                                            >assetPrefix</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/api-reference/next-config-js/basePath"
                                                            >basePath</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/api-reference/next-config-js/compress"
                                                            >compress</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/api-reference/next-config-js/devIndicators"
                                                            >devIndicators</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/api-reference/next-config-js/distDir"
                                                            >distDir</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/api-reference/next-config-js/env"
                                                            >env</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/api-reference/next-config-js/eslint"
                                                            >eslint</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/api-reference/next-config-js/exportPathMap"
                                                            >exportPathMap</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/api-reference/next-config-js/generateBuildId"
                                                            >generateBuildId</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/api-reference/next-config-js/generateEtags"
                                                            >generateEtags</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/api-reference/next-config-js/headers"
                                                            >headers</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/api-reference/next-config-js/httpAgentOptions"
                                                            >httpAgentOptions</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/api-reference/next-config-js/images"
                                                            >images</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/api-reference/next-config-js/mdxRs"
                                                            >mdxRs</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/api-reference/next-config-js/onDemandEntries"
                                                            >onDemandEntries</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/api-reference/next-config-js/output"
                                                            >output</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/api-reference/next-config-js/pageExtensions"
                                                            >pageExtensions</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/api-reference/next-config-js/poweredByHeader"
                                                            >poweredByHeader</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/api-reference/next-config-js/productionBrowserSourceMaps"
                                                            >productionBrowserSourceMaps</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/api-reference/next-config-js/reactStrictMode"
                                                            >reactStrictMode</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/api-reference/next-config-js/redirects"
                                                            >redirects</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/api-reference/next-config-js/rewrites"
                                                            >rewrites</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/api-reference/next-config-js/runtime-configuration"
                                                            >serverRuntimeConfig and publicRuntimeConfig</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/api-reference/next-config-js/serverComponentsExternalPackages"
                                                            >serverComponentsExternalPackages</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/api-reference/next-config-js/trailingSlash"
                                                            >trailingSlash</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/api-reference/next-config-js/transpilePackages"
                                                            >transpilePackages</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/api-reference/next-config-js/turbo"
                                                            >turbo</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/api-reference/next-config-js/typedRoutes"
                                                            >typedRoutes</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/api-reference/next-config-js/typescript"
                                                            >typescript</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/api-reference/next-config-js/urlImports"
                                                            >urlImports</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/api-reference/next-config-js/webpack"
                                                            >webpack</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/api-reference/next-config-js/webVitalsAttribution"
                                                            >webVitalsAttribution</a
                                                                ></li
                                                            ></ul
                                                        ><div aria-hidden="true" className="absolute bottom-0 left-0 h-[6px] bg-gradient-to-t from-gray-0 w-full z-10 pointer-events-none"
                                                        ></div
                                                        ></div
                                                    ></div
                                                ></li
                                            ><li className="my-1.5" data-active="false"
                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/api-reference/create-next-app"
                                            >create-next-app</a
                                                ></li
                                            ><li className="my-1.5" data-active="false"
                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/api-reference/edge"
                                            >Edge Runtime</a
                                                ></li
                                            ><li className="my-1.5" data-active="false"
                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/app/api-reference/next-cli"
                                            >Next.js CLI</a
                                                ></li
                                            ></ul
                                        ><div aria-hidden="true" className="absolute bottom-0 left-0 h-[6px] bg-gradient-to-t from-gray-0 w-full z-10 pointer-events-none"
                                        ></div
                                        ></div
                                    ></div
                                ></li
                            ></ul
                        ><ul className="last-of-type:pb-3"
                        ><li className="my-1.5 ml-[3px]" data-active="false"
                        ><h3 className="mb-[4px] px-2 text-sm font-medium text-gray-700"
                        >Building Your Application</h3
                                ><div data-is-collapsed="false" style="height:auto;opacity:1;overflow:hidden;display:flex;flex-direction:column"
                                ><div className="relative"
                                ><ul className="last-of-type:mb-0 mb-8"
                                ><li className="my-1.5" data-active="false"
                                ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/building-your-application/routing"
                                >Routing<svg data-testid="geist-icon" fill="none" height="16" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="16" style="color:currentColor"
                                ><path d="M9 18l6-6-6-6"
                                ></path
                                                        ></svg
                                                    ></a
                                                ><div data-is-collapsed="true" style="height: 0px; opacity: 0; overflow: hidden; display: flex; flex-direction: column; transition: opacity 0.15s ease 0s, height 0.2s ease-in-out 0s;"
                                                ><div className="relative"
                                                ><ul className="last-of-type:mb-0 mr-6 border-l border-gray-200 pl-3 dark:border-gray-300 ml-4"
                                                ><li className="my-1.5" data-active="false"
                                                ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/building-your-application/routing/pages-and-layouts"
                                                >Pages and Layouts</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/building-your-application/routing/dynamic-routes"
                                                            >Dynamic Routes</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/building-your-application/routing/linking-and-navigating"
                                                            >Linking and Navigating</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/building-your-application/routing/custom-app"
                                                            >Custom App</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/building-your-application/routing/custom-document"
                                                            >Custom Document</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/building-your-application/routing/custom-error"
                                                            >Custom Errors</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/building-your-application/routing/api-routes"
                                                            >API Routes</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/building-your-application/routing/internationalization"
                                                            >Internationalization</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/building-your-application/routing/authenticating"
                                                            >Authenticating</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/building-your-application/routing/middleware"
                                                            >Middleware</a
                                                                ></li
                                                            ></ul
                                                        ><div aria-hidden="true" className="absolute bottom-0 left-0 h-[6px] bg-gradient-to-t from-gray-0 w-full z-10 pointer-events-none"
                                                        ></div
                                                        ></div
                                                    ></div
                                                ></li
                                            ><li className="my-1.5" data-active="false"
                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/building-your-application/rendering"
                                            >Rendering<svg data-testid="geist-icon" fill="none" height="16" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="16" style="color:currentColor"
                                            ><path d="M9 18l6-6-6-6"
                                            ></path
                                                        ></svg
                                                    ></a
                                                ><div data-is-collapsed="true" style="height: 0px; opacity: 0; overflow: hidden; display: flex; flex-direction: column; transition: opacity 0.15s ease 0s, height 0.2s ease-in-out 0s;"
                                                ><div className="relative"
                                                ><ul className="last-of-type:mb-0 mr-6 border-l border-gray-200 pl-3 dark:border-gray-300 ml-4"
                                                ><li className="my-1.5" data-active="false"
                                                ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/building-your-application/rendering/server-side-rendering"
                                                >Server-side Rendering (SSR)</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/building-your-application/rendering/static-site-generation"
                                                            >Static Site Generation (SSG)</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/building-your-application/rendering/incremental-static-regeneration"
                                                            >Incremental Static Regeneration (ISR)</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/building-your-application/rendering/automatic-static-optimization"
                                                            >Automatic Static Optimization</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/building-your-application/rendering/client-side-rendering"
                                                            >Client-side Rendering (CSR)</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/building-your-application/rendering/edge-and-nodejs-runtimes"
                                                            >Edge and Node.js Runtimes</a
                                                                ></li
                                                            ></ul
                                                        ><div aria-hidden="true" className="absolute bottom-0 left-0 h-[6px] bg-gradient-to-t from-gray-0 w-full z-10 pointer-events-none"
                                                        ></div
                                                        ></div
                                                    ></div
                                                ></li
                                            ><li className="my-1.5" data-active="false"
                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/building-your-application/data-fetching"
                                            >Data Fetching<svg data-testid="geist-icon" fill="none" height="16" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="16" style="color:currentColor"
                                            ><path d="M9 18l6-6-6-6"
                                            ></path
                                                        ></svg
                                                    ></a
                                                ><div data-is-collapsed="true" style="height: 0px; opacity: 0; overflow: hidden; display: flex; flex-direction: column; transition: opacity 0.15s ease 0s, height 0.2s ease-in-out 0s;"
                                                ><div className="relative"
                                                ><ul className="last-of-type:mb-0 mr-6 border-l border-gray-200 pl-3 dark:border-gray-300 ml-4"
                                                ><li className="my-1.5" data-active="false"
                                                ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/building-your-application/data-fetching/get-static-props"
                                                >getStaticProps</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/building-your-application/data-fetching/get-static-paths"
                                                            >getStaticPaths</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/building-your-application/data-fetching/get-server-side-props"
                                                            >getServerSideProps</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/building-your-application/data-fetching/incremental-static-regeneration"
                                                            >Incremental Static Regeneration</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/building-your-application/data-fetching/client-side"
                                                            >Client-side Fetching</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/building-your-application/data-fetching/building-forms"
                                                            >Building Forms</a
                                                                ></li
                                                            ></ul
                                                        ><div aria-hidden="true" className="absolute bottom-0 left-0 h-[6px] bg-gradient-to-t from-gray-0 w-full z-10 pointer-events-none"
                                                        ></div
                                                        ></div
                                                    ></div
                                                ></li
                                            ><li className="my-1.5" data-active="false"
                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/building-your-application/styling"
                                            >Styling<svg data-testid="geist-icon" fill="none" height="16" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="16" style="color:currentColor"
                                            ><path d="M9 18l6-6-6-6"
                                            ></path
                                                        ></svg
                                                    ></a
                                                ><div data-is-collapsed="true" style="height: 0px; opacity: 0; overflow: hidden; display: flex; flex-direction: column; transition: opacity 0.15s ease 0s, height 0.2s ease-in-out 0s;"
                                                ><div className="relative"
                                                ><ul className="last-of-type:mb-0 mr-6 border-l border-gray-200 pl-3 dark:border-gray-300 ml-4"
                                                ><li className="my-1.5" data-active="false"
                                                ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/building-your-application/styling/css-modules"
                                                >CSS Modules</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/building-your-application/styling/tailwind-css"
                                                            >Tailwind CSS</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/building-your-application/styling/css-in-js"
                                                            >CSS-in-JS</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/building-your-application/styling/sass"
                                                            >Sass</a
                                                                ></li
                                                            ></ul
                                                        ><div aria-hidden="true" className="absolute bottom-0 left-0 h-[6px] bg-gradient-to-t from-gray-0 w-full z-10 pointer-events-none"
                                                        ></div
                                                        ></div
                                                    ></div
                                                ></li
                                            ><li className="my-1.5" data-active="false"
                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/building-your-application/optimizing"
                                            >Optimizing<svg data-testid="geist-icon" fill="none" height="16" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="16" style="color:currentColor"
                                            ><path d="M6 9l6 6 6-6"
                                            ></path
                                                        ></svg
                                                    ></a
                                                ><div data-is-collapsed="false" style="height: 346px; opacity: 1; overflow: hidden; display: flex; flex-direction: column;"
                                                ><div className="relative"
                                                ><ul className="last-of-type:mb-0 mr-6 border-l border-gray-200 pl-3 dark:border-gray-300 ml-4"
                                                ><li className="my-1.5" data-active="true"
                                                ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm font-medium text-blue-600 dark:text-blue-500" href="/docs/pages/building-your-application/optimizing/images"
                                                ><div aria-hidden="true" className="absolute -left-[13px] top-0 bottom-0 w-[1px] bg-blue-600"
                                                ></div
                                                                    >Images</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/building-your-application/optimizing/fonts"
                                                            >Fonts</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/building-your-application/optimizing/scripts"
                                                            >Scripts</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/building-your-application/optimizing/head"
                                                            >Head</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/building-your-application/optimizing/static-assets"
                                                            >Static Assets</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/building-your-application/optimizing/lazy-loading"
                                                            >Lazy Loading</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/building-your-application/optimizing/analytics"
                                                            >Analytics</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/building-your-application/optimizing/open-telemetry"
                                                            >OpenTelemetry</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/building-your-application/optimizing/instrumentation"
                                                            >Instrumentation</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/building-your-application/optimizing/testing"
                                                            >Testing</a
                                                                ></li
                                                            ></ul
                                                        ><div aria-hidden="true" className="absolute bottom-0 left-0 h-[6px] bg-gradient-to-t from-gray-0 w-full z-10 pointer-events-none"
                                                        ></div
                                                        ></div
                                                    ></div
                                                ></li
                                            ><li className="my-1.5" data-active="false"
                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/building-your-application/configuring"
                                            >Configuring<svg data-testid="geist-icon" fill="none" height="16" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="16" style="color:currentColor"
                                            ><path d="M9 18l6-6-6-6"
                                            ></path
                                                        ></svg
                                                    ></a
                                                ><div data-is-collapsed="true" style="height: 0px; opacity: 0; overflow: hidden; display: flex; flex-direction: column; transition: opacity 0.15s ease 0s, height 0.2s ease-in-out 0s;"
                                                ><div className="relative"
                                                ><ul className="last-of-type:mb-0 mr-6 border-l border-gray-200 pl-3 dark:border-gray-300 ml-4"
                                                ><li className="my-1.5" data-active="false"
                                                ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/building-your-application/configuring/typescript"
                                                >TypeScript</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/building-your-application/configuring/eslint"
                                                            >ESLint</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/building-your-application/configuring/environment-variables"
                                                            >Environment Variables</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/building-your-application/configuring/absolute-imports-and-module-aliases"
                                                            >Absolute Imports and Module Path Aliases</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/building-your-application/configuring/src-directory"
                                                            >src Directory</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/building-your-application/configuring/mdx"
                                                            >MDX</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/building-your-application/configuring/amp"
                                                            >AMP</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/building-your-application/configuring/babel"
                                                            >Babel</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/building-your-application/configuring/post-css"
                                                            >PostCSS</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/building-your-application/configuring/custom-server"
                                                            >Custom Server</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/building-your-application/configuring/draft-mode"
                                                            >Draft Mode</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/building-your-application/configuring/error-handling"
                                                            >Error Handling</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/building-your-application/configuring/debugging"
                                                            >Debugging</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/building-your-application/configuring/preview-mode"
                                                            >Preview Mode (legacy)</a
                                                                ></li
                                                            ></ul
                                                        ><div aria-hidden="true" className="absolute bottom-0 left-0 h-[6px] bg-gradient-to-t from-gray-0 w-full z-10 pointer-events-none"
                                                        ></div
                                                        ></div
                                                    ></div
                                                ></li
                                            ><li className="my-1.5" data-active="false"
                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/building-your-application/deploying"
                                            >Deploying<svg data-testid="geist-icon" fill="none" height="16" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="16" style="color:currentColor"
                                            ><path d="M9 18l6-6-6-6"
                                            ></path
                                                        ></svg
                                                    ></a
                                                ><div data-is-collapsed="true" style="height: 0px; opacity: 0; overflow: hidden; display: flex; flex-direction: column; transition: opacity 0.15s ease 0s, height 0.2s ease-in-out 0s;"
                                                ><div className="relative"
                                                ><ul className="last-of-type:mb-0 mr-6 border-l border-gray-200 pl-3 dark:border-gray-300 ml-4"
                                                ><li className="my-1.5" data-active="false"
                                                ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/building-your-application/deploying/production-checklist"
                                                >Going to Production</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/building-your-application/deploying/static-exports"
                                                            >Static Exports</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/building-your-application/deploying/multi-zones"
                                                            >Multi Zones</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/building-your-application/deploying/ci-build-caching"
                                                            >Continuous Integration (CI) Build Caching</a
                                                                ></li
                                                            ></ul
                                                        ><div aria-hidden="true" className="absolute bottom-0 left-0 h-[6px] bg-gradient-to-t from-gray-0 w-full z-10 pointer-events-none"
                                                        ></div
                                                        ></div
                                                    ></div
                                                ></li
                                            ><li className="my-1.5" data-active="false"
                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/building-your-application/upgrading"
                                            >Upgrading<svg data-testid="geist-icon" fill="none" height="16" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="16" style="color:currentColor"
                                            ><path d="M9 18l6-6-6-6"
                                            ></path
                                                        ></svg
                                                    ></a
                                                ><div data-is-collapsed="true" style="height: 0px; opacity: 0; overflow: hidden; display: flex; flex-direction: column; transition: opacity 0.15s ease 0s, height 0.2s ease-in-out 0s;"
                                                ><div className="relative"
                                                ><ul className="last-of-type:mb-0 mr-6 border-l border-gray-200 pl-3 dark:border-gray-300 ml-4"
                                                ><li className="my-1.5" data-active="false"
                                                ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/building-your-application/upgrading/codemods"
                                                >Codemods</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/building-your-application/upgrading/app-router-migration"
                                                            >From Pages to App</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/building-your-application/upgrading/version-13"
                                                            >Version 13</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/building-your-application/upgrading/version-12"
                                                            >Version 12</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/building-your-application/upgrading/version-11"
                                                            >Version 11</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/building-your-application/upgrading/version-10"
                                                            >Version 10</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/building-your-application/upgrading/version-9"
                                                            >Version 9</a
                                                                ></li
                                                            ></ul
                                                        ><div aria-hidden="true" className="absolute bottom-0 left-0 h-[6px] bg-gradient-to-t from-gray-0 w-full z-10 pointer-events-none"
                                                        ></div
                                                        ></div
                                                    ></div
                                                ></li
                                            ></ul
                                        ><div aria-hidden="true" className="absolute bottom-0 left-0 h-[6px] bg-gradient-to-t from-gray-0 w-full z-10 pointer-events-none"
                                        ></div
                                        ></div
                                    ></div
                                ></li
                            ></ul
                        ><ul className="last-of-type:pb-3"
                        ><li className="my-1.5 ml-[3px]" data-active="false"
                        ><h3 className="mb-[4px] px-2 text-sm font-medium text-gray-700"
                        >API Reference</h3
                                ><div data-is-collapsed="false" style="height:auto;opacity:1;overflow:hidden;display:flex;flex-direction:column"
                                ><div className="relative"
                                ><ul className="last-of-type:mb-0 mb-8"
                                ><li className="my-1.5" data-active="false"
                                ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/api-reference/components"
                                >Components<svg data-testid="geist-icon" fill="none" height="16" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="16" style="color:currentColor"
                                ><path d="M9 18l6-6-6-6"
                                ></path
                                                        ></svg
                                                    ></a
                                                ><div data-is-collapsed="true" style="height:0;opacity:0;overflow:hidden;display:flex;flex-direction:column"
                                                ><div className="relative"
                                                ><ul className="last-of-type:mb-0 mr-6 border-l border-gray-200 pl-3 dark:border-gray-300 ml-4"
                                                ><li className="my-1.5" data-active="false"
                                                ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/api-reference/components/font"
                                                >Font</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/api-reference/components/head"
                                                            >&lt;Head&gt;</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/api-reference/components/image"
                                                            >&lt;Image&gt;</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/api-reference/components/image-legacy"
                                                            >&lt;Image&gt; (Legacy)</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/api-reference/components/link"
                                                            >&lt;Link&gt;</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/api-reference/components/script"
                                                            >&lt;Script&gt;</a
                                                                ></li
                                                            ></ul
                                                        ><div aria-hidden="true" className="absolute bottom-0 left-0 h-[6px] bg-gradient-to-t from-gray-0 w-full z-10 pointer-events-none"
                                                        ></div
                                                        ></div
                                                    ></div
                                                ></li
                                            ><li className="my-1.5" data-active="false"
                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/api-reference/functions"
                                            >Functions<svg data-testid="geist-icon" fill="none" height="16" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="16" style="color:currentColor"
                                            ><path d="M9 18l6-6-6-6"
                                            ></path
                                                        ></svg
                                                    ></a
                                                ><div data-is-collapsed="true" style="height:0;opacity:0;overflow:hidden;display:flex;flex-direction:column"
                                                ><div className="relative"
                                                ><ul className="last-of-type:mb-0 mr-6 border-l border-gray-200 pl-3 dark:border-gray-300 ml-4"
                                                ><li className="my-1.5" data-active="false"
                                                ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/api-reference/functions/get-initial-props"
                                                >getInitialProps</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/api-reference/functions/get-server-side-props"
                                                            >getServerSideProps</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/api-reference/functions/get-static-paths"
                                                            >getStaticPaths</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/api-reference/functions/get-static-props"
                                                            >getStaticProps</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/api-reference/functions/next-server"
                                                            >NextRequest and NextResponse</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/api-reference/functions/use-amp"
                                                            >useAmp</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/api-reference/functions/use-report-web-vitals"
                                                            >useReportWebVitals</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/api-reference/functions/use-router"
                                                            >useRouter</a
                                                                ></li
                                                            ></ul
                                                        ><div aria-hidden="true" className="absolute bottom-0 left-0 h-[6px] bg-gradient-to-t from-gray-0 w-full z-10 pointer-events-none"
                                                        ></div
                                                        ></div
                                                    ></div
                                                ></li
                                            ><li className="my-1.5" data-active="false"
                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/api-reference/next-config-js"
                                            >next.config.js Options<svg data-testid="geist-icon" fill="none" height="16" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="16" style="color:currentColor"
                                            ><path d="M9 18l6-6-6-6"
                                            ></path
                                                        ></svg
                                                    ></a
                                                ><div data-is-collapsed="true" style="height:0;opacity:0;overflow:hidden;display:flex;flex-direction:column"
                                                ><div className="relative"
                                                ><ul className="last-of-type:mb-0 mr-6 border-l border-gray-200 pl-3 dark:border-gray-300 ml-4"
                                                ><li className="my-1.5" data-active="false"
                                                ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/api-reference/next-config-js/assetPrefix"
                                                >assetPrefix</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/api-reference/next-config-js/basePath"
                                                            >basePath</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/api-reference/next-config-js/compress"
                                                            >compress</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/api-reference/next-config-js/devIndicators"
                                                            >devIndicators</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/api-reference/next-config-js/distDir"
                                                            >distDir</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/api-reference/next-config-js/env"
                                                            >env</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/api-reference/next-config-js/eslint"
                                                            >eslint</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/api-reference/next-config-js/exportPathMap"
                                                            >exportPathMap</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/api-reference/next-config-js/generateBuildId"
                                                            >generateBuildId</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/api-reference/next-config-js/generateEtags"
                                                            >generateEtags</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/api-reference/next-config-js/headers"
                                                            >headers</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/api-reference/next-config-js/httpAgentOptions"
                                                            >httpAgentOptions</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/api-reference/next-config-js/images"
                                                            >images</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/api-reference/next-config-js/onDemandEntries"
                                                            >onDemandEntries</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/api-reference/next-config-js/output"
                                                            >output</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/api-reference/next-config-js/pageExtensions"
                                                            >pageExtensions</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/api-reference/next-config-js/poweredByHeader"
                                                            >poweredByHeader</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/api-reference/next-config-js/productionBrowserSourceMaps"
                                                            >productionBrowserSourceMaps</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/api-reference/next-config-js/reactStrictMode"
                                                            >reactStrictMode</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/api-reference/next-config-js/redirects"
                                                            >redirects</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/api-reference/next-config-js/rewrites"
                                                            >rewrites</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/api-reference/next-config-js/runtime-configuration"
                                                            >serverRuntimeConfig and publicRuntimeConfig</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/api-reference/next-config-js/trailingSlash"
                                                            >trailingSlash</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/api-reference/next-config-js/transpilePackages"
                                                            >transpilePackages</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/api-reference/next-config-js/turbo"
                                                            >turbo</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/api-reference/next-config-js/typescript"
                                                            >typescript</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/api-reference/next-config-js/urlImports"
                                                            >urlImports</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/api-reference/next-config-js/webpack"
                                                            >webpack</a
                                                                ></li
                                                            ><li className="my-1.5" data-active="false"
                                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/api-reference/next-config-js/webVitalsAttribution"
                                                            >webVitalsAttribution</a
                                                                ></li
                                                            ></ul
                                                        ><div aria-hidden="true" className="absolute bottom-0 left-0 h-[6px] bg-gradient-to-t from-gray-0 w-full z-10 pointer-events-none"
                                                        ></div
                                                        ></div
                                                    ></div
                                                ></li
                                            ><li className="my-1.5" data-active="false"
                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/api-reference/create-next-app"
                                            >create-next-app</a
                                                ></li
                                            ><li className="my-1.5" data-active="false"
                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/api-reference/next-cli"
                                            >Next.js CLI</a
                                                ></li
                                            ><li className="my-1.5" data-active="false"
                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/pages/api-reference/edge"
                                            >Edge Runtime</a
                                                ></li
                                            ></ul
                                        ><div aria-hidden="true" className="absolute bottom-0 left-0 h-[6px] bg-gradient-to-t from-gray-0 w-full z-10 pointer-events-none"
                                        ></div
                                        ></div
                                    ></div
                                ></li
                            ></ul
                        ><ul className="last-of-type:pb-3"
                        ><li className="my-1.5 ml-[3px]" data-active="false"
                        ><h3 className="mb-[4px] px-2 text-sm font-medium text-gray-700"
                        >Architecture</h3
                                ><div data-is-collapsed="false" style="height:auto;opacity:1;overflow:hidden;display:flex;flex-direction:column"
                                ><div className="relative"
                                ><ul className="last-of-type:mb-0 mb-8"
                                ><li className="my-1.5" data-active="false"
                                ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/architecture/accessibility"
                                >Accessibility</a
                                                ></li
                                            ><li className="my-1.5" data-active="false"
                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/architecture/fast-refresh"
                                            >Fast Refresh</a
                                                ></li
                                            ><li className="my-1.5" data-active="false"
                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/architecture/nextjs-compiler"
                                            >Next.js Compiler</a
                                                ></li
                                            ><li className="my-1.5" data-active="false"
                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/architecture/supported-browsers"
                                            >Supported Browsers</a
                                                ></li
                                            ><li className="my-1.5" data-active="false"
                                            ><a className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800" href="/docs/architecture/turbopack"
                                            >Turbopack</a
                                                ></li
                                            ></ul
                                        ><div aria-hidden="true" className="absolute bottom-0 left-0 h-[6px] bg-gradient-to-t from-gray-0 w-full z-10 pointer-events-none"
                                        ></div
                                        ></div
                                    ></div
                                ></li
                            ></ul
                        ></nav
                    ></div
                ></div
            ><div id="reach-skip-nav"
            ></div
            ><nav className="w-56 shrink-0 order-last hidden lg:block"
            ><div className="sticky top-[126px] h-[calc(100vh-121px)]"
            ><div className="mb-1 mt-[7px] text-sm font-medium text-gray-700"
            >On this page</div
                    ><div className="relative" data-docs-table-of-contents=""
                    ><div aria-hidden="true" className="absolute top-0 left-0 h-3 bg-gradient-to-b from-gray-0 w-full z-1"
                    ></div
                        ><div aria-hidden="true" className="absolute bottom-0 left-0 h-3 bg-gradient-to-t from-gray-0 w-full z-10"
                        ></div
                        ><ul className="space-y-2.5 py-2 text-sm overflow-y-auto max-h-[60vh] styled-scrollbar"
                        ><li
                        ><a className="block text-gray-500 hover:text-gray-600 leading-[1.6] font-medium text-blue-600 dark:text-blue-500" href="#usage"
                        >Usage</a
                                ></li
                            ><li
                            ><a className="block text-gray-500 hover:text-gray-600 leading-[1.6]" href="#local-images"
                            >Local Images</a
                                ></li
                            ><li
                            ><a className="block text-gray-500 hover:text-gray-600 leading-[1.6]" href="#remote-images"
                            >Remote Images</a
                                ></li
                            ><li
                            ><a className="block text-gray-500 hover:text-gray-600 leading-[1.6] pl-3" href="#domains"
                            >Domains</a
                                ></li
                            ><li
                            ><a className="block text-gray-500 hover:text-gray-600 leading-[1.6] pl-3" href="#loaders"
                            >Loaders</a
                                ></li
                            ><li
                            ><a className="block text-gray-500 hover:text-gray-600 leading-[1.6]" href="#priority"
                            >Priority</a
                                ></li
                            ><li
                            ><a className="block text-gray-500 hover:text-gray-600 leading-[1.6]" href="#image-sizing"
                            >Image Sizing</a
                                ></li
                            ><li
                            ><a className="block text-gray-500 hover:text-gray-600 leading-[1.6]" href="#styling"
                            >Styling</a
                                ></li
                            ><li
                            ><a className="block text-gray-500 hover:text-gray-600 leading-[1.6] pl-3" href="#examples"
                            >Examples</a
                                ></li
                            ><li
                            ><a className="block text-gray-500 hover:text-gray-600 leading-[1.6]" href="#other-properties"
                            >Other Properties</a
                                ></li
                            ><li
                            ><a className="block text-gray-500 hover:text-gray-600 leading-[1.6]" href="#configuration"
                            >Configuration</a
                                ></li
                            ></ul
                        ></div
                    ><div className="mt-3 space-y-2 border-t border-gray-200 pt-5 text-sm text-gray-400 dark:border-gray-300"
                    ></div
                    ><button className="flex items-center gap-x-2 text-sm text-gray-500 transition-opacity hover:text-gray-800 opacity-0" type="button"
                    ><svg data-testid="geist-icon" fill="none" height="14" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="14" style="color:currentColor"
                    ><circle cx="12" cy="12" r="10"
                    ></circle
                            ><path d="M16 12l-4-4-4 4"
                            ></path
                            ><path d="M12 16V8"
                            ></path
                            ></svg
                        > Scroll to top</button
                    ></div
                ></nav
            ><article className="w-full min-w-0 max-w-6xl mt-4" style="min-height:calc(100vh - 103px)" data-docs-container=""
            ><div className="-mt-4 mb-7 md:mt-2 md:mb-10"
            ><div className="flex flex-wrap gap-2 items-center text-sm"
            ><a className="text-gray-400 hover:text-gray-600" href="/docs/pages"
            >Pages Router</a
                        ><span className="text-gray-400"
                        ><svg data-testid="geist-icon" fill="none" height="18" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="18" style="color:currentColor"
                        ><path d="M9 18l6-6-6-6"
                        ></path
                                ></svg
                            ></span
                        ><a className="text-gray-400 hover:text-gray-600" href="/docs/pages/building-your-application"
                        >...</a
                        ><span className="text-gray-400"
                        ><svg data-testid="geist-icon" fill="none" height="18" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="18" style="color:currentColor"
                        ><path d="M9 18l6-6-6-6"
                        ></path
                                ></svg
                            ></span
                        ><a className="text-gray-400 hover:text-gray-600" href="/docs/pages/building-your-application/optimizing"
                        >Optimizing</a
                        ><span className="text-gray-400"
                        ><svg data-testid="geist-icon" fill="none" height="18" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="18" style="color:currentColor"
                        ><path d="M9 18l6-6-6-6"
                        ></path
                                ></svg
                            ></span
                        ><span className="shrink-0 text-gray-800"
                        >Images</span
                        ></div
                    ></div
                ><div className="prose prose-vercel max-w-none" data-docs="true"
                ><h1
                >Image Optimization</h1
                    ><details open=""
                    ><summary
                    ><b
                    >Examples</b
                            ></summary
                        ><ul
                        >
                            <li
                            ><a href="https://github.com/vercel/next.js/tree/canary/examples/image-component" rel="noopener noreferrer" target="_blank"
                            >Image Component<span className="inline-flex"
                            ><svg data-testid="geist-icon" fill="none" height="14" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="14" style="color:currentColor"
                            ><path d="M7 17L17 7"
                            ></path
                                            ><path d="M7 7h10v10"
                                            ></path
                                            ></svg
                                        ></span
                                    ></a
                                ></li
                            >
                        </ul
                        ></details
                    >
                    <p
                    >The Next.js Image component, <a href="/docs/pages/api-reference/components/image"
                    ><code
                    >next/image</code
                            ></a
                        >, is an extension of the HTML <code
                        >&lt;img&gt;</code
                        > element, evolved for the modern web. It includes a variety of built-in performance optimizations to help you achieve good <a href="https://nextjs.org/learn/seo/web-performance" rel="noopener noreferrer" target="_blank"
                        >Core Web Vitals<span className="inline-flex"
                        ><svg data-testid="geist-icon" fill="none" height="14" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="14" style="color:currentColor"
                        ><path d="M7 17L17 7"
                        ></path
                                    ><path d="M7 7h10v10"
                                    ></path
                                    ></svg
                                ></span
                            ></a
                        >. These scores are an important measurement of user experience on your website, and are <a href="https://nextjs.org/learn/seo/web-performance/seo-impact" rel="noopener noreferrer" target="_blank"
                        >factored into Google's search rankings<span className="inline-flex"
                        ><svg data-testid="geist-icon" fill="none" height="14" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="14" style="color:currentColor"
                        ><path d="M7 17L17 7"
                        ></path
                                    ><path d="M7 7h10v10"
                                    ></path
                                    ></svg
                                ></span
                            ></a
                        >.</p
                    >
                    <p
                    >Some of the optimizations built into the Image component include:</p
                    >
                    <ul
                    >
                        <li
                        ><strong
                        >Improved Performance:</strong
                            > Always serve correctly sized image for each device, using modern image formats</li
                        >
                        <li
                        ><strong
                        >Visual Stability:</strong
                            > Prevent <a href="https://nextjs.org/learn/seo/web-performance/cls" rel="noopener noreferrer" target="_blank"
                            >Cumulative Layout Shift<span className="inline-flex"
                            ><svg data-testid="geist-icon" fill="none" height="14" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="14" style="color:currentColor"
                            ><path d="M7 17L17 7"
                            ></path
                                        ><path d="M7 7h10v10"
                                        ></path
                                        ></svg
                                    ></span
                                ></a
                            > automatically</li
                        >
                        <li
                        ><strong
                        >Faster Page Loads:</strong
                            > Images are only loaded when they enter the viewport, with optional blur-up placeholders</li
                        >
                        <li
                        ><strong
                        >Asset Flexibility:</strong
                            > On-demand image resizing, even for images stored on remote servers</li
                        >
                    </ul
                    >
                    <h2 id="usage" data-docs-heading=""
                    ><a href="#usage"
                    >Usage<span
                    ><svg viewBox="0 0 16 16" height="0.7em" width="0.7em"
                    >
                                    <g stroke-width="1.2" fill="none" stroke="currentColor"
                                    >
                                        <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M8.995,7.005 L8.995,7.005c1.374,1.374,1.374,3.601,0,4.975l-1.99,1.99c-1.374,1.374-3.601,1.374-4.975,0l0,0c-1.374-1.374-1.374-3.601,0-4.975 l1.748-1.698"
                                        ></path
                                        >
                                        <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M7.005,8.995 L7.005,8.995c-1.374-1.374-1.374-3.601,0-4.975l1.99-1.99c1.374-1.374,3.601-1.374,4.975,0l0,0c1.374,1.374,1.374,3.601,0,4.975 l-1.748,1.698"
                                        ></path
                                        >
                                    </g
                                    >
                                </svg
                                ></span
                            ></a
                        ></h2
                    >
                    <p
                    >To use a local image, <code
                    >import</code
                        > your <code
                        >.jpg</code
                        >, <code
                        >.png</code
                        >, or <code
                        >.webp</code
                        > files:</p
                    >
                    <div className="code-block_wrapper__sfyBN code-block_hideLineNumbers__AEWba not-prose"
                    ><button className="code-block_copyButton__yvtV_ code-block_copyFloatingButton__uHUhd" type="button"
                    ><div style="opacity:1;transform:none"
                    ><svg data-testid="geist-icon" fill="none" height="20" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="20" style="color:currentColor"
                    ><path d="M6 17C4.89543 17 4 16.1046 4 15V5C4 3.89543 4.89543 3 6 3H13C13.7403 3 14.3866 3.4022 14.7324 4M11 21H18C19.1046 21 20 20.1046 20 19V9C20 7.89543 19.1046 7 18 7H11C9.89543 7 9 7.89543 9 9V19C9 20.1046 9.89543 21 11 21Z"
                    ></path
                                    ></svg
                                ></div
                            ></button
                        ><pre className="code-block_pre__I3BAT"
                        ><code className="code-block_code___tL_M"
                        ><span className="line"
                        ><span style="color:var(--shiki-token-keyword)"
                        >import</span
                                    ><span style="color:var(--shiki-color-text)"
                                    > Image </span
                                    ><span style="color:var(--shiki-token-keyword)"
                                    >from</span
                                    ><span style="color:var(--shiki-color-text)"
                                    > </span
                                    ><span style="color:var(--shiki-token-string-expression)"
                                    >'next/image'</span
                                    ><span style="color:var(--shiki-color-text)"
                                    >;</span
                                    ></span
                                ></code
                            ></pre
                        ></div
                    >
                    <p
                    >Now, you can define the src for your image (either local or remote).</p
                    >
                    <h2 id="local-images" data-docs-heading=""
                    ><a href="#local-images"
                    >Local Images<span
                    ><svg viewBox="0 0 16 16" height="0.7em" width="0.7em"
                    >
                                    <g stroke-width="1.2" fill="none" stroke="currentColor"
                                    >
                                        <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M8.995,7.005 L8.995,7.005c1.374,1.374,1.374,3.601,0,4.975l-1.99,1.99c-1.374,1.374-3.601,1.374-4.975,0l0,0c-1.374-1.374-1.374-3.601,0-4.975 l1.748-1.698"
                                        ></path
                                        >
                                        <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M7.005,8.995 L7.005,8.995c-1.374-1.374-1.374-3.601,0-4.975l1.99-1.99c1.374-1.374,3.601-1.374,4.975,0l0,0c1.374,1.374,1.374,3.601,0,4.975 l-1.748,1.698"
                                        ></path
                                        >
                                    </g
                                    >
                                </svg
                                ></span
                            ></a
                        ></h2
                    >
                    <p
                    >To use a local image, import your .jpg, .png, or .webp files:</p
                    >
                    <div className="code-block_wrapper__sfyBN code-block_hideLineNumbers__AEWba not-prose"
                    ><button className="code-block_copyButton__yvtV_ code-block_copyFloatingButton__uHUhd" type="button"
                    ><div style="opacity:1;transform:none"
                    ><svg data-testid="geist-icon" fill="none" height="20" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="20" style="color:currentColor"
                    ><path d="M6 17C4.89543 17 4 16.1046 4 15V5C4 3.89543 4.89543 3 6 3H13C13.7403 3 14.3866 3.4022 14.7324 4M11 21H18C19.1046 21 20 20.1046 20 19V9C20 7.89543 19.1046 7 18 7H11C9.89543 7 9 7.89543 9 9V19C9 20.1046 9.89543 21 11 21Z"
                    ></path
                                    ></svg
                                ></div
                            ></button
                        ><pre className="code-block_pre__I3BAT"
                        ><code className="code-block_code___tL_M"
                        ><span className="line"
                        ><span style="color:var(--shiki-token-keyword)"
                        >import</span
                                    ><span style="color:var(--shiki-color-text)"
                                    > profilePic </span
                                    ><span style="color:var(--shiki-token-keyword)"
                                    >from</span
                                    ><span style="color:var(--shiki-color-text)"
                                    > </span
                                    ><span style="color:var(--shiki-token-string-expression)"
                                    >'../assets/me.png'</span
                                    ><span style="color:var(--shiki-color-text)"
                                    >;</span
                                    ></span
                                ></code
                            ></pre
                        ></div
                    >
                    <p
                    >Dynamic <code
                    >await import()</code
                        > or <code
                        >require()</code
                        > are <em
                        >not</em
                        > supported. The <code
                        >import</code
                        > must be static so it can be analyzed at build time.</p
                    >
                    <p
                    >Next.js will automatically determine the <code
                    >width</code
                        > and <code
                        >height</code
                        > of your image based on the imported file. These values are used to prevent <a href="https://nextjs.org/learn/seo/web-performance/cls" rel="noopener noreferrer" target="_blank"
                        >Cumulative Layout Shift<span className="inline-flex"
                        ><svg data-testid="geist-icon" fill="none" height="14" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="14" style="color:currentColor"
                        ><path d="M7 17L17 7"
                        ></path
                                    ><path d="M7 7h10v10"
                                    ></path
                                    ></svg
                                ></span
                            ></a
                        > while your image is loading.</p
                    >
                    <div className="code-block_wrapper__sfyBN not-prose"
                    ><button className="code-block_copyButton__yvtV_ code-block_copyFloatingButton__uHUhd" type="button"
                    ><div style="opacity:1;transform:none"
                    ><svg data-testid="geist-icon" fill="none" height="20" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="20" style="color:currentColor"
                    ><path d="M6 17C4.89543 17 4 16.1046 4 15V5C4 3.89543 4.89543 3 6 3H13C13.7403 3 14.3866 3.4022 14.7324 4M11 21H18C19.1046 21 20 20.1046 20 19V9C20 7.89543 19.1046 7 18 7H11C9.89543 7 9 7.89543 9 9V19C9 20.1046 9.89543 21 11 21Z"
                    ></path
                                    ></svg
                                ></div
                            ></button
                        ><pre className="code-block_pre__I3BAT"
                        ><code className="code-block_code___tL_M"
                        ><span className="line"
                        ><span style="color:var(--shiki-token-keyword)"
                        >import</span
                                    ><span style="color:var(--shiki-color-text)"
                                    > Image </span
                                    ><span style="color:var(--shiki-token-keyword)"
                                    >from</span
                                    ><span style="color:var(--shiki-color-text)"
                                    > </span
                                    ><span style="color:var(--shiki-token-string-expression)"
                                    >'next/image'</span
                                    ><span style="color:var(--shiki-color-text)"
                                    >;</span
                                    ></span
                                >
                                <span className="line"
                                ><span style="color:var(--shiki-token-keyword)"
                                >import</span
                                    ><span style="color:var(--shiki-color-text)"
                                    > profilePic </span
                                    ><span style="color:var(--shiki-token-keyword)"
                                    >from</span
                                    ><span style="color:var(--shiki-color-text)"
                                    > </span
                                    ><span style="color:var(--shiki-token-string-expression)"
                                    >'../assets/me.png'</span
                                    ><span style="color:var(--shiki-color-text)"
                                    >;</span
                                    ></span
                                >
                                <span className="line"
                                > </span
                                >
                                <span className="line"
                                ><span style="color:var(--shiki-token-keyword)"
                                >function</span
                                    ><span style="color:var(--shiki-color-text)"
                                    > </span
                                    ><span style="color:var(--shiki-token-function)"
                                    >Home</span
                                    ><span style="color:var(--shiki-color-text)"
                                    >() {</span
                                    ></span
                                >
                                <span className="line"
                                ><span style="color:var(--shiki-color-text)"
                                >  </span
                                    ><span style="color:var(--shiki-token-keyword)"
                                    >return</span
                                    ><span style="color:var(--shiki-color-text)"
                                    > (</span
                                    ></span
                                >
                                <span className="line"
                                ><span style="color:var(--shiki-color-text)"
                                >    &lt;&gt;</span
                                    ></span
                                >
                                <span className="line"
                                ><span style="color:var(--shiki-color-text)"
                                >      &lt;</span
                                    ><span style="color:var(--shiki-token-string-expression)"
                                    >h1</span
                                    ><span style="color:var(--shiki-color-text)"
                                    >&gt;My Homepage&lt;/</span
                                    ><span style="color:var(--shiki-token-string-expression)"
                                    >h1</span
                                    ><span style="color:var(--shiki-color-text)"
                                    >&gt;</span
                                    ></span
                                >
                                <span className="line"
                                ><span style="color:var(--shiki-color-text)"
                                >      &lt;</span
                                    ><span style="color:var(--shiki-token-constant)"
                                    >Image</span
                                    ></span
                                >
                                <span className="line"
                                ><span style="color:var(--shiki-color-text)"
                                >        </span
                                    ><span style="color:var(--shiki-token-function)"
                                    >src</span
                                    ><span style="color:var(--shiki-token-keyword)"
                                    >=</span
                                    ><span style="color:var(--shiki-color-text)"
                                    >{profilePic}</span
                                    ></span
                                >
                                <span className="line"
                                ><span style="color:var(--shiki-color-text)"
                                >        </span
                                    ><span style="color:var(--shiki-token-function)"
                                    >alt</span
                                    ><span style="color:var(--shiki-token-keyword)"
                                    >=</span
                                    ><span style="color:var(--shiki-token-string-expression)"
                                    >"Picture of the author"</span
                                    ></span
                                >
                                <span className="line"
                                ><span style="color:var(--shiki-color-text)"
                                >        </span
                                    ><span style="color:var(--shiki-token-comment)"
                                    >// width={500} automatically provided</span
                                    ></span
                                >
                                <span className="line"
                                ><span style="color:var(--shiki-color-text)"
                                >        </span
                                    ><span style="color:var(--shiki-token-comment)"
                                    >// height={500} automatically provided</span
                                    ></span
                                >
                                <span className="line"
                                ><span style="color:var(--shiki-color-text)"
                                >        </span
                                    ><span style="color:var(--shiki-token-comment)"
                                    >// blurDataURL="data:..." automatically provided</span
                                    ></span
                                >
                                <span className="line"
                                ><span style="color:var(--shiki-color-text)"
                                >        </span
                                    ><span style="color:var(--shiki-token-comment)"
                                    >// placeholder="blur" // Optional blur-up while loading</span
                                    ></span
                                >
                                <span className="line"
                                ><span style="color:var(--shiki-color-text)"
                                >      /&gt;</span
                                    ></span
                                >
                                <span className="line"
                                ><span style="color:var(--shiki-color-text)"
                                >      &lt;</span
                                    ><span style="color:var(--shiki-token-string-expression)"
                                    >p</span
                                    ><span style="color:var(--shiki-color-text)"
                                    >&gt;Welcome to my homepage!&lt;/</span
                                    ><span style="color:var(--shiki-token-string-expression)"
                                    >p</span
                                    ><span style="color:var(--shiki-color-text)"
                                    >&gt;</span
                                    ></span
                                >
                                <span className="line"
                                ><span style="color:var(--shiki-color-text)"
                                >    &lt;/&gt;</span
                                    ></span
                                >
                                <span className="line"
                                ><span style="color:var(--shiki-color-text)"
                                >  );</span
                                    ></span
                                >
                                <span className="line"
                                ><span style="color:var(--shiki-color-text)"
                                >}</span
                                    ></span
                                ></code
                            ></pre
                        ></div
                    >
                    <h2 id="remote-images" data-docs-heading=""
                    ><a href="#remote-images"
                    >Remote Images<span
                    ><svg viewBox="0 0 16 16" height="0.7em" width="0.7em"
                    >
                                    <g stroke-width="1.2" fill="none" stroke="currentColor"
                                    >
                                        <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M8.995,7.005 L8.995,7.005c1.374,1.374,1.374,3.601,0,4.975l-1.99,1.99c-1.374,1.374-3.601,1.374-4.975,0l0,0c-1.374-1.374-1.374-3.601,0-4.975 l1.748-1.698"
                                        ></path
                                        >
                                        <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M7.005,8.995 L7.005,8.995c-1.374-1.374-1.374-3.601,0-4.975l1.99-1.99c1.374-1.374,3.601-1.374,4.975,0l0,0c1.374,1.374,1.374,3.601,0,4.975 l-1.748,1.698"
                                        ></path
                                        >
                                    </g
                                    >
                                </svg
                                ></span
                            ></a
                        ></h2
                    >
                    <p
                    >To use a remote image, the <code
                    >src</code
                        > property should be a URL string, which can be <a href="#loaders"
                        >relative</a
                        > or <a href="/docs/app/api-reference/components/image#remotepatterns"
                        >absolute</a
                        >.</p
                    >
                    <p
                    >Since Next.js does not have access to remote files during the build process, you'll need to provide the <a href="/docs/app/api-reference/components/image#width"
                    ><code
                    >width</code
                            ></a
                        >, <a href="/docs/app/api-reference/components/image#height"
                        ><code
                        >height</code
                            ></a
                        > and optional <a href="/docs/app/api-reference/components/image#blurdataurl"
                        ><code
                        >blurDataURL</code
                            ></a
                        > props manually.</p
                    >
                    <p
                    >The <code
                    >width</code
                        > and <code
                        >height</code
                        > attributes are used to infer the correct aspect ratio of image and avoid layout shift from the image loading in. The <code
                        >width</code
                        > and <code
                        >height</code
                        > do <em
                        >not</em
                        > determine the rendered size of the image file. Learn more about <a href="#image-sizing"
                        >Image Sizing</a
                        >.</p
                    >
                    <div className="code-block_wrapper__sfyBN not-prose"
                    ><button className="code-block_copyButton__yvtV_ code-block_copyFloatingButton__uHUhd" type="button"
                    ><div style="opacity:1;transform:none"
                    ><svg data-testid="geist-icon" fill="none" height="20" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="20" style="color:currentColor"
                    ><path d="M6 17C4.89543 17 4 16.1046 4 15V5C4 3.89543 4.89543 3 6 3H13C13.7403 3 14.3866 3.4022 14.7324 4M11 21H18C19.1046 21 20 20.1046 20 19V9C20 7.89543 19.1046 7 18 7H11C9.89543 7 9 7.89543 9 9V19C9 20.1046 9.89543 21 11 21Z"
                    ></path
                                    ></svg
                                ></div
                            ></button
                        ><pre className="code-block_pre__I3BAT"
                        ><code className="code-block_code___tL_M"
                        ><span className="line"
                        ><span style="color:var(--shiki-token-keyword)"
                        >import</span
                                    ><span style="color:var(--shiki-color-text)"
                                    > Image </span
                                    ><span style="color:var(--shiki-token-keyword)"
                                    >from</span
                                    ><span style="color:var(--shiki-color-text)"
                                    > </span
                                    ><span style="color:var(--shiki-token-string-expression)"
                                    >'next/image'</span
                                    ><span style="color:var(--shiki-color-text)"
                                    >;</span
                                    ></span
                                >
                                <span className="line"
                                > </span
                                >
                                <span className="line"
                                ><span style="color:var(--shiki-token-keyword)"
                                >export</span
                                    ><span style="color:var(--shiki-color-text)"
                                    > </span
                                    ><span style="color:var(--shiki-token-keyword)"
                                    >default</span
                                    ><span style="color:var(--shiki-color-text)"
                                    > </span
                                    ><span style="color:var(--shiki-token-keyword)"
                                    >function</span
                                    ><span style="color:var(--shiki-color-text)"
                                    > </span
                                    ><span style="color:var(--shiki-token-function)"
                                    >Page</span
                                    ><span style="color:var(--shiki-color-text)"
                                    >() {</span
                                    ></span
                                >
                                <span className="line"
                                ><span style="color:var(--shiki-color-text)"
                                >  </span
                                    ><span style="color:var(--shiki-token-keyword)"
                                    >return</span
                                    ><span style="color:var(--shiki-color-text)"
                                    > (</span
                                    ></span
                                >
                                <span className="line"
                                ><span style="color:var(--shiki-color-text)"
                                >    &lt;</span
                                    ><span style="color:var(--shiki-token-constant)"
                                    >Image</span
                                    ></span
                                >
                                <span className="line"
                                ><span style="color:var(--shiki-color-text)"
                                >      </span
                                    ><span style="color:var(--shiki-token-function)"
                                    >src</span
                                    ><span style="color:var(--shiki-token-keyword)"
                                    >=</span
                                    ><span style="color:var(--shiki-token-string-expression)"
                                    >"https://s3.amazonaws.com/my-bucket/profile.png"</span
                                    ></span
                                >
                                <span className="line"
                                ><span style="color:var(--shiki-color-text)"
                                >      </span
                                    ><span style="color:var(--shiki-token-function)"
                                    >alt</span
                                    ><span style="color:var(--shiki-token-keyword)"
                                    >=</span
                                    ><span style="color:var(--shiki-token-string-expression)"
                                    >"Picture of the author"</span
                                    ></span
                                >
                                <span className="line"
                                ><span style="color:var(--shiki-color-text)"
                                >      </span
                                    ><span style="color:var(--shiki-token-function)"
                                    >width</span
                                    ><span style="color:var(--shiki-token-keyword)"
                                    >=</span
                                    ><span style="color:var(--shiki-color-text)"
                                    >{</span
                                    ><span style="color:var(--shiki-token-constant)"
                                    >500</span
                                    ><span style="color:var(--shiki-color-text)"
                                    >}</span
                                    ></span
                                >
                                <span className="line"
                                ><span style="color:var(--shiki-color-text)"
                                >      </span
                                    ><span style="color:var(--shiki-token-function)"
                                    >height</span
                                    ><span style="color:var(--shiki-token-keyword)"
                                    >=</span
                                    ><span style="color:var(--shiki-color-text)"
                                    >{</span
                                    ><span style="color:var(--shiki-token-constant)"
                                    >500</span
                                    ><span style="color:var(--shiki-color-text)"
                                    >}</span
                                    ></span
                                >
                                <span className="line"
                                ><span style="color:var(--shiki-color-text)"
                                >    /&gt;</span
                                    ></span
                                >
                                <span className="line"
                                ><span style="color:var(--shiki-color-text)"
                                >  );</span
                                    ></span
                                >
                                <span className="line"
                                ><span style="color:var(--shiki-color-text)"
                                >}</span
                                    ></span
                                ></code
                            ></pre
                        ></div
                    >
                    <p
                    >To safely allow optimizing images, define a list of supported URL patterns in <code
                    >next.config.js</code
                        >. Be as specific as possible to prevent malicious usage. For example, the following configuration will only allow images from a specific AWS S3 bucket:</p
                    >
                    <div className="code-block_wrapper__sfyBN code-block_hasFileName__0fJzj not-prose"
                    ><div className="code-block_header__FFMFa"
                    ><div className="code-block_fileName__CwwvW"
                    ><div className="code-block_iconWrapper__wSVeB"
                    ><svg height="17" style="margin-left:-1.5px" viewBox="0 0 50 50" width="17" xmlns="http://www.w3.org/2000/svg"
                    ><path d="M 43.335938 4 L 6.667969 4 C 5.195313 4 4 5.195313 4 6.667969 L 4 43.332031 C 4 44.804688 5.195313 46 6.667969 46 L 43.332031 46 C 44.804688 46 46 44.804688 46 43.335938 L 46 6.667969 C 46 5.195313 44.804688 4 43.335938 4 Z M 27 36.183594 C 27 40.179688 24.65625 42 21.234375 42 C 18.140625 42 15.910156 39.925781 15 38 L 18.144531 36.097656 C 18.75 37.171875 19.671875 38 21 38 C 22.269531 38 23 37.503906 23 35.574219 L 23 23 L 27 23 Z M 35.675781 42 C 32.132813 42 30.121094 40.214844 29 38 L 32 36 C 32.816406 37.335938 33.707031 38.613281 35.589844 38.613281 C 37.171875 38.613281 38 37.824219 38 36.730469 C 38 35.425781 37.140625 34.960938 35.402344 34.199219 L 34.449219 33.789063 C 31.695313 32.617188 29.863281 31.148438 29.863281 28.039063 C 29.863281 25.179688 32.046875 23 35.453125 23 C 37.878906 23 39.621094 23.84375 40.878906 26.054688 L 37.910156 27.964844 C 37.253906 26.789063 36.550781 26.328125 35.453125 26.328125 C 34.335938 26.328125 33.628906 27.039063 33.628906 27.964844 C 33.628906 29.109375 34.335938 29.570313 35.972656 30.28125 L 36.925781 30.691406 C 40.171875 32.078125 42 33.496094 42 36.683594 C 42 40.117188 39.300781 42 35.675781 42 Z" fill="currentColor"
                    ></path
                                        ></svg
                                    ></div
                                ><span className="code-block_filenameP__A9IvY"
                                >next.config.js</span
                                ></div
                            ><div className="code-block_actions__q3Jhz"
                            ><button className="code-block_copyButton__yvtV_" type="button"
                            ><div style="opacity:1;transform:none"
                            ><svg data-testid="geist-icon" fill="none" height="20" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="20" style="color:currentColor"
                            ><path d="M6 17C4.89543 17 4 16.1046 4 15V5C4 3.89543 4.89543 3 6 3H13C13.7403 3 14.3866 3.4022 14.7324 4M11 21H18C19.1046 21 20 20.1046 20 19V9C20 7.89543 19.1046 7 18 7H11C9.89543 7 9 7.89543 9 9V19C9 20.1046 9.89543 21 11 21Z"
                            ></path
                                            ></svg
                                        ></div
                                    ></button
                                ></div
                            ></div
                        ><pre className="code-block_pre__I3BAT"
                        ><code className="code-block_code___tL_M"
                        ><span className="line"
                        ><span style="color:var(--shiki-token-constant)"
                        >module</span
                                    ><span style="color:var(--shiki-color-text)"
                                    >.</span
                                    ><span style="color:var(--shiki-token-constant)"
                                    >exports</span
                                    ><span style="color:var(--shiki-color-text)"
                                    > </span
                                    ><span style="color:var(--shiki-token-keyword)"
                                    >=</span
                                    ><span style="color:var(--shiki-color-text)"
                                    > {</span
                                    ></span
                                >
                                <span className="line"
                                ><span style="color:var(--shiki-color-text)"
                                >  images</span
                                    ><span style="color:var(--shiki-token-keyword)"
                                    >:</span
                                    ><span style="color:var(--shiki-color-text)"
                                    > {</span
                                    ></span
                                >
                                <span className="line"
                                ><span style="color:var(--shiki-color-text)"
                                >    remotePatterns</span
                                    ><span style="color:var(--shiki-token-keyword)"
                                    >:</span
                                    ><span style="color:var(--shiki-color-text)"
                                    > [</span
                                    ></span
                                >
                                <span className="line"
                                ><span style="color:var(--shiki-color-text)"
                                >      {</span
                                    ></span
                                >
                                <span className="line"
                                ><span style="color:var(--shiki-color-text)"
                                >        protocol</span
                                    ><span style="color:var(--shiki-token-keyword)"
                                    >:</span
                                    ><span style="color:var(--shiki-color-text)"
                                    > </span
                                    ><span style="color:var(--shiki-token-string-expression)"
                                    >'https'</span
                                    ><span style="color:var(--shiki-token-punctuation)"
                                    >,</span
                                    ></span
                                >
                                <span className="line"
                                ><span style="color:var(--shiki-color-text)"
                                >        hostname</span
                                    ><span style="color:var(--shiki-token-keyword)"
                                    >:</span
                                    ><span style="color:var(--shiki-color-text)"
                                    > </span
                                    ><span style="color:var(--shiki-token-string-expression)"
                                    >'s3.amazonaws.com'</span
                                    ><span style="color:var(--shiki-token-punctuation)"
                                    >,</span
                                    ></span
                                >
                                <span className="line"
                                ><span style="color:var(--shiki-color-text)"
                                >        port</span
                                    ><span style="color:var(--shiki-token-keyword)"
                                    >:</span
                                    ><span style="color:var(--shiki-color-text)"
                                    > </span
                                    ><span style="color:var(--shiki-token-string-expression)"
                                    >''</span
                                    ><span style="color:var(--shiki-token-punctuation)"
                                    >,</span
                                    ></span
                                >
                                <span className="line"
                                ><span style="color:var(--shiki-color-text)"
                                >        pathname</span
                                    ><span style="color:var(--shiki-token-keyword)"
                                    >:</span
                                    ><span style="color:var(--shiki-color-text)"
                                    > </span
                                    ><span style="color:var(--shiki-token-string-expression)"
                                    >'/my-bucket/**'</span
                                    ><span style="color:var(--shiki-token-punctuation)"
                                    >,</span
                                    ></span
                                >
                                <span className="line"
                                ><span style="color:var(--shiki-color-text)"
                                >      }</span
                                    ><span style="color:var(--shiki-token-punctuation)"
                                    >,</span
                                    ></span
                                >
                                <span className="line"
                                ><span style="color:var(--shiki-color-text)"
                                >    ]</span
                                    ><span style="color:var(--shiki-token-punctuation)"
                                    >,</span
                                    ></span
                                >
                                <span className="line"
                                ><span style="color:var(--shiki-color-text)"
                                >  }</span
                                    ><span style="color:var(--shiki-token-punctuation)"
                                    >,</span
                                    ></span
                                >
                                <span className="line"
                                ><span style="color:var(--shiki-color-text)"
                                >};</span
                                    ></span
                                ></code
                            ></pre
                        ></div
                    >
                    <p
                    >Learn more about <a href="/docs/app/api-reference/components/image#remotepatterns"
                    ><code
                    >remotePatterns</code
                            ></a
                        > configuration. If you want to use relative URLs for the image <code
                        >src</code
                        >, use a <a href="/docs/app/api-reference/components/image#loader"
                        ><code
                        >loader</code
                            ></a
                        >.</p
                    >
                    <h3 id="domains" data-docs-heading=""
                    ><a href="#domains"
                    >Domains<span
                    ><svg viewBox="0 0 16 16" height="0.7em" width="0.7em"
                    >
                                    <g stroke-width="1.2" fill="none" stroke="currentColor"
                                    >
                                        <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M8.995,7.005 L8.995,7.005c1.374,1.374,1.374,3.601,0,4.975l-1.99,1.99c-1.374,1.374-3.601,1.374-4.975,0l0,0c-1.374-1.374-1.374-3.601,0-4.975 l1.748-1.698"
                                        ></path
                                        >
                                        <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M7.005,8.995 L7.005,8.995c-1.374-1.374-1.374-3.601,0-4.975l1.99-1.99c1.374-1.374,3.601-1.374,4.975,0l0,0c1.374,1.374,1.374,3.601,0,4.975 l-1.748,1.698"
                                        ></path
                                        >
                                    </g
                                    >
                                </svg
                                ></span
                            ></a
                        ></h3
                    >
                    <p
                    >Sometimes you may want to optimize a remote image, but still use the built-in Next.js Image Optimization API. To do this, leave the <code
                    >loader</code
                        > at its default setting and enter an absolute URL for the Image <code
                        >src</code
                        > prop.</p
                    >
                    <p
                    >To protect your application from malicious users, you must define a list of remote hostnames you intend to use with the <code
                    >next/image</code
                        > component.</p
                    >
                    <blockquote className="bg-gray-0 text-sm p-3"
                    >
                        <p
                        >Learn more about <a href="/docs/pages/api-reference/components/image#remotepatterns"
                        ><code
                        >remotePatterns</code
                                ></a
                            > configuration.</p
                        >
                    </blockquote
                    >
                    <h3 id="loaders" data-docs-heading=""
                    ><a href="#loaders"
                    >Loaders<span
                    ><svg viewBox="0 0 16 16" height="0.7em" width="0.7em"
                    >
                                    <g stroke-width="1.2" fill="none" stroke="currentColor"
                                    >
                                        <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M8.995,7.005 L8.995,7.005c1.374,1.374,1.374,3.601,0,4.975l-1.99,1.99c-1.374,1.374-3.601,1.374-4.975,0l0,0c-1.374-1.374-1.374-3.601,0-4.975 l1.748-1.698"
                                        ></path
                                        >
                                        <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M7.005,8.995 L7.005,8.995c-1.374-1.374-1.374-3.601,0-4.975l1.99-1.99c1.374-1.374,3.601-1.374,4.975,0l0,0c1.374,1.374,1.374,3.601,0,4.975 l-1.748,1.698"
                                        ></path
                                        >
                                    </g
                                    >
                                </svg
                                ></span
                            ></a
                        ></h3
                    >
                    <p
                    >Note that in the <a href="#remote-images"
                    >example earlier</a
                        >, a partial URL (<code
                        >"/me.png"</code
                        >) is provided for a remote image. This is possible because of the loader architecture.</p
                    >
                    <p
                    >A loader is a function that generates the URLs for your image. It modifies the provided <code
                    >src</code
                        >, and generates multiple URLs to request the image at different sizes. These multiple URLs are used in the automatic <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/srcset" rel="noopener noreferrer nofollow" target="_blank"
                        >srcset<span className="inline-flex"
                        ><svg data-testid="geist-icon" fill="none" height="14" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="14" style="color:currentColor"
                        ><path d="M7 17L17 7"
                        ></path
                                    ><path d="M7 7h10v10"
                                    ></path
                                    ></svg
                                ></span
                            ></a
                        > generation, so that visitors to your site will be served an image that is the right size for their viewport.</p
                    >
                    <p
                    >The default loader for Next.js applications uses the built-in Image Optimization API, which optimizes images from anywhere on the web, and then serves them directly from the Next.js web server. If you would like to serve your images directly from a CDN or image server, you can write your own loader function with a few lines of JavaScript.</p
                    >
                    <p
                    >You can define a loader per-image with the <a href="/docs/pages/api-reference/components/image#loader"
                    ><code
                    >loader</code
                            > prop</a
                        >, or at the application level with the <a href="/docs/pages/api-reference/components/image#loader-configuration"
                        ><code
                        >loaderFile</code
                            > configuration</a
                        >.</p
                    >
                    <h2 id="priority" data-docs-heading=""
                    ><a href="#priority"
                    >Priority<span
                    ><svg viewBox="0 0 16 16" height="0.7em" width="0.7em"
                    >
                                    <g stroke-width="1.2" fill="none" stroke="currentColor"
                                    >
                                        <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M8.995,7.005 L8.995,7.005c1.374,1.374,1.374,3.601,0,4.975l-1.99,1.99c-1.374,1.374-3.601,1.374-4.975,0l0,0c-1.374-1.374-1.374-3.601,0-4.975 l1.748-1.698"
                                        ></path
                                        >
                                        <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M7.005,8.995 L7.005,8.995c-1.374-1.374-1.374-3.601,0-4.975l1.99-1.99c1.374-1.374,3.601-1.374,4.975,0l0,0c1.374,1.374,1.374,3.601,0,4.975 l-1.748,1.698"
                                        ></path
                                        >
                                    </g
                                    >
                                </svg
                                ></span
                            ></a
                        ></h2
                    >
                    <p
                    >You should add the <code
                    >priority</code
                        > property to the image that will be the <a href="https://web.dev/lcp/#what-elements-are-considered" rel="noopener noreferrer nofollow" target="_blank"
                        >Largest Contentful Paint (LCP) element<span className="inline-flex"
                        ><svg data-testid="geist-icon" fill="none" height="14" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="14" style="color:currentColor"
                        ><path d="M7 17L17 7"
                        ></path
                                    ><path d="M7 7h10v10"
                                    ></path
                                    ></svg
                                ></span
                            ></a
                        > for each page. Doing so allows Next.js to specially prioritize the image for loading (e.g. through preload tags or priority hints), leading to a meaningful boost in LCP.</p
                    >
                    <p
                    >The LCP element is typically the largest image or text block visible within the viewport of the page. When you run <code
                    >next dev</code
                        >, you'll see a console warning if the LCP element is an <code
                        >&lt;Image&gt;</code
                        > without the <code
                        >priority</code
                        > property.</p
                    >
                    <p
                    >Once you've identified the LCP image, you can add the property like this:</p
                    >
                    <div className="code-block_wrapper__sfyBN not-prose"
                    ><button className="code-block_copyButton__yvtV_ code-block_copyFloatingButton__uHUhd" type="button"
                    ><div style="opacity:1;transform:none"
                    ><svg data-testid="geist-icon" fill="none" height="20" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="20" style="color:currentColor"
                    ><path d="M6 17C4.89543 17 4 16.1046 4 15V5C4 3.89543 4.89543 3 6 3H13C13.7403 3 14.3866 3.4022 14.7324 4M11 21H18C19.1046 21 20 20.1046 20 19V9C20 7.89543 19.1046 7 18 7H11C9.89543 7 9 7.89543 9 9V19C9 20.1046 9.89543 21 11 21Z"
                    ></path
                                    ></svg
                                ></div
                            ></button
                        ><pre className="code-block_pre__I3BAT"
                        ><code className="code-block_code___tL_M"
                        ><span className="line"
                        ><span style="color:var(--shiki-token-keyword)"
                        >import</span
                                    ><span style="color:var(--shiki-color-text)"
                                    > Image </span
                                    ><span style="color:var(--shiki-token-keyword)"
                                    >from</span
                                    ><span style="color:var(--shiki-color-text)"
                                    > </span
                                    ><span style="color:var(--shiki-token-string-expression)"
                                    >'next/image'</span
                                    ><span style="color:var(--shiki-color-text)"
                                    >;</span
                                    ></span
                                >
                                <span className="line"
                                > </span
                                >
                                <span className="line"
                                ><span style="color:var(--shiki-token-keyword)"
                                >export</span
                                    ><span style="color:var(--shiki-color-text)"
                                    > </span
                                    ><span style="color:var(--shiki-token-keyword)"
                                    >default</span
                                    ><span style="color:var(--shiki-color-text)"
                                    > </span
                                    ><span style="color:var(--shiki-token-keyword)"
                                    >function</span
                                    ><span style="color:var(--shiki-color-text)"
                                    > </span
                                    ><span style="color:var(--shiki-token-function)"
                                    >Home</span
                                    ><span style="color:var(--shiki-color-text)"
                                    >() {</span
                                    ></span
                                >
                                <span className="line"
                                ><span style="color:var(--shiki-color-text)"
                                >  </span
                                    ><span style="color:var(--shiki-token-keyword)"
                                    >return</span
                                    ><span style="color:var(--shiki-color-text)"
                                    > (</span
                                    ></span
                                >
                                <span className="line"
                                ><span style="color:var(--shiki-color-text)"
                                >    &lt;&gt;</span
                                    ></span
                                >
                                <span className="line"
                                ><span style="color:var(--shiki-color-text)"
                                >      &lt;</span
                                    ><span style="color:var(--shiki-token-string-expression)"
                                    >h1</span
                                    ><span style="color:var(--shiki-color-text)"
                                    >&gt;My Homepage&lt;/</span
                                    ><span style="color:var(--shiki-token-string-expression)"
                                    >h1</span
                                    ><span style="color:var(--shiki-color-text)"
                                    >&gt;</span
                                    ></span
                                >
                                <span className="line"
                                ><span style="color:var(--shiki-color-text)"
                                >      &lt;</span
                                    ><span style="color:var(--shiki-token-constant)"
                                    >Image</span
                                    ></span
                                >
                                <span className="line"
                                ><span style="color:var(--shiki-color-text)"
                                >        </span
                                    ><span style="color:var(--shiki-token-function)"
                                    >src</span
                                    ><span style="color:var(--shiki-token-keyword)"
                                    >=</span
                                    ><span style="color:var(--shiki-token-string-expression)"
                                    >"/me.png"</span
                                    ></span
                                >
                                <span className="line"
                                ><span style="color:var(--shiki-color-text)"
                                >        </span
                                    ><span style="color:var(--shiki-token-function)"
                                    >alt</span
                                    ><span style="color:var(--shiki-token-keyword)"
                                    >=</span
                                    ><span style="color:var(--shiki-token-string-expression)"
                                    >"Picture of the author"</span
                                    ></span
                                >
                                <span className="line"
                                ><span style="color:var(--shiki-color-text)"
                                >        </span
                                    ><span style="color:var(--shiki-token-function)"
                                    >width</span
                                    ><span style="color:var(--shiki-token-keyword)"
                                    >=</span
                                    ><span style="color:var(--shiki-color-text)"
                                    >{</span
                                    ><span style="color:var(--shiki-token-constant)"
                                    >500</span
                                    ><span style="color:var(--shiki-color-text)"
                                    >}</span
                                    ></span
                                >
                                <span className="line"
                                ><span style="color:var(--shiki-color-text)"
                                >        </span
                                    ><span style="color:var(--shiki-token-function)"
                                    >height</span
                                    ><span style="color:var(--shiki-token-keyword)"
                                    >=</span
                                    ><span style="color:var(--shiki-color-text)"
                                    >{</span
                                    ><span style="color:var(--shiki-token-constant)"
                                    >500</span
                                    ><span style="color:var(--shiki-color-text)"
                                    >}</span
                                    ></span
                                >
                                <span className="line"
                                ><span style="color:var(--shiki-color-text)"
                                >        </span
                                    ><span style="color:var(--shiki-token-function)"
                                    >priority</span
                                    ></span
                                >
                                <span className="line"
                                ><span style="color:var(--shiki-color-text)"
                                >      /&gt;</span
                                    ></span
                                >
                                <span className="line"
                                ><span style="color:var(--shiki-color-text)"
                                >      &lt;</span
                                    ><span style="color:var(--shiki-token-string-expression)"
                                    >p</span
                                    ><span style="color:var(--shiki-color-text)"
                                    >&gt;Welcome to my homepage!&lt;/</span
                                    ><span style="color:var(--shiki-token-string-expression)"
                                    >p</span
                                    ><span style="color:var(--shiki-color-text)"
                                    >&gt;</span
                                    ></span
                                >
                                <span className="line"
                                ><span style="color:var(--shiki-color-text)"
                                >    &lt;/&gt;</span
                                    ></span
                                >
                                <span className="line"
                                ><span style="color:var(--shiki-color-text)"
                                >  );</span
                                    ></span
                                >
                                <span className="line"
                                ><span style="color:var(--shiki-color-text)"
                                >}</span
                                    ></span
                                ></code
                            ></pre
                        ></div
                    >
                    <!-- --
>
                    <p
                    >See more about priority in the <a href="/docs/pages/api-reference/components/image#priority"
                    ><code
                    >next/image</code
                            > component documentation</a
                        >.</p
                    >
                    <h2 id="image-sizing" data-docs-heading=""
                    ><a href="#image-sizing"
                    >Image Sizing<span
                    ><svg viewBox="0 0 16 16" height="0.7em" width="0.7em"
                    >
                                    <g stroke-width="1.2" fill="none" stroke="currentColor"
                                    >
                                        <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M8.995,7.005 L8.995,7.005c1.374,1.374,1.374,3.601,0,4.975l-1.99,1.99c-1.374,1.374-3.601,1.374-4.975,0l0,0c-1.374-1.374-1.374-3.601,0-4.975 l1.748-1.698"
                                        ></path
                                        >
                                        <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M7.005,8.995 L7.005,8.995c-1.374-1.374-1.374-3.601,0-4.975l1.99-1.99c1.374-1.374,3.601-1.374,4.975,0l0,0c1.374,1.374,1.374,3.601,0,4.975 l-1.748,1.698"
                                        ></path
                                        >
                                    </g
                                    >
                                </svg
                                ></span
                            ></a
                        ></h2
                    >
                    <p
                    >One of the ways that images most commonly hurt performance is through <em
                    >layout shift</em
                        >, where the image pushes other elements around on the page as it loads in. This performance problem is so annoying to users that it has its own Core Web Vital, called <a href="https://web.dev/cls/" rel="noopener noreferrer nofollow" target="_blank"
                        >Cumulative Layout Shift<span className="inline-flex"
                        ><svg data-testid="geist-icon" fill="none" height="14" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="14" style="color:currentColor"
                        ><path d="M7 17L17 7"
                        ></path
                                    ><path d="M7 7h10v10"
                                    ></path
                                    ></svg
                                ></span
                            ></a
                        >. The way to avoid image-based layout shifts is to <a href="https://web.dev/optimize-cls/#images-without-dimensions" rel="noopener noreferrer nofollow" target="_blank"
                        >always size your images<span className="inline-flex"
                        ><svg data-testid="geist-icon" fill="none" height="14" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="14" style="color:currentColor"
                        ><path d="M7 17L17 7"
                        ></path
                                    ><path d="M7 7h10v10"
                                    ></path
                                    ></svg
                                ></span
                            ></a
                        >. This allows the browser to reserve precisely enough space for the image before it loads.</p
                    >
                    <p
                    >Because <code
                    >next/image</code
                        > is designed to guarantee good performance results, it cannot be used in a way that will contribute to layout shift, and <strong
                        >must</strong
                        > be sized in one of three ways:</p
                    >
                    <ol
                    >
                        <li
                        >Automatically, using a <a href="#local-images"
                        >static import</a
                            ></li
                        >
                        <li
                        >Explicitly, by including a <a href="/docs/pages/api-reference/components/image#width"
                        ><code
                        >width</code
                                ></a
                            > and <a href="/docs/pages/api-reference/components/image#height"
                            ><code
                            >height</code
                                ></a
                            > property</li
                        >
                        <li
                        >Implicitly, by using <a href="/docs/pages/api-reference/components/image#fill"
                        >fill</a
                            > which causes the image to expand to fill its parent element.</li
                        >
                    </ol
                    >
                    <blockquote className="bg-gray-0 text-sm p-3"
                    >
                        <p
                        ><strong
                        >What if I don't know the size of my images?</strong
                            ></p
                        >
                        <p
                        >If you are accessing images from a source without knowledge of the images' sizes, there are several things you can do:</p
                        >
                        <p
                        ><strong
                        >Use <code
                        >fill</code
                                ></strong
                            ></p
                        >
                        <p
                        >The <a href="/docs/pages/api-reference/components/image#fill"
                        ><code
                        >fill</code
                                ></a
                            > prop allows your image to be sized by its parent element. Consider using CSS to give the image's parent element space on the page along <a href="/docs/pages/api-reference/components/image#sizes"
                            ><code
                            >sizes</code
                                ></a
                            > prop to match any media query break points. You can also use <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit" rel="noopener noreferrer nofollow" target="_blank"
                            ><code
                            >object-fit</code
                                ><span className="inline-flex"
                                ><svg data-testid="geist-icon" fill="none" height="14" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="14" style="color:currentColor"
                                ><path d="M7 17L17 7"
                                ></path
                                        ><path d="M7 7h10v10"
                                        ></path
                                        ></svg
                                    ></span
                                ></a
                            > with <code
                            >fill</code
                            >, <code
                            >contain</code
                            >, or <code
                            >cover</code
                            >, and <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/object-position" rel="noopener noreferrer nofollow" target="_blank"
                            ><code
                            >object-position</code
                                ><span className="inline-flex"
                                ><svg data-testid="geist-icon" fill="none" height="14" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="14" style="color:currentColor"
                                ><path d="M7 17L17 7"
                                ></path
                                        ><path d="M7 7h10v10"
                                        ></path
                                        ></svg
                                    ></span
                                ></a
                            > to define how the image should occupy that space.</p
                        >
                        <p
                        ><strong
                        >Normalize your images</strong
                            ></p
                        >
                        <p
                        >If you're serving images from a source that you control, consider modifying your image pipeline to normalize the images to a specific size.</p
                        >
                        <p
                        ><strong
                        >Modify your API calls</strong
                            ></p
                        >
                        <p
                        >If your application is retrieving image URLs using an API call (such as to a CMS), you may be able to modify the API call to return the image dimensions along with the URL.</p
                        >
                    </blockquote
                    >
                    <p
                    >If none of the suggested methods works for sizing your images, the <code
                    >next/image</code
                        > component is designed to work well on a page alongside standard <code
                        >&lt;img&gt;</code
                        > elements.</p
                    >
                    <h2 id="styling" data-docs-heading=""
                    ><a href="#styling"
                    >Styling<span
                    ><svg viewBox="0 0 16 16" height="0.7em" width="0.7em"
                    >
                                    <g stroke-width="1.2" fill="none" stroke="currentColor"
                                    >
                                        <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M8.995,7.005 L8.995,7.005c1.374,1.374,1.374,3.601,0,4.975l-1.99,1.99c-1.374,1.374-3.601,1.374-4.975,0l0,0c-1.374-1.374-1.374-3.601,0-4.975 l1.748-1.698"
                                        ></path
                                        >
                                        <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M7.005,8.995 L7.005,8.995c-1.374-1.374-1.374-3.601,0-4.975l1.99-1.99c1.374-1.374,3.601-1.374,4.975,0l0,0c1.374,1.374,1.374,3.601,0,4.975 l-1.748,1.698"
                                        ></path
                                        >
                                    </g
                                    >
                                </svg
                                ></span
                            ></a
                        ></h2
                    >
                    <p
                    >Styling the Image component is similar to styling a normal <code
                    >&lt;img&gt;</code
                        > element, but there are a few guidelines to keep in mind:</p
                    >
                    <ul
                    >
                        <li
                        >Use <code
                        >className</code
                            > or <code
                            >style</code
                            >, not <code
                            >styled-jsx</code
                            >.<!-- --
>
                            <ul
                            >
                                <li
                                >In most cases, we recommend using the <code
                                >className</code
                                    > prop. This can be an imported <a href="/docs/app/building-your-application/styling/css-modules"
                                    >CSS Module</a
                                    >, a <a href="/docs/app/building-your-application/styling/css-modules#global-styles"
                                    >global stylesheet</a
                                    >, etc.</li
                                >
                                <li
                                >You can also use the <code
                                >style</code
                                    > prop to assign inline styles.</li
                                >
                                <li
                                >You cannot use <a href="/docs/app/building-your-application/styling/css-in-js"
                                >styled-jsx</a
                                    > because it's scoped to the current component (unless you mark the style as <code
                                    >global</code
                                    >).</li
                                >
                            </ul
                            >
                        </li
                        >
                        <li
                        >When using <code
                        >fill</code
                            >, the parent element must have <code
                            >position: relative</code
                            >
                            <ul
                            >
                                <li
                                >This is necessary for the proper rendering of the image element in that layout mode.</li
                                >
                            </ul
                            >
                        </li
                        >
                        <li
                        >When using <code
                        >fill</code
                            >, the parent element must have <code
                            >display: block</code
                            >
                            <ul
                            >
                                <li
                                >This is the default for <code
                                >&lt;div&gt;</code
                                    > elements but should be specified otherwise.</li
                                >
                            </ul
                            >
                        </li
                        >
                    </ul
                    >
                    <p
                    >For examples, see the <a href="https://image-component.nextjs.gallery" rel="noopener noreferrer nofollow" target="_blank"
                    >Image Component Demo<span className="inline-flex"
                    ><svg data-testid="geist-icon" fill="none" height="14" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="14" style="color:currentColor"
                    ><path d="M7 17L17 7"
                    ></path
                                    ><path d="M7 7h10v10"
                                    ></path
                                    ></svg
                                ></span
                            ></a
                        >.</p
                    >
                    <h3 id="examples" data-docs-heading=""
                    ><a href="#examples"
                    >Examples<span
                    ><svg viewBox="0 0 16 16" height="0.7em" width="0.7em"
                    >
                                    <g stroke-width="1.2" fill="none" stroke="currentColor"
                                    >
                                        <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M8.995,7.005 L8.995,7.005c1.374,1.374,1.374,3.601,0,4.975l-1.99,1.99c-1.374,1.374-3.601,1.374-4.975,0l0,0c-1.374-1.374-1.374-3.601,0-4.975 l1.748-1.698"
                                        ></path
                                        >
                                        <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M7.005,8.995 L7.005,8.995c-1.374-1.374-1.374-3.601,0-4.975l1.99-1.99c1.374-1.374,3.601-1.374,4.975,0l0,0c1.374,1.374,1.374,3.601,0,4.975 l-1.748,1.698"
                                        ></path
                                        >
                                    </g
                                    >
                                </svg
                                ></span
                            ></a
                        ></h3
                    >
                    <p
                    >For examples of the Image component used with the various styles, see the <a href="https://image-component.nextjs.gallery" rel="noopener noreferrer nofollow" target="_blank"
                    >Image Component Demo<span className="inline-flex"
                    ><svg data-testid="geist-icon" fill="none" height="14" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="14" style="color:currentColor"
                    ><path d="M7 17L17 7"
                    ></path
                                    ><path d="M7 7h10v10"
                                    ></path
                                    ></svg
                                ></span
                            ></a
                        >.</p
                    >
                    <h2 id="other-properties" data-docs-heading=""
                    ><a href="#other-properties"
                    >Other Properties<span
                    ><svg viewBox="0 0 16 16" height="0.7em" width="0.7em"
                    >
                                    <g stroke-width="1.2" fill="none" stroke="currentColor"
                                    >
                                        <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M8.995,7.005 L8.995,7.005c1.374,1.374,1.374,3.601,0,4.975l-1.99,1.99c-1.374,1.374-3.601,1.374-4.975,0l0,0c-1.374-1.374-1.374-3.601,0-4.975 l1.748-1.698"
                                        ></path
                                        >
                                        <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M7.005,8.995 L7.005,8.995c-1.374-1.374-1.374-3.601,0-4.975l1.99-1.99c1.374-1.374,3.601-1.374,4.975,0l0,0c1.374,1.374,1.374,3.601,0,4.975 l-1.748,1.698"
                                        ></path
                                        >
                                    </g
                                    >
                                </svg
                                ></span
                            ></a
                        ></h2
                    >
                    <p
                    ><a href="/docs/pages/api-reference/components/image"
                    ><strong
                    >View all properties available to the <code
                    >next/image</code
                                > component.</strong
                            ></a
                        ></p
                    >
                    <h2 id="configuration" data-docs-heading=""
                    ><a href="#configuration"
                    >Configuration<span
                    ><svg viewBox="0 0 16 16" height="0.7em" width="0.7em"
                    >
                                    <g stroke-width="1.2" fill="none" stroke="currentColor"
                                    >
                                        <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M8.995,7.005 L8.995,7.005c1.374,1.374,1.374,3.601,0,4.975l-1.99,1.99c-1.374,1.374-3.601,1.374-4.975,0l0,0c-1.374-1.374-1.374-3.601,0-4.975 l1.748-1.698"
                                        ></path
                                        >
                                        <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M7.005,8.995 L7.005,8.995c-1.374-1.374-1.374-3.601,0-4.975l1.99-1.99c1.374-1.374,3.601-1.374,4.975,0l0,0c1.374,1.374,1.374,3.601,0,4.975 l-1.748,1.698"
                                        ></path
                                        >
                                    </g
                                    >
                                </svg
                                ></span
                            ></a
                        ></h2
                    >
                    <p
                    >The <code
                    >next/image</code
                        > component and Next.js Image Optimization API can be configured in the <a href="/docs/pages/api-reference/next-config-js"
                        ><code
                        >next.config.js</code
                            > file</a
                        >. These configurations allow you to <a href="/docs/pages/api-reference/components/image#remotepatterns"
                        >enable remote images</a
                        >, <a href="/docs/pages/api-reference/components/image#device-sizes"
                        >define custom image breakpoints</a
                        >, <a href="/docs/pages/api-reference/components/image#caching-behavior"
                        >change caching behavior</a
                        > and more.</p
                    >
                    <p
                    ><a href="/docs/pages/api-reference/components/image#configuration-options"
                    ><strong
                    >Read the full image configuration documentation for more information.</strong
                            ></a
                        ></p
                    ></div
                ></article
            ></div
        >
    )
}