export default function Contact() {
  return (
    <section id="contact">
      <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
        <div className="space-y-3">
          <div className="inline-flex items-center rounded-md border px-3 py-1 text-base font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary cursor-default transition-all duration-300 hover:scale-105">Contact</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-foreground">Get in Touch</h2>
          <p className="mx-auto max-w-[450px] text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
            Want to chat? Just shoot me a dm with a direct question on{' '}
            <a className="text-[#3670d9] hover:underline" href="https://linkedin.com/in/kushalbaj">LinkedIn</a>
          </p>
        </div>
      </div>
    </section>
  )
}

