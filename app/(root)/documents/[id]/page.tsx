import Header from "@/components/Header";
import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
  } from '@clerk/nextjs'

const Document = () => {
  
    return (
    <div className="p-2 w-full">
      <Header className="p-2 flex justify-between rounded-md shadow-md items-center">
        <div>
          Doc name
        </div>
        <div className="flex justify-around items-center w-[60px]">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </Header>
    </div>
    )
}

export default Document;