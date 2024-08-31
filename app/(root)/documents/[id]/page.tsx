import Header from "@/components/Header";
import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
  } from '@clerk/nextjs'

const Document = () => {
    return (
        <div>
            <Header>
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </Header>
        </div>
    )
}

export default Document;