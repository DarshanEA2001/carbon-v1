"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "",
  }),
  email: z.string().min(2, {
    message: "",
  }),
  phone: z.string().min(2, {
    message: "",
  }),
})
export default function Home() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {

  }
  return (
    <main className="flex min-h-screen flex-row justify-between">
      <div className="w-[40%] border-r-2 mt-20 mb-32">
        <img
          src="/logo.jpg"
          alt="Vercel Logo"
          className="dark:invert w-[600px] h-[600px] pb-20"
        />
      </div>
      <div className="w-[50%] pl-10 mt-24">
        <Tabs defaultValue="register" className="w-[75%]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="register" className="text-lg">Register</TabsTrigger>
            <TabsTrigger value="login" className="text-lg">Sign In</TabsTrigger>
          </TabsList>
          <TabsContent value="register" className="mt-10">
            <Card>
              <CardHeader>
                <CardTitle>Register</CardTitle>
                <CardDescription>
                  New to 021 Trade? Register yourself
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Form {...form}>
                  <div className="w-full">
                    <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-6">
                      <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-lg">Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter Your Name" className="h-12 text-md" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-lg">Email Id</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter Your Email" className="h-12 text-md" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-lg">Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter Your Phone Number" className="h-12 text-md" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" className="bg-black text-white">Submit</Button>
                        </DialogTrigger>
                        <DialogContent className="lg:max-w-[600px] bg-white">
                          <div className="">
                            <p className="text-2xl font-[600] text-center pt-16 pb-16">Please click on the link sent to your email.</p>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </form>
                  </div>
                </Form>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="login" className="mt-10">
            <Card>
              <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>
                  Already Registered? Login to your account
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {/* <Form {...form}>
                  <div className="w-full">
                    <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-6">
                      <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-lg">Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter Your Name" className="h-12 text-md" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-lg">Email Id</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter Your Email" className="h-12 text-md" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-lg">Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter Your Phone Number" className="h-12 text-md" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" className="bg-black text-white">submit</Button>
                        </DialogTrigger>
                        <DialogContent className="lg:max-w-[600px] bg-white">
                          <div className="">
                            <p className="text-2xl font-[600] text-center pt-16 pb-16">Please click on the link sent to your email.</p>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </form>
                  </div>
                </Form> */}
                <div className="flex w-full  items-center space-x-2 pt-10">
                  <Input type="email" placeholder="Login with your Registered email" className="h-12" />
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="bg-black text-white h-12">submit</Button>
                    </DialogTrigger>
                    <DialogContent className="lg:max-w-[600px] bg-white">
                      <div className="">
                        <p className="text-2xl font-[600] text-center pt-16 pb-16">Please click on the link sent to your email.</p>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
                <div className="text-center pt-4 pb-4">
                  <p className="text-xl">or</p>
                </div>
                <div className="px-6 sm:px-0 pb-48 h-12">
                  <button type="button" className="text-white w-full h-12 bg-[#000] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center mr-2 mb-2"><svg className="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>Login with Google<div></div></button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

      </div>
    </main>
  );
}



