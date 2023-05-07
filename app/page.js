import Image from 'next/image'

export default function Home() {
  return (
  
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-lg">
      <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
        Get started today
      </h1>  
      <form
        action=""
        className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
      >
        <p className="text-center text-lg font-medium">Sign in to your account</p>
  
        <div>
          <label for="email" className="sr-only">Email</label>
  
          <div className="relative">
            <input
              type="email"
              className="w-full rounded-lg border-gray-200 focus:border-indigo-500 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter email"
            />

          </div>
        </div>
  
        <div>
          <label for="password" className="sr-only">Password</label>
  
          <div className="relative">
            <input
              type="password"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter password"
            />
            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              
            </span>
          </div>
        </div>
  
        <button
          type="submit"
          className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
        >
          Sign in
        </button>
      </form>
    </div>
    <button class="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">...</button>
    <button class="text-white px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800">...</button>
</div>
)
}
