import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Newsletter() {
  return (
    <section className="py-8 px-4 w-10/12 mx-auto md:px-8">
      <div className="bg-black text-white rounded-full overflow-hidden flex flex-col md:flex-row items-center">
        <div className="p-6 md:p-8 flex-1">
          <h3 className="text-xl md:text-2xl font-bold">Join Our Newsletter</h3>
        </div>
        <div className="p-6 md:p-8 flex-1">
          <div className="flex flex-col sm:flex-row gap-3">
            <Input type="email" placeholder="Your email address" className="bg-white text-black rounded-full" />
            <Button className="bg-white text-black hover:bg-gray-200 rounded-full">Subscribe</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
