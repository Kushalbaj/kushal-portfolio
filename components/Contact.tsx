export default function Contact() {
  return (
    <section id="contact">
      <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
        <div className="space-y-3">
          <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-base">Contact</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
          <p className="mx-auto max-w-[450px] text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
            Want to chat? Just shoot me a dm with a direct question on{' '}
            <a className="text-[#3670d9] hover:underline" href="https://linkedin.com/in/kushalbaj">LinkedIn</a>
          </p>
        </div>
      </div>
    </section>
  )
}

