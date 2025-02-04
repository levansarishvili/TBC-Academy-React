import { Star, User } from "lucide-react";
import CheckSubscriptionStatus from "../../../components/CheckSubscriptionStatus";
import GetUserData from "../../../components/GetUserData";
import DeleteAccount from "src/app/components/DeleteAccount";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "src/app/components/ui/avatar";
import { Button } from "src/app/components/ui/button";
import CreateProductForm from "src/app/components/forms/CreateProductForm";
import CreateBlogForm from "src/app/components/forms/CreateBlogForm";

export default async function ProfilePage() {
  const userData = await GetUserData();
  const userId = userData?.id as string;

  // Get subscription status
  const isProMember = await CheckSubscriptionStatus();

  return (
    <section className="max-w-[90rem] mx-auto px-6 md:px-12 lg:px-20 py-12 w-full">
      <h1 className="text-2xl lg:text-3xl font-medium text-center mb-10">
        My Account
      </h1>

      <div className="flex flex-col gap-12 md:gap-x-20 w-full border shadow-lg rounded-2xl p-4">
        {/* User details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
          <div className="flex flex-col items-center gap-8">
            <div className="relative">
              <div
                className={`w-24 h-24 md:w-28 md:h-28 rounded-full border-4 ${
                  isProMember ? "border-primary" : "border"
                } flex items-center justify-center overflow-hidden shadow-md`}
              >
                <Avatar className="w-full h-full">
                  <AvatarImage
                    src={
                      userData?.user_metadata?.avatar_url ||
                      "https://github.com/shadcn.png"
                    }
                    alt="user"
                    className="w-full h-full object-cover rounded-full"
                  />
                  <AvatarFallback className="">
                    <User className="size-10" />
                  </AvatarFallback>
                </Avatar>
              </div>
              {isProMember && (
                <div className="absolute -bottom-6 -right-5 md:-right-4 flex items-center gap-2 bg-primary text-white w-36  px-3 py-1 text-sm rounded-full shadow-md">
                  <Star className="w-5 h-5 fill-white" />
                  Pro Member
                </div>
              )}
            </div>

            <div className="text-center flex flex-col gap-4">
              {userData?.user_metadata?.user_name && (
                <p className="text-base">
                  Username: {userData?.user_metadata?.user_name}
                </p>
              )}
              <p className="text-base">Email: {userData?.email}</p>
            </div>

            {/* Cancel Subscription & Delete Account */}
            <div className="flex flex-col gap-6">
              <Button
                variant={"destructive"}
                className="w-full text-sm font-medium py-2 px-6 rounded-lg transition"
              >
                Cancel Subscription
              </Button>
              <DeleteAccount userId={userId} />
            </div>
          </div>

          <div className="flex flex-col gap-8 items-center w-full">
            <h2 className="text-2xl font-medium">Account Details</h2>
            <form className="flex flex-col justify-center items-center gap-6 w-full max-w-lg">
              {[
                { label: "Full Name", id: "full_name", type: "text" },
                { label: "Username", id: "user_name", type: "text" },
                { label: "Phone", id: "phone", type: "tel" },
                { label: "Email", id: "email", type: "email" },
              ].map(({ label, id, type }) => (
                <div key={id} className="flex flex-col w-full">
                  <label className="text-base mb-2" htmlFor={id}>
                    {label}*
                  </label>
                  <input
                    className="w-full rounded-lg px-4 py-2 text-base text-muted-foreground border focus:outline-primary dark:focus:outline-primary transition-all duration-300"
                    type={type}
                    id={id}
                    defaultValue={userData?.user_metadata[id] ?? ""}
                  />
                </div>
              ))}
              <Button
                variant={"default"}
                className="w-40 hover:bg-[#2ca76e] text-white text-sm font-medium text-foreground py-2 px-6 rounded-lg transition-all duration-300"
              >
                Save Changes
              </Button>
            </form>
          </div>
        </div>

        {/* Show create product form if user is a Pro member */}
        {isProMember && (
          <div>
            <CreateProductForm /> <CreateBlogForm />
          </div>
        )}

        {/* Get products that user created */}
        <div className="flex flex-wrap gap-8"></div>
      </div>
    </section>
  );
}
